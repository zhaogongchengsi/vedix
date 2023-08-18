<script setup lang='ts'>
import { OkuAvatar, OkuAvatarFallback, OkuAvatarImage } from '@oku-ui/avatar'
import { cva } from 'class-variance-authority'

defineOptions({
  name: 'Avatar',
  inheritAttrs: true,
})

withDefaults(defineProps<AvatarProps>(), {
  delayMs: 300,
  size: 'default',
})

interface AvatarProps {
  src?: string
  delayMs?: number | string
  size?: 'default' | 'sm' | 'lg'
}

const avatarVariants = cva(
  'block rounded-full overflow-hidden',
  {
    variants: {
      size: {
        default: 'h-9 w-9',
        sm: 'h-8 w-8',
        lg: 'h-10 w-10',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  },
)
</script>

<template>
  <OkuAvatar :class="avatarVariants({ size })">
    <slot>
      <OkuAvatarImage :src="src" />
    </slot>
    <OkuAvatarFallback :delay-ms="Number(delayMs)">
      <slot name="fallback" />
    </OkuAvatarFallback>
  </OkuAvatar>
</template>
