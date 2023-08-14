<template>
	<div class="w-full h-screen flex flex-col items-center justify-center">
		<Collapse v-model="activeNames" class="w-200 border">
			<collapse-item name="1" item-content-class="border-t">
				<template #head="{ click, active }">
					<div class="py-1 px-2 text-xl" @click="click">
						Hello
						<span>{{ active ? 'active' : 'not active' }}</span>
					</div>
				</template>
				<div class="p-3">
					<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, enim. Quidem voluptatum dolorem a
						consequuntur ratione earum quia doloremque aliquam consequatur est porro rerum quam labore,
						inventore
						voluptatem! Nihil, optio.
					</p>
				</div>
			</collapse-item>
		</Collapse>
	</div>
</template>
<script setup lang="ts">
import { Collapse, CollapseItem } from '../index'
import { ref } from 'vue'

const activeNames = ref(['1'])
</script>
