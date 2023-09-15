<script setup lang="ts">
import { OkuTabs } from '@oku-ui/tabs'

defineProps<{ defaultValue?: string }>()
</script>

<template>
  <OkuTabs :default-value="defaultValue" class="w-full">
    <slot />
  </OkuTabs>
</template>
