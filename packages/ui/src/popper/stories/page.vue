<script setup lang='ts'>
import { Popper, PopperContent, PopperTrigger, PopperArrow } from '../index'
import Button from '../../../components/button.vue';
import { ref } from 'vue'


const open = ref(false)


</script>

<template>
	<div class="w-full w-full h-screen flex items-center justify-center">

		<Popper>
			<popper-trigger>
				<Button @click="open = !open">Click</Button>
			</popper-trigger>

			<popper-arrow class="arrow" />

			<teleport to="body">
				<popper-content v-if="open">
					<div class="p-2 w-100 bg-slate-700 rounded-md text-white">
						<p>
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique deleniti, repellat eum
							dolore
							cumque, alias, cupiditate suscipit quas saepe iste consequatur tempora itaque. Quaerat sit
							eveniet
							soluta quasi corporis doloribus.
						</p>
					</div>
				</popper-content>
			</teleport>
		</Popper>

	</div>
</template>

<style>
.arrow {
	width: 0;
	height: 0;
	border-style: solid;
	border-width: 8px 7px 0 7px;
	border-color: #7048e8 transparent transparent transparent;
}
</style>
