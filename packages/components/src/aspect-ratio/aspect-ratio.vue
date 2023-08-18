<script setup lang='ts'>
import { OkuAspectRatio } from '@oku-ui/aspect-ratio'

defineOptions({
	inheritAttrs: true,
	name: 'AspectRatio'
})

interface aspectRatioProps {
	ratio: number,
}

defineProps<aspectRatioProps>()

</script>

<template>
	<OkuAspectRatio :ratio="ratio">
		<slot />
	</OkuAspectRatio>
</template>

<style></style>