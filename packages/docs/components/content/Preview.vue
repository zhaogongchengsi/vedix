<script setup lang="ts">

defineProps<{name: string}>()

</script>

<template>
  <div class="w-full">
    <div>
      <component :is="`vedix-${name}`">
        <slot />
      </component>
    </div>
  </div>
</template>
