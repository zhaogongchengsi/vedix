<script setup lang="ts">
defineOptions({
  name: 'Alert',
  inheritAttrs: true,
})

withDefaults(
  defineProps<{ variant?: 'default' | 'destructive' }>(),
  {
    variant: 'default',
  },
)
</script>

<template>
  <transition name="feat">
    <div class="flex items-start">
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
