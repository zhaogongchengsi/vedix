<script setup lang="ts">
import { OkuTabsList } from '@oku-ui/tabs'

withDefaults(defineProps<{ asChild?: boolean; loop?: boolean }>(), {
  loop: true,
})
</script>

<template>
  <OkuTabsList :as-child="asChild" :loop="loop" class="p-1 gap-1 flex items-center rounded-md bg-muted p-1 text-muted-foreground">
    <slot />
  </OkuTabsList>
</template>
