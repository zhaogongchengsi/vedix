<template>
  <div>
    <div role="tab" :class="props.itemHeadClass" :aria-expanded="isActive" :tabindex="disabled ? -1 : 0">
      <slot name="head" :click="handleHeaderClick" :focus="handleFocus" :blur="handleBlur" />
    </div>
    <collapse-transition :name="props.transitionName">
      <div v-show="isActive" role="tabpanel">
        <div :class="props.itemContentClass">
          <slot />
        </div>
      </div>
    </collapse-transition>
  </div>
</template>

<script lang="ts" setup>
import CollapseTransition from '../../collapse-transition'
import { generateId } from '../../utils';
import { inject, ref, computed } from 'vue'

import { collapseContextKey } from './constants';

defineOptions({
  name: 'CollapseItem',
  inheritAttrs: true
})

const props = withDefaults(defineProps<{
  itemContentClass?: string | string[]
  itemHeadClass?: string | string[]
  name?: string | number
  disabled?: boolean,
  transitionName: string | string[]
}>(), {
  itemContentClass: '',
  itemHeadClass: '',
  name: generateId(),
  disabled: false,
  transitionName: 'collapse-transition'
})

const collapse = inject(collapseContextKey)

const focusing = ref(false)
const isClick = ref(false)
const id = ref(generateId())

const isActive = computed(() => collapse?.activeNames.value.includes(props.name))

const handleFocus = () => {
  setTimeout(() => {
    if (!isClick.value) {
      focusing.value = true
    } else {
      isClick.value = false
    }
  }, 50)
}

const handleHeaderClick = () => {
  if (props.disabled) return
  collapse?.handleItemClick(props.name)
  focusing.value = false
  isClick.value = true
}

const handleBlur = () => {
  focusing.value = false
}


defineExpose({
  /** @description current collapse-item whether active */
  isActive,
})
</script>
