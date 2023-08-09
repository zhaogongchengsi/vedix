<script setup lang="ts">
import Button from "~/components/ui/button.vue";
import { Popover } from "../../packages/ui/src/popover";
import {ref} from "vue";


const triggerHandler = async (value: boolean) => {
  console.log(value)
}

</script>

<template>
  <div class="w-full h-screen flex flex-col justify-center items-center">
    <Popover trigger="click" @trigger="triggerHandler" content-class="border p-3 w-100">
      <template #trigger>
        <Button variant="secondary">Secondary</Button>
      </template>
      <div>
        abcaser
      </div>
    </Popover>
  </div>
</template>
