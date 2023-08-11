<template>
  <div class="w-full h-full flex items-center justify-center flex-col p-3">

    <Popper placement="right" :width="400" trigger="click">
      <PopperTrigger>
        <Button>
          点击
        </Button>
      </PopperTrigger>
      <PopperContent>
        <div class="p-3 bg-gray-100 rounded-lg w-100">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt tempora laudantium, obcaecati eaque temporibus
          corporis deleniti maiores consequuntur consequatur fugiat praesentium voluptates amet magni sapiente veritatis
          sequi deserunt itaque ex.
        </div>
      </PopperContent>
    </Popper>

  </div>
</template>

<script lang="ts" setup>
import Popper, { PopperTrigger, PopperContent } from '../popper'
import Button from '../components/button.vue'
</script>
