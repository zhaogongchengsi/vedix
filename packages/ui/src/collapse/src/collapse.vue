<template>
  <div role="tablist" aria-multiselectable="true">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { collapseEmits, collapseProps } from './collapse'
import { useCollapse } from './use-collapse'

defineOptions({
  name: 'Collapse',
  inheritAttrs: true
})
const props = defineProps(collapseProps)
const emit = defineEmits(collapseEmits)

const { activeNames, setActiveNames } = useCollapse(props, emit)

defineExpose({
  /** @description active names */
  activeNames,
  /** @description set active names */
  setActiveNames,
})
</script>
