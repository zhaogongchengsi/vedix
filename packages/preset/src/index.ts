import { generateTheme } from './theme'

export interface PresetVedixOptions {
  theme: string

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

const defaultOptions: PresetVedixOptions = { theme: 'all', extend: true, darkSelector: 'dark' }

function presetVedix(options: PresetVedixOptions = defaultOptions) {
  const _options = Object.assign({}, defaultOptions, options)
  const extend = _options.extend || true

  const { borderRadius, boxShadow, screens, fontSize, fontWeight, lineHeight, letterSpacing, spacing } = generateTheme()

  return {
    name: 'unocss-preset-vedix',
    // extendTheme(theme: Record<string, any>) {
    //   theme.colors = {
    //     ...(extend && theme.colors),
    //   }
    //   theme.borderRadius = borderRadius
    //   theme.boxShadow = boxShadow
    //   theme.screens = screens
    //   theme.fontSize = fontSize
    //   theme.fontWeight = fontWeight
    //   theme.lineHeight = lineHeight
    //   theme.letterSpacing = letterSpacing
    //   theme.spacing = spacing
    // },
    // preflights: [
    //   {
    //     getCSS: () => genCss(_options),
    //   },
    // ],
  }
}

export {
  presetVedix,
}
