<script setup lang="ts">

defineProps<{name: string}>()

</script>

<template>
  <div class="w-full">
    <div>
      <component :is="`ui-${name}`" />
    </div>
    <ui-avatar src="https://github.com/shadcn.png" />

    <slot />
  </div>
</template>
