import type { PresetVedixOptions } from './index'

export type Color = [string, string] | string

export interface ColorSet {
  background: Color
  foreground: Color
  muted: Color
  'muted-foreground': Color
  popover: Color
  'popover-foreground': Color
  border: Color
  input: Color
  card: Color
  'card-foreground': Color
  primary: Color
  'primary-foreground': Color
  secondary: Color
  'secondary-foreground': Color
  accent: Color
  'accent-foreground': Color
  destructive: Color
  'destructive-foreground': Color
  ring: Color
}

export const slate: ColorSet = {
  'background': ['0 0% 100%', '222.2 84% 4.9%'],
  'foreground': ['222.2 84% 4.9%', '210 40% 98%'],
  'muted': ['210 40% 96.1%', '217.2 32.6% 17.5%'],
  'muted-foreground': ['215.4 16.3% 46.9%', '215 20.2% 65.1%'],
  'popover': ['0 0% 100%', '222.2 84% 4.9%'],
  'popover-foreground': ['222.2 84% 4.9%', '210 40% 98%'],
  'border': ['214.3 31.8% 91.4%', '217.2 32.6% 17.5%'],
  'input': ['214.3 31.8% 91.4%', '217.2 32.6% 17.5%'],
  'card': ['0 0% 100%', '222.2 84% 4.9%'],
  'card-foreground': ['222.2 84% 4.9%', '210 40% 98%'],
  'primary': ['222.2 47.4% 11.2%', '210 40% 98%'],
  'primary-foreground': ['210 40% 98%', '222.2 47.4% 11.2%'],
  'secondary': ['210 40% 96.1%', '217.2 32.6% 17.5%'],
  'secondary-foreground': ['222.2 47.4% 11.2%', 'secondary-foreground'],
  'accent': ['210 40% 96.1%', 'accent'],
  'accent-foreground': ['222.2 47.4% 11.2%', 'accent-foreground'],
  'destructive': ['0 84.2% 60.2%', 'destructive'],
  'destructive-foreground': ['210 40% 98%', 'destructive-foreground'],
  'ring': ['215 20.2% 65.1%', '217.2 32.6% 17.5%'],
}

export const neutral: ColorSet = {
  'background': ['0 0% 100%', '0 0% 3.9%'],
  'foreground': ['0 0% 3.9%', '0 0% 98%'],
  'muted': ['0 0% 96.1%', '0 0% 14.9%'],
  'muted-foreground': ['0 0% 45.1%', '0 0% 63.9%'],
  'popover': ['0 0% 100%', '0 0% 3.9%'],
  'popover-foreground': ['0 0% 3.9%', '0 0% 98%'],
  'border': ['0 0% 89.8%', '0 0% 14.9%'],
  'input': ['0 0% 89.8%', '0 0% 14.9%'],
  'card': ['0 0% 100%', '0 0% 3.9%'],
  'card-foreground': ['0 0% 3.9%', '0 0% 98%'],
  'primary': ['0 0% 9%', '0 0% 98%'],
  'primary-foreground': ['0 0% 98%', '0 0% 9%'],
  'secondary': ['0 0% 96.1%', '0 0% 14.9%'],
  'secondary-foreground': ['0 0% 9%', '0 0% 98%'],
  'accent': ['0 0% 96.1%', '0 0% 14.9%'],
  'accent-foreground': ['0 0% 9%', '0 0% 98%'],
  'destructive': ['0 84.2% 60.2%', '0 62.8% 30.6%'],
  'destructive-foreground': ['0 0% 98%', '0 85.7% 97.3%'],
  'ring': ['0 0% 63.9%', '0 0% 14.9%'],
}

