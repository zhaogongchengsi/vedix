<script setup lang='ts'>
import {ref, nextTick} from 'vue'
import {usePopper} from '../hooks/use-popper'

const vis = ref(false)

const triggerRef = ref(null);
const contentRef = ref(null);

const props = withDefaults(defineProps<{
  trigger?: 'hover' | 'click' | 'focus'
  triggerTag?: string,
  triggerClass?: sring | string[],
  contentTag?: string,
  contentClass?: string | string[]
}>(), {
  triggerTag: "div",
  triggerClass: '',
  contentTag: 'div',
  contentClass: ''
})

const {update, styles} = usePopper(triggerRef, contentRef)
const triggerHandler = async () => {
  vis.value = !vis.value
  await nextTick()
  if (vis.value) {
    await update()
  }
}

</script>

<template>
  <component :is="props.triggerTag" :class="props.triggerClass"  ref="triggerRef" @click="triggerHandler">
    <slot name="trigger"></slot>
  </component>
  <teleport to="body">
    <component ref="contentRef" :is="props.contentTag" :class="props.contentClass" :style="styles.popper" v-if="vis">
      <slot></slot>
    </component>
  </teleport>
</template>

