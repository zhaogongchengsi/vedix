<script setup lang='ts'>
import { ref, unref } from 'vue'
import { usePopper } from '../hooks/use-popper'
import { vElementHover } from '@vueuse/components'
import { onClickOutside } from '@vueuse/core'

const vis = ref(false)

const triggerRef = ref(null);
const contentRef = ref(null);

const props = withDefaults(defineProps<{
  trigger?: 'hover' | 'click' | 'focus'
  triggerTag?: string,
  triggerClass?: string | string[],
  contentTag?: string,
  contentClass?: string | string[],
  to?: string,
  outside?: boolean
  strategy?: 'absolute' | 'fixed'
  placement: 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end';
}>(), {
  triggerTag: "div",
  triggerClass: '',
  contentTag: 'div',
  contentClass: '',
  to: 'body',
  trigger: 'click',
  outside: true,
  strategy: 'fixed',
  placement: "auto"
})

const emits = defineEmits(['trigger'])

const { update, styles } = usePopper(triggerRef.value!, contentRef.value!, {
  strategy: props.strategy, placement: props.placement
})

const triggerHandler = async (type: string) => {

  if (type !== props.trigger) {
    return
  }

  vis.value = !vis.value
  await update()

  emits('trigger', unref(vis), type)

}

if (props.outside) {

  onClickOutside(contentRef, async () => {
    vis.value = false
    await update()
    emits('trigger', unref(vis), 'outside')
  }, { ignore: [triggerRef] })

}
</script>

<template>
  <component :is="props.triggerTag" :class="props.triggerClass" ref="triggerRef"
    v-element-hover="() => triggerHandler('hover')" @click="() => triggerHandler('click')"
    @focus="() => triggerHandler('focus')">
    <slot name="trigger" />
  </component>
  <teleport :to="props.to">
    <component ref="contentRef" :is="props.contentTag" :class="props.contentClass" :style="styles.popper" v-if="vis">
      <slot></slot>
    </component>
  </teleport>
</template>

