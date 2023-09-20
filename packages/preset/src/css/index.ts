import type { PresetVedixOptions } from '../index'
import { generateDarkToken, generateLightToken } from './color'

export function genCss({ darkSelector }: PresetVedixOptions) {
  const lightToken = generateLightToken()
  const darkToken = generateDarkToken()

  return `:root {\n${lightToken}\n}\n.${darkSelector}{\n${darkToken}\n}`
}
