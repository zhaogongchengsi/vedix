<script setup lang='ts'>
import { ref } from 'vue';
import { useFloating } from '@floating-ui/vue';

const reference = ref(null);
const floating = ref(null);
const { floatingStyles } = useFloating(reference, floating);

</script>

<template>
  <div>

  </div>
</template>
