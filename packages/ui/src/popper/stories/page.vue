<script setup lang='ts'>
import { Popper, Content, Trigger } from '../index'
import Button from '../../../../components/src/button.vue';
import { ref } from 'vue'

const open = ref(false)

</script>

<template>
	<div class="w-full w-full h-screen flex items-center justify-center">

		<Popper>

			<Trigger class="flex">
				<Button @click="open = !open">Click</Button>
			</Trigger>

			<teleport to="body">
				<Content v-if="open" :y="10" class="p-2 w-100 bg-slate-700 rounded-md text-white" :offset="5">
					<p>
						Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique deleniti, repellat eum
						dolore
						cumque, alias, cupiditate suscipit quas saepe iste consequatur tempora itaque. Quaerat sit
						eveniet
						soluta quasi corporis doloribus.
					</p>
				</Content>
			</teleport>

		</Popper>

	</div>
</template>
