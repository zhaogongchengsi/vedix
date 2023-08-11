import { computed, ref, unref } from 'vue'
import { useZIndex } from '../../../hooks'

import type { CSSProperties, StyleValue } from 'vue'
import type { UsePopperReturn } from '../../../hooks'
import type { UsePopperContentReturn } from './use-content'
import type { PopperContentProps } from '../content'

export const usePopperContentDOM = (
  props: PopperContentProps,
  {
    attributes,
    styles,
    role,
  }: Pick<UsePopperReturn, 'attributes' | 'styles'> &
    Pick<UsePopperContentReturn, 'role'>
) => {
  const { nextZIndex } = useZIndex()

  const contentAttrs = computed(() => unref(attributes).popper)
  const contentZIndex = ref<number>(props.zIndex || nextZIndex())

  // todo: content -  class 
  const contentClass = computed(() => [])

  const contentStyle = computed<StyleValue[]>(() => {
    return [
      { zIndex: unref(contentZIndex) } as CSSProperties,
      unref(styles).popper as CSSProperties,
      props.popperStyle || {},
    ]
  })
  const ariaModal = computed<string | undefined>(() =>
    role.value === 'dialog' ? 'false' : undefined
  )
  const arrowStyle = computed(
    () => (unref(styles).arrow || {}) as CSSProperties
  )

  const updateZIndex = () => {
    contentZIndex.value = props.zIndex || nextZIndex()
  }

  return {
    ariaModal,
    arrowStyle,
    contentAttrs,
    contentClass,
    contentStyle,
    contentZIndex,

    updateZIndex,
  }
}

export type UsePopperContentDOMReturn = ReturnType<typeof usePopperContentDOM>
