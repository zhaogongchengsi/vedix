import { join } from 'node:path'
import { existsSync } from 'node:fs'
import process from 'node:process'
import { defineCommand } from 'citty'
import consola from 'consola'
import { colors } from 'consola/utils'
import { outputFile } from 'fs-extra'
import prompts from 'prompts'
import components from 'vedix-components'
import { CONFIG_NAME, readConfig } from '../config'

export default defineCommand({
  meta: {
    name: 'add', description: 'Add components to your project',
  },
  async run() {
    const { name } = await prompts({
      type: 'select',
      name: 'name',
      message: colors.cyanBright(' Which components would you like to add? › Space to select. Return to submit.'),
      choices: Array.from(components.keys()).map(name => ({
        title: name,
        value: name,
      })),
    })

    if (!components.has(name))
      consola.error(`${colors.green(name)} component does not exist or has not been implemented yet`)

    const root = process.cwd()
    const config = await readConfig(join(root, CONFIG_NAME))

    const { code, file, dependence } = components.get(name)!

    const componentPath = join(root, config.components, file)

    if (existsSync(componentPath)) {
      const { isOverlay } = await prompts({
        type: 'toggle',
        message: colors.yellowBright(`Whether the ${name} component already exists or not overrides`),
        name: 'isOverlay',
        initial: true,
        active: colors.red('yes'),
        inactive: colors.cyan('no'),
      })

      if (!isOverlay)
        process.exit(1)
    }

    await outputFile(componentPath, code)

    if (!dependence || dependence.length < 1)
      return

    const { install } = await prompts({
      type: 'toggle',
      message: colors.yellowBright(`Whether to download or not depends on [ ${colors.greenBright(dependence.join(','))} ]`),
      name: 'install',
      initial: true,
      active: colors.red('yes'),
      inactive: colors.cyan('no'),
    })
    if (!install)
      return
  },
})
