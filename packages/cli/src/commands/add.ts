import { join } from 'node:path'
import { existsSync } from 'node:fs'
import process from 'node:process'
import { defineCommand } from 'citty'
import consola from 'consola'
import { colors } from 'consola/utils'
import { outputFile } from 'fs-extra'
import prompts from 'prompts'
import components from 'vedix-components'
import { addDependency } from 'nypm'
import { CONFIG_NAME, readConfig } from '../config'

export default defineCommand({
  meta: {
    name: 'add', description: 'Add 2.components to your project',
  },
  async run() {
    const { name } = await prompts({
      type: 'select',
      name: 'name',
      message: colors.cyanBright(' Which 2.components would you like to add? › Space to select. Return to submit.'),
      choices: Array.from(components.keys()).map(name => ({
        title: name,
        value: name,
      })),
    })

    if (!components.has(name))
      consola.error(`${colors.green(name)} component does not exist or has not been implemented yet`)

    const root = process.cwd()

    // TODO: 配置文件不存在会报错
    const config = await readConfig(join(root, CONFIG_NAME))

    const { content, dependence } = components.get(name)!

    const componentExistsSync = async (path: string) => {
      if (existsSync(path)) {
        const { isOverlay } = await prompts({
          type: 'toggle',
          message: colors.yellowBright(`Whether the ${name} component already exists or not overrides`),
          name: 'isOverlay',
          initial: false,
          active: colors.red('yes'),
          inactive: colors.cyan('no'),
        })

        if (!isOverlay)
          process.exit(1)
      }
    }

    if (typeof content === 'string') {
      const componentPath = join(root, config.components, `${name}.vue`)
      await componentExistsSync(componentPath)
      await outputFile(componentPath, content)
    }
    else if (typeof content === 'object') {
      for (const [cname, _content] of Object.entries(content)) {
        const componentPath = join(root, config.components, name, `${cname}.vue`)
        await componentExistsSync(componentPath)
        await outputFile(componentPath, _content)
      }
    }

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

    await addDependency(dependence.join(' '), {
      cwd: root,
      silent: true,
      workspace: 'playground/vite',
    })
  },
})
