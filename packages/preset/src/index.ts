import { generateTheme } from './theme'
import { genCss } from './css'
import type { Color, ColorSet } from './colors'
import { neutral as _neutral, slate as _slate, stone as _stone, zinc as _zinc } from './colors'

export interface Theme {
  name: string
  color: ColorSet
}

export const neutral: Theme = {
  name: 'neutral',
  color: _neutral,
}
export const slate: Theme = {
  name: 'slate',
  color: _slate,
}
export const stone: Theme = {
  name: 'stone',
  color: _stone,
}
export const zinc: Theme = {
  name: 'zinc',
  color: _zinc,
}

export {
  type ColorSet, type Color,
}

export interface PresetVedixOptions {
  theme: {
    name: string
    color: ColorSet
  }

  /**
     * Customize the selector used to apply the dark versions of the color palette
     * @default ".dark"
     */
  darkSelector?: string

  /**
     * Extend instead of override the default theme
     * @default true
     */
  extend?: boolean
}

const defaultOptions: PresetVedixOptions = { theme: slate, extend: true, darkSelector: '.dark' }

export default function presetVedix(options: PresetVedixOptions = defaultOptions) {
  const _options = Object.assign({}, defaultOptions, options)
  const extend = _options.extend || true

  const { colors, fontFamily, animation, keyframes } = generateTheme()

  return {
    name: 'unocss-preset-vedix',
    extendTheme(theme: Record<string, any>) {
      theme.colors = {
        ...colors,
        ...(extend ? theme.colors : {}),
      }
      theme.fontFamily = fontFamily
      theme.animation = animation
      theme.keyframes = keyframes
    },
    preflights: [
      {
        getCSS: () => genCss(_options),
      },
    ],
  }
}
