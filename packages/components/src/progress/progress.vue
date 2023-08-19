<script setup lang="ts">
import { OkuProgress, OkuProgressIndicator } from '@oku-ui/progress'

defineProps<{ modelValue: number }>()
defineEmits(['update:modelValue'])
</script>

<template>
  <OkuProgress
    class="relative h-4 w-full overflow-hidden rounded-full bg-secondary"
    :value="modelValue"
  >
    <OkuProgressIndicator
      class="h-full w-full flex-1 bg-primary transition-all" :style="{
        transform: `translateX(${modelValue}%)`,
      }"
    />
  </OkuProgress>
</template>
