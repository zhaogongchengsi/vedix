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

function genCss(options: PresetVedixOptions) {

  const formate = (name: string, colors: Record<string | number, string>) => {
    return Object.entries(colors).map(([lev, color]) => {
      return `--${name}-${lev}: ${color};`
    })
  }

  const css = [
    formate('black', blackA),
    formate('white', whiteA),
    Object.entries(light).map(([name, color]) => {
      return formate(name, color)
    }).flat(),
    Object.entries(lightAlpha).map(([name, color]) => {
      return formate(`${name}-alpha`, color)
    }).flat()
  ].flat().join(';')

  const darkCss = [
    Object.entries(dark).map(([name, color]) => {
      return formate(`${name}`, color)
    }).flat(),
    Object.entries(darkAlpha).map(([name, color]) => {
      return formate(`${name}-alpha`, color)
    }).flat()
  ].flat().join(';')

  return `:root {\n${css}\n} .${options.darkSelector} {\n${darkCss}\n}`
}

function presetVedix(options: PresetVedixOptions = defaultOptions) {
  const _options = Object.assign({}, defaultOptions, options)
  const extend = _options.extend || true

  /*
   *  text-red-200
   *  text-red-alpha-200
   *  text-red-dark-200
   *  text-red-dark-alpha-200
   */
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
    preflights: [
      {
        getCSS: () => genCss(options),
      },
    ],
  }
}

export {
  presetVedix,
}
