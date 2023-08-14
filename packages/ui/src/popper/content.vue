<script setup lang='ts'>
import { inject, unref, ref } from 'vue'
import { POPPER_INJECTION_KEY } from './constants';

// @ts-ignore
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/vue';

defineOptions({
	inheritAttrs: true,
})

const props = withDefaults(defineProps<{ tag?: string, offset?: number }>(), {
	tag: 'div',
	offset: 0,
})

const popper = inject(POPPER_INJECTION_KEY)

const middleware = ref([offset(props.offset), flip(), shift()]);

const { floatingStyles } = useFloating(popper?.triggerRef, popper?.contentRef, {
	placement: unref(popper?.placement),
	strategy: unref(popper?.strategy),
	whileElementsMounted: autoUpdate,
	middleware: middleware,
});

</script>

<template>
	<component :is="props.tag" :ref="popper?.contentRef" :style="floatingStyles">
		<slot />
	</component>
</template>