<script setup lang='ts'>
import { computed, inject, unref } from 'vue'
import { POPPER_INJECTION_KEY } from './constants';
import { usePopper, Middleware } from "../hooks";
import { isNumber } from '../utils'

defineOptions({
	inheritAttrs: true,
})

const props = withDefaults(defineProps<{ tag?: string, x?: number | string, y?: number | string }>(), {
	tag: 'div',
	x: 0,
	y: 0,
})

const popper = inject(POPPER_INJECTION_KEY)

const offset  = computed(() => {
  return {
    x: isNumber(props.x) ? props.x : Number.parseInt(props.x as string),
    y: isNumber(props.y) ? props.y : Number.parseInt(props.y as string)
  }
})

const middlewares: Middleware[] = [
  {
    name: 'offset',
    options: {
      offset: [unref(offset).x, unref(offset).y],
    },
  }
]

const { floatingStyles }  = usePopper(popper!, middlewares)

</script>

<template>
	<component :is="props.tag" :ref="popper?.floating" :style="floatingStyles">
		<slot />
	</component>
</template>