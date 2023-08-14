<script setup lang='ts'>
import { inject } from 'vue'
import { POPPER_INJECTION_KEY } from './constants';

defineOptions({
	inheritAttrs: true
})

const props = withDefaults(defineProps<{
	tag?: string
}>(), {
	tag: "span"
})

const popper = inject(POPPER_INJECTION_KEY)

</script>

<template>
	<component :is="props.tag" :ref="popper?.arrowRef" data-popper-arrow />
</template>
