<script setup lang='ts'>
import { OkuAvatar, OkuAvatarFallback, OkuAvatarImage } from '@oku-ui/avatar'
import { cva } from 'class-variance-authority'

withDefaults(defineProps<{
  src?: string
  delayMs?: number | string
  size?: 'default' | 'sm' | 'lg'
}>(), {
  delayMs: 300,
  size: 'default',
})

const variants = {
  size: {
    default: 'h-9 w-9',
    sm: 'h-8 w-8',
    lg: 'h-10 w-10',
  },
}

cva("block rounded-full overflow-hidden", { variants })

</script>

<template>
  <OkuAvatar>
    <slot>
      <OkuAvatarImage :src="src" />
    </slot>
    <OkuAvatarFallback :delay-ms="Number(delayMs)">
      <slot name="fallback" />
    </OkuAvatarFallback>
  </OkuAvatar>
</template>
