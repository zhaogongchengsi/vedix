
import { defineCommand } from "citty";
import consola from "consola";
import { colors } from "consola/utils";
import { components } from "../components";

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
		if (!components.includes(name)) {
			consola.error(
				`${colors.green(name)} component does not exist or has not been implemented yet`
			)
		}


		console.log(name)

	},
});