export const stone: ColorSet = {
  'background': ['0 0% 100%', '20 14.3% 4.1%'],
  'foreground': ['20 14.3% 4.1%', '60 9.1% 97.8%'],
  'muted': ['60 4.8% 95.9%', '12 6.5% 15.1%'],
  'muted-foreground': ['25 5.3% 44.7%', '24 5.4% 63.9%'],
  'popover': ['0 0% 100%', '20 14.3% 4.1%'],
  'popover-foreground': ['20 14.3% 4.1%', '60 9.1% 97.8%'],
  'border': ['20 5.9% 90%', '12 6.5% 15.1%'],
  'input': ['20 5.9% 90%', '12 6.5% 15.1%'],
  'card': ['0 0% 100%', '20 14.3% 4.1%'],
  'card-foreground': ['20 14.3% 4.1%', '60 9.1% 97.8%'],
  'primary': ['24 9.8% 10%', '60 9.1% 97.8%'],
  'primary-foreground': ['60 9.1% 97.8%', '24 9.8% 10%'],
  'secondary': ['60 4.8% 95.9%', '12 6.5% 15.1%'],
  'secondary-foreground': ['24 9.8% 10%', '60 9.1% 97.8%'],
  'accent': ['60 4.8% 95.9%', '12 6.5% 15.1%'],
  'accent-foreground': ['24 9.8% 10%', '60 9.1% 97.8%'],
  'destructive': ['0 84.2% 60.2%', '0 62.8% 30.6%'],
  'destructive-foreground': ['60 9.1% 97.8%', '0 85.7% 97.3%'],
  'ring': ['24 5.4% 63.9%', '12 6.5% 15.1%'],
}

export const zinc: ColorSet = {
  'background': ['0 0% 100%', '240 10% 3.9%'],
  'foreground': ['240 10% 3.9%', '0 0% 98%'],
  'muted': ['240 4.8% 95.9%', '240 3.7% 15.9%'],
  'muted-foreground': ['240 3.8% 46.1%', '240 5% 64.9%'],
  'popover': ['0 0% 100%', '240 10% 3.9%'],
  'popover-foreground': ['240 10% 3.9%', '0 0% 98%'],
  'border': ['240 5.9% 90%', '240 3.7% 15.9%'],
  'input': ['240 5.9% 90%', '240 3.7% 15.9%'],
  'card': ['0 0% 100%', '240 10% 3.9%'],
  'card-foreground': ['240 10% 3.9%', '0 0% 98%'],
  'primary': ['240 5.9% 10%', '0 0% 98%'],
  'primary-foreground': ['0 0% 98%', '240 5.9% 10%'],
  'secondary': ['240 4.8% 95.9%', '240 3.7% 15.9%'],
  'secondary-foreground': ['240 5.9% 10%', '0 0% 98%'],
  'accent': ['240 4.8% 95.9%', '240 3.7% 15.9%'],
  'accent-foreground': ['240 5.9% 10%', '0 0% 98%'],
  'destructive': ['0 84.2% 60.2%', '0 62.8% 30.6%'],
  'destructive-foreground': ['0 0% 98%', '0 85.7% 97.3%'],
  'ring': ['240 5% 64.9%', '240 3.7% 15.9%'],
}

export function transform(color: Record<string, string>, options: PresetVedixOptions, format: (color: string) => string = color => color): string {
  const token: string[] = []
  for (const [key, value] of Object.entries(color))
    token.push(`--${key}: ${format(value)}`)

  return token.join(';\n')
}

export function generateColor(options: PresetVedixOptions, format?: (color: string) => string) {
  const { darkSelector } = options
  const { color: ColorSet, name: themeName } = options.theme

  const light: string[] = []
  const dark: string[] = []
  const formatColor = (color: string) => format ? format(color) : color
  for (const [name, color] of Object.entries(ColorSet)) {
    const [lightColor, darkColor] = Array.isArray(color) ? color : [color, color]

    light.push(`--${name}: ${formatColor(lightColor)};`)
    dark.push(`--${name}: ${formatColor(darkColor ?? lightColor)};`)
  }

  const themeClass = `${themeName}-theme`
  return `.${themeClass}{${light.join(' ')}}\n .${themeClass}${darkSelector}{${dark.join(' ')}}`
}
