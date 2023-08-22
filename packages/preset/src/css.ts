import { generateColor } from './colors'
import type { PresetVedixOptions } from './index'

export function genCss(options: PresetVedixOptions) {
  return generateColor(options, (color) => {
    return color.split(' ').join(', ')
  })
}
