import { writeFile, readFile } from 'node:fs/promises';

export interface Unocss {
	config: string,
	css: string,
	// baseColor: string,
	// cssVariables: boolean
}

export interface Aliases {
	// utils: string,
	components: string
}

export interface Config {
	type: "js" | "ts"
	unocss: Unocss,
	vsc: boolean,
	// utils: string,
	components: string
}

export const CONFIG_NAME = 'vedix.config.json'

export async function writeConfig(path: string, config: Config) {

	return await writeFile(path, `
	{ \n "unocss": { "config": "${config.unocss.config}", "css": "${config.unocss.css}" },\n "vsc": ${config.vsc}, \n "components": "${config.components}" , \n "type": "${config.type}"\n}
	`.trim())
}


export async function readConfig (path: string) :Promise<Config> {
	const buf = await readFile(path)
	return  JSON.parse(buf.toString());
}