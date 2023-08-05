
import { defineCommand } from "citty";
import consola from "consola";
import { colors } from "consola/utils";
import { componentsMap } from "../components/map";
import { join } from 'path'
import { CONFIG_NAME, readConfig } from "../config";
import { outputFile } from 'fs-extra';

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
		if (!componentsMap.has(name)) {
			consola.error(
				`${colors.green(name)} component does not exist or has not been implemented yet`
			)
		}

		const root = process.cwd()
		const config = await readConfig(join(root, CONFIG_NAME))

		const componentPath = join(config.components, `${name}.vue`)
		const buildComponent = componentsMap.get(name)!

		await outputFile(componentPath, await buildComponent(config))

	},
});
