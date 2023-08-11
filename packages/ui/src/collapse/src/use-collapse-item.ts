import { computed, inject, ref } from 'vue'
import { generateId } from '../../utils'
import { collapseContextKey } from './constants'

export const useCollapseItem = (props:any) => {
  const collapse = inject(collapseContextKey)

  const focusing = ref(false)
  const isClick = ref(false)
  const id = ref(generateId())

  const isActive = computed(() =>
    collapse?.activeNames.value.includes(props.name)
  )

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

  const handleEnterClick = () => {
    collapse?.handleItemClick(props.name)
  }

  return {
    focusing,
    id,
    isActive,
    handleFocus,
    handleHeaderClick,
    handleEnterClick,
  }
}

