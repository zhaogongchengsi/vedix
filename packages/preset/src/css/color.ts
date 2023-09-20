import { kebabCase } from 'scule'
import { blackA } from '../colors/blackA'
import { whiteA } from '../colors/whiteA'
import * as light from '../colors/light'
import * as dark from '../colors/blackA'

export function generateLightToken() {
  const lightToken = Object.values(light).map((color) => {
    return format(color)
  })

  return [
    format(blackA),
    format(whiteA),
    lightToken.flat(),
  ].flat().join(';\n')
}

export function generateDarkToken() {
  return Object.values(dark).map((color) => {
    return format(color)
  }).flat().join(';\n')
}

function format(color: Record<string, string>) {
  return Object.entries(color).map(([name, color]) => {
    return `--${kebabCase(name)}:${color}`
  })
}
