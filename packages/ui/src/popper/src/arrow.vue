<template>
  <span ref="arrowRef" :style="arrowStyle" data-popper-arrow />
</template>

<script lang="ts" setup>
import { inject, onBeforeUnmount, watch } from 'vue'
import { POPPER_CONTENT_INJECTION_KEY } from './constants'
import { popperArrowProps } from './arrow'

defineOptions({
  name: 'PopperArrow',
  inheritAttrs: false,
})

const props = defineProps(popperArrowProps)

const { arrowOffset, arrowRef, arrowStyle } = inject(
  POPPER_CONTENT_INJECTION_KEY,
  undefined
)!

watch(
  () => props.arrowOffset,
  (val) => {
    arrowOffset.value = val
  }
)
onBeforeUnmount(() => {
  arrowRef.value = undefined
})

defineExpose({
  /**
   * @description Arrow element
   */
  arrowRef,
})
</script>
