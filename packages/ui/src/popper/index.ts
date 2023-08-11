import Popper from './src/popper.vue'

import PopperArrow from './src/arrow.vue'
import PopperTrigger from './src/trigger.vue'
import PopperContent from './src/content.vue'

export type { Placement, Options } from '@popperjs/core'
export { PopperArrow, PopperTrigger, PopperContent, Popper }

export default Popper

export * from './src/popper'
export * from './src/trigger'
export * from './src/content'
export * from './src/arrow'
export * from './src/constants'

