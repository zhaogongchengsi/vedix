<script setup lang='ts'>
import { inject } from 'vue'
import { POPPER_INJECTION_KEY } from './constants';

defineOptions({
	inheritAttrs: true,
})

const popper = inject(POPPER_INJECTION_KEY)

</script>

<template>
	<div :ref="popper?.triggerRef">
		<slot />
	</div>
</template>