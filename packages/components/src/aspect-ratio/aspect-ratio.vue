<script setup lang='ts'>
import { OkuAspectRatio } from '@oku-ui/aspect-ratio'

defineOptions({
  name: 'AspectRatio',
  inheritAttrs: true,
})

defineProps<aspectRatioProps>()

interface aspectRatioProps {
  ratio: number
}
</script>

<template>
  <OkuAspectRatio :ratio="ratio">
    <slot />
  </OkuAspectRatio>
</template>

<style></style>
