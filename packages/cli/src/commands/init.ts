import { existsSync } from 'node:fs'
import { join } from 'node:path'
import process from 'node:process'
import { defineCommand } from 'citty'
import consola from 'consola'
import { createOptions } from '../prompts'
import { CONFIG_NAME, writeConfig } from '../config'

export default defineCommand({
  meta: { name: 'init', description: 'Initialization' },
  async run() {
    const {
      typescript,
      unocss,
      components,
      utils,
      server,
    } = await createOptions()
    const root = process.cwd()

    // const unocssFile = join(root, unocss)
    const componentsDir = join(root, components)
    const utilsDir = join(root, utils);

    [componentsDir, utilsDir].forEach((path) => {
      if (existsSync(path)) {
        consola.error(`${path} path already exists, reselect`)
        process.exit(1)
      }
    })

    await writeConfig(join(root, CONFIG_NAME), {
      unocss: {
        config: unocss,
      },
      vsc: server,
      components,
      type: typescript ? 'ts' : 'js',
    })
  },
})
