import * as dark from './colors/dark'
import * as darkAlpha from './colors/dark-alpha'
import * as light from './colors/light'
import * as lightAlpha from './colors/light-alpha'
import { blackA } from './colors/blackA'
import { whiteA } from './colors/whiteA'

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

  const colors = Object.fromEntries(Object.entries(light).map(([name, color]) => {
    return [name, {
      ...color,
      alpha: Reflect.get(lightAlpha, name),
      dark: {
        ...Reflect.get(dark, name),
        alpha: Reflect.get(darkAlpha, name)
      }
    }]
  }))

  return {
    name: 'unocss-preset-vedix',
    extendTheme(theme: Record<string, any>) {
      theme.colors = {
        ...(extend && theme.colors),
        black: blackA,
        white: whiteA,
        ...colors,
      }
    },
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
