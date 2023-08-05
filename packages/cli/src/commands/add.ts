







import { defineCommand } from "citty";
import consola from "consola";

export default defineCommand({
	meta: {
		name: "add", description: "Add components to your project",
	},
	args: {
		name: {
			type: "string",
			description: "Component name",
			alias: "n"
		}
	},
	async run() {

		consola.info("Initializing project...");
	},
});
