import { existsSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import { defineCommand } from 'citty'
import consola from 'consola'
import prompts from 'prompts'
import { CONFIG_NAME, writeConfig } from '../config'

export default defineCommand({
  meta: { name: 'init', description: 'Initialization' },
  async run() {
    const {
      components,
    } = await prompts([
      {
        type: 'text',
        name: 'components',
        message: 'Component storage path',
        initial: 'src/components/ui',
      },
    ])
    const root = process.cwd()

    // const unocssFile = join(root, unocss)
    const componentsDir = join(root, components)

    if (existsSync(componentsDir)) {
      consola.error(`${componentsDir} path already exists, reselect`)
      process.exit(1)
    }

    await writeConfig(join(root, CONFIG_NAME), {
      components,
    })
  },
})
