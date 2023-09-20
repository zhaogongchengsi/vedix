<script setup lang="ts">
import { OkuLabel } from '@oku-ui/label'
import { ref } from 'vue'

defineOptions({
  name: 'VLabel',
  inheritAttrs: true,
})

const labelRef = ref<typeof OkuLabel>()

defineExpose({
  labelRef,
})
</script>

<template>
  <OkuLabel ref="labelRef" class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
    <slot />
  </OkuLabel>
</template>
