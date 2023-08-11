import { computed, onBeforeUnmount, onBeforeMount, ref, shallowRef, unref, watch } from 'vue'
import { createPopper } from '@popperjs/core'
import { fromPairs } from 'lodash-unified'
import { isClient } from '../utils'
import { useGetDerivedNamespace } from './use-namespace'
import { useIdInjection } from './use-id'

import type { Ref } from 'vue'
import type {
  Instance,
  Modifier,
  Options,
  State,
  VirtualElement,
} from '@popperjs/core'

type ElementType = HTMLElement | undefined
type ReferenceElement = ElementType | VirtualElement
export type PartialOptions = Partial<Options>

export const usePopper = (
  referenceElementRef: Ref<ReferenceElement>,
  popperElementRef: Ref<ElementType>,
  opts: Ref<PartialOptions> | PartialOptions = {} as PartialOptions
) => {
  const stateUpdater = {
    name: 'updateState',
    enabled: true,
    phase: 'write',
    fn: ({ state }) => {
      const derivedState = deriveState(state)

      Object.assign(states.value, derivedState)
    },
    requires: ['computeStyles'],
  } as Modifier<'updateState', any>

  const options = computed<Options>(() => {
    const { onFirstUpdate, placement, strategy, modifiers } = unref(opts)

    return {
      onFirstUpdate,
      placement: placement || 'bottom',
      strategy: strategy || 'absolute',
      modifiers: [
        ...(modifiers || []),
        stateUpdater,
        { name: 'applyStyles', enabled: false },
      ],
    }
  })

  const instanceRef = shallowRef<Instance | undefined>()
  const states = ref<Pick<State, 'styles' | 'attributes'>>({
    styles: {
      popper: {
        position: unref(options).strategy,
        left: '0',
        top: '0',
      },
      arrow: {
        position: 'absolute',
      },
    },
    attributes: {},
  })

  const destroy = () => {
    if (!instanceRef.value) return

    instanceRef.value.destroy()
    instanceRef.value = undefined
  }

  watch(
    options,
    (newOptions) => {
      const instance = unref(instanceRef)
      if (instance) {
        instance.setOptions(newOptions)
      }
    },
    {
      deep: true,
    }
  )

  watch(
    [referenceElementRef, popperElementRef],
    ([referenceElement, popperElement]) => {
      destroy()
      if (!referenceElement || !popperElement) return

      instanceRef.value = createPopper(
        referenceElement,
        popperElement,
        unref(options)
      )
    }
  )

  onBeforeUnmount(() => {
    destroy()
  })

  return {
    state: computed(() => ({ ...(unref(instanceRef)?.state || {}) })),
    styles: computed(() => unref(states).styles),
    attributes: computed(() => unref(states).attributes),
    update: () => unref(instanceRef)?.update(),
    forceUpdate: () => unref(instanceRef)?.forceUpdate(),
    // Preventing end users from modifying the instance.
    instanceRef: computed(() => unref(instanceRef)),
  }
}

function deriveState(state: State) {
  const elements = Object.keys(state.elements) as unknown as Array<
    keyof State['elements']
  >

  const styles = fromPairs(
    elements.map(
      (element) =>
        [element, state.styles[element] || {}] as [
          string,
          State['styles'][keyof State['styles']]
        ]
    )
  )

  const attributes = fromPairs(
    elements.map(
      (element) =>
        [element, state.attributes[element]] as [
          string,
          State['attributes'][keyof State['attributes']]
        ]
    )
  )

  return {
    styles,
    attributes,
  }
}




let cachedContainer: HTMLElement

export const usePopperContainerId = () => {
  const namespace = useGetDerivedNamespace()
  const idInjection = useIdInjection()

  const id = computed(() => {
    return `${namespace.value}-popper-container-${idInjection.prefix}`
  })
  const selector = computed(() => `#${id.value}`)

  return {
    id,
    selector,
  }
}

const createContainer = (id: string) => {
  const container = document.createElement('div')
  container.id = id
  document.body.appendChild(container)
  return container
}

export const usePopperContainer = () => {
  const { id, selector } = usePopperContainerId()
  onBeforeMount(() => {
    if (!isClient) return

    // This is for bypassing the error that when under testing env, we often encounter
    // document.body.innerHTML = '' situation
    // for this we need to disable the caching since it's not really needed
    if (
      process.env.NODE_ENV === 'test' ||
      (!cachedContainer && !document.body.querySelector(selector.value))
    ) {
      cachedContainer = createContainer(id.value)
    }
  })

  return {
    id,
    selector,
  }
}


export type UsePopperReturn = ReturnType<typeof usePopper>
