<script setup lang='ts'>
import { ref, provide, shallowReactive } from 'vue';
import { IUsePopperOptions } from '../hooks/use-popper'
import { POPPER_INJECTION_KEY, type Strategy, type Placement } from './constants';

const props = withDefaults(defineProps<{
	strategy?: Strategy
	placement?: Placement
}>(), {
	strategy: 'fixed',
	placement: "bottom"
})

const triggerRef = ref<HTMLElement | undefined>(undefined)
const contentRef = ref<HTMLElement | undefined>(undefined)

const options = shallowReactive<IUsePopperOptions>({
  reference: triggerRef,
  floating: contentRef,
  placement: props.placement,
  strategy: props.strategy
})

provide(POPPER_INJECTION_KEY, options)

</script>

<template>
	<slot />
</template>