<template>
  <only-child v-if="!virtualTriggering" v-bind="$attrs">
    <slot />
  </only-child>
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount, onMounted, watch } from 'vue'
import { unrefElement } from '@vueuse/core'

import { OnlyChild } from '../../slot'
import { useForwardRef } from '../../hooks'
import { isElement } from '../../utils'

import { POPPER_INJECTION_KEY } from './constants'
import { popperTriggerProps } from './trigger'

import type { WatchStopHandle } from 'vue'

defineOptions({
  name: 'PopperTrigger',
  inheritAttrs: false,
})

const props = defineProps(popperTriggerProps)

const { triggerRef } = inject(POPPER_INJECTION_KEY, undefined)!

useForwardRef(triggerRef)

let virtualTriggerAriaStopWatch: WatchStopHandle | undefined = undefined

onMounted(() => {
  watch(
    () => props.virtualRef,
    (virtualEl) => {
      if (virtualEl) {
        triggerRef.value = unrefElement(virtualEl as HTMLElement)
      }
    },
    {
      immediate: true,
    }
  )

  watch(
    triggerRef,
    (el, prevEl) => {
      virtualTriggerAriaStopWatch?.()
      virtualTriggerAriaStopWatch = undefined
      if (isElement(el)) {
        ; (
          [
            'onMouseenter',
            'onMouseleave',
            'onClick',
            'onKeydown',
            'onFocus',
            'onBlur',
            'onContextmenu',
          ] as const
        ).forEach((eventName) => {
          const handler = props[eventName]
          if (handler) {
            ; (el as HTMLElement).addEventListener(
              eventName.slice(2).toLowerCase(),
              handler
            )
              ; (prevEl as HTMLElement)?.removeEventListener?.(
                eventName.slice(2).toLowerCase(),
                handler
              )
          }
        })
      }
      if (isElement(prevEl)) {
        ;[
          'aria-controls',
          'aria-describedby',
          'aria-haspopup',
          'aria-expanded',
        ].forEach((key) => prevEl.removeAttribute(key))
      }
    },
    {
      immediate: true,
    }
  )
})

onBeforeUnmount(() => {
  virtualTriggerAriaStopWatch?.()
  virtualTriggerAriaStopWatch = undefined
})

defineExpose({
  /**
   * @description trigger element
   */
  triggerRef,
})
</script>
