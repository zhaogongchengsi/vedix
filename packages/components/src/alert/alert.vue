<script setup lang="ts">

import {cva, VariantProps} from "class-variance-authority";

defineOptions({
  name: "Alert",
  inheritAttrs: true
})

const alertVariants = cva(
    "flex items-start",
    {
      variants: {
        variant: {
          default:
              "default",
          destructive:
              "destructive",
        }
      },
      defaultVariants: {
        variant: "default",
      },
    }
)

type alertProps = VariantProps<typeof alertVariants>;

withDefaults(
    defineProps<{ variant?: alertProps["variant"] }>(),
    {
      variant: "default",
    }
);

</script>

<template>
  <transition name="feat">
    <div :class="alertVariants({variant})">
      <slot />
    </div>
  </transition>
</template>

<style>
.feat-enter-active,
.feat-leave-active {
  --transition-time: 0.5s;
  transition: opacity var(--transition-time) ease;
}

.feat-enter-from,
.feat-leave-to {
  opacity: 0;
}
</style>