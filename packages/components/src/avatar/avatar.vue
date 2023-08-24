<script setup lang='ts'>
import { OkuAvatar, OkuAvatarFallback, OkuAvatarImage } from '@oku-ui/avatar'

defineOptions({
  name: 'Avatar',
  inheritAttrs: true,
})

withDefaults(defineProps<{ delayMs?: number; size?: 'default' | 'sm' | 'lg'; src: string }>(), {
  delayMs: 300,
  size: 'default',
})
</script>

<template>
  <OkuAvatar
    class="block rounded-full overflow-hidden" :class="{
      'h-9 w-9': size === 'default',
      'h-8 w-8': size === 'sm',
      'h-10 w-10': size === 'lg',
    }"
  >
    <slot>
      <OkuAvatarImage :src="src" />
    </slot>
    <OkuAvatarFallback :delay-ms="Number(delayMs)">
      <slot name="fallback" />
    </OkuAvatarFallback>
  </OkuAvatar>
</template>
