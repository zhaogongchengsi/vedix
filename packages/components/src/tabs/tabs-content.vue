<script setup lang="ts">
import { OkuTabsContent } from '@oku-ui/tabs'

defineProps<{ asChild?: boolean; forceMount?: boolean; value: string }>()
</script>

<template>
  <OkuTabsContent :as-child="asChild" :first-mount="forceMount" :value="value" class="rounded-lg border bg-card text-card-foreground shadow-sm mt-2">
    <slot />
  </OkuTabsContent>
</template>
