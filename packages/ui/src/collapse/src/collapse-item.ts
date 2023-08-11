import { buildProps, definePropType, generateId } from '../../utils'
import type { ExtractPropTypes } from 'vue'
import type { CollapseActiveName } from './collapse'

export const collapseItemProps = buildProps({
  name: {
    type: definePropType<CollapseActiveName>([String, Number]),
    default: () => generateId(),
  },
  disabled: Boolean,
} as const)
export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>
