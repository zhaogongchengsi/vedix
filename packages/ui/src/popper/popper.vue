<script setup lang='ts'>
import { ref, provide, toRefs } from 'vue';
import { POPPER_INJECTION_KEY, type Strategy, type Placement } from './constants';

const props = withDefaults(defineProps<{
	strategy?: Strategy
	placement?: Placement
}>(), {
	strategy: 'fixed',
	placement: "bottom"
})

const triggerRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const arrowRef = ref<HTMLElement>()

provide(POPPER_INJECTION_KEY, {
	triggerRef,
	contentRef,
	arrowRef,
	...toRefs(props)
})

</script>

<template>
	<slot />
</template>