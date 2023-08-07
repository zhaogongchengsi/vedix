// @ts-ignore
import prompts from "prompts";
import { colors } from "consola/utils";

export async function createOptions() {
	return await prompts([
		{
			type: 'toggle',
			name: 'typescript',
			message: 'Would you like to use TypeScript (recommended)?',
			initial: true,
			active: 'yes',
			inactive: 'no'
		},
		{
			type: "select",
			name: "style",
			message: `Which ${colors.greenBright('style')} would you like to use?`,
			choices: ['slate','neutral','stone','zinc'].map((style) => ({
				title: style,
				value: style,
			})),
		},
		{
			type: 'text',
			name: 'globalCssFile',
			message: "Where is your global CSS file? › › src/style/globals.css",
			initial: "src/style/globals.css",
		},
		{
			type: 'text',
			name: 'unocss',
			message: "Where is your uno.config.ts located",
			initial: "uno.config.ts",
		},
		{
			type: 'text',
			name: 'components',
			message: "Component storage path",
			initial: "src/components/ui",
		},
		{
			type: 'text',
			name: 'utils',
			message: "Utils storage path",
			initial: "src/utils",
		},
		{
			type: 'toggle',
			name: 'server',
			message: "Are you using Vue Server Components",
			initial: false,
			active: 'yes',
			inactive: 'no'
		}
	]);
}
