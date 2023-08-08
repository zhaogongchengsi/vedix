<script setup lang='ts'>
import Trigger from './trigger.vue'

</script>

<template>
	<Trigger>
		<slot name="trigger"></slot>
	</Trigger>
	<slot></slot>
</template>

