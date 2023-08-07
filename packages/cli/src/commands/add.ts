
import { defineCommand } from "citty";
import consola from "consola";
import { colors } from "consola/utils";
import { join } from 'path'
import { CONFIG_NAME, readConfig } from "../config";
import { outputFile } from 'fs-extra';
import { components, createComponent } from '../../../builder/src'
import {existsSync} from "fs";
// @ts-ignore
import prompts from "prompts";

export default defineCommand({
	meta: {
		name: "add", description: "Add components to your project",
	},
	args: {
		name: {
			type: "string",
			description: "Component name",
			alias: "n",
			required: true,
		}
	},
	async run({ args }) {
		const { name } = args
		if (!components.has(name)) {
			consola.error(
				`${colors.green(name)} component does not exist or has not been implemented yet`
			)
		}

		const root = process.cwd()
		const config = await readConfig(join(root, CONFIG_NAME))

		const componentPath = join(root ,config.components, `${name}.vue`)

		if (existsSync(componentPath)) {
			const { isOverlay  } =  await prompts({
				type: "toggle",
				message: colors.yellowBright(`Whether the ${name} component already exists or not overrides`),
				name: 'isOverlay',
				initial: true,
				active: colors.red('yes'),
				inactive: colors.cyan('no')
			})

			if (!isOverlay) {
				process.exit(1)
			}
		}

		const buildComponent = components.get(name)!

		await outputFile(componentPath, createComponent(buildComponent))
	},
});
