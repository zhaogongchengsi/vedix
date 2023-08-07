
import { defineCommand } from "citty";
import consola from "consola";
import { existsSync } from 'fs'
import { join } from 'path'
import { createOptions } from "../prompts";
import { CONFIG_NAME, writeConfig } from "../config";
import { generateColor } from '../../../builder/src'
import {outputFile} from "fs-extra";

export default defineCommand({
  meta: { name: "init", description: "Initialization" },
  async run() {
    const {
      typescript,
      globalCssFile,
      unocss,
      components,
      utils,
      server,
      style
    } = await createOptions()
    const root = process.cwd()

    // const unocssFile = join(root, unocss)
    const gcf = join(root, globalCssFile)
    const componentsDir = join(root, components)
    const utilsDir = join(root, utils);

    [gcf, componentsDir, utilsDir].forEach(path => {
      if (existsSync(path)) {
        consola.error(`${path} path already exists, reselect`)
        process.exit(1)
      }
    });

    const colors = generateColor(style, (color) => color.split(" ").join(", "))

    await writeConfig(join(root, CONFIG_NAME), {
      unocss: {
        config: unocss,
        css: globalCssFile,
      },
      vsc: server,
      components: components,
      type: typescript ? 'ts' : 'js'
    })

    await outputFile(gcf, colors)

  },
});
