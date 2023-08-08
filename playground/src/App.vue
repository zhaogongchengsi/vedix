<script setup lang="ts">
import Button from "~/components/ui/button.vue";
import { Popover } from "../../packages/ui/src/popover";

</script>

<template>
  <div class="w-full h-screen flex flex-col justify-center items-center">
    <Popover>
      <template #trigger>
        <Button variant="secondary">Secondary</Button>
      </template>
      <div>
        abcaser
      </div>
    </Popover>
  </div>
</template>
