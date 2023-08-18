import { parse, join, relative } from "path";
import { globby } from 'globby';
import { readFile } from 'fs/promises'
import { outputFile } from 'fs-extra';

interface Meta {
	name: string
	file: string
	private?: boolean
	dependence?: string[]
	dir: string
}

const cwd = process.cwd();
const [dir] = process.argv.slice(2);

(async () => {

	const metas = await readMeta()

	const list = await readComponentFile(metas)

	const exports: {name: string, dependence?: string[]}[] = []
	const indexC = []
	const indexM = []

	const distIndexMjs = join(cwd, dir, 'index.mjs')
	const distIndexCjs = join(cwd, dir, 'index.cjs')


	for (const { meta, content } of list) {

		if (!meta.name || /[-,^\d]/gm.test(meta.name)) {
			console.error(`error: ${meta.name} contains illegal string`);
			continue
		}

		const { cjs, mjs } = createFileInfo(meta)

		exports.push({ name: meta.name, dependence: meta.dependence })

		indexM.push(`import ${meta.name} from "${relative(distIndexMjs, mjs).substring(3)}";`)
		indexC.push(`const ${meta.name} = require("${relative(distIndexCjs, cjs).substring(3)}");`)
		await outputFile(mjs, createMjsCode(content))
		await outputFile(cjs, createCjsCode(content))

	}

	const code = exports.map(({name, dependence}) => {
		return `  [${name} ,{ code: ${name} ${dependence ? `, dependence: [${dependence.map(dep => `'${dep}'`).join(',')}]` : ''}}]`
	}).join(',\n')

	await outputFile(distIndexMjs, indexM.join('\n') + '\n\n\n' + `export default new Map([\n${code}\n])`)
	await outputFile(distIndexCjs, indexC.join('\n') + '\n\n\n' + `module.exports = new Map([\n${code}\n])`)

})()

function createMjsCode(code: string) {
	return `export default \`${code}\``
}

function createCjsCode(code: string) {
	return `module.exports = \`${code}\``
}

function createFileInfo(meta: Meta) {
	const path = join(cwd, dir)

	const name = parse(meta.file).name

	return {
		cjs: join(path, 'lib', `${name}.cjs`),
		mjs: join(path, 'es', `${name}.mjs`)
	}
}


async function readComponentFile(metas: Meta[]) {
	const components: { meta: Meta, content: string, filename: string }[] = []

	for (const meta of metas) {
		const { file, dir } = meta
		const component = join(dir, file)
		const content = (await readFile(component)).toString()

		components.push({
			meta,
			content,
			filename: parse(component).name
		})

	}

	return components
}

async function readMeta() {
	const componentMeta = await globby(["./**/meta.json"], {
		cwd: cwd,
		absolute: true,
		onlyFiles: true
	})

	const metaList: Meta[] = []
	for (const path of componentMeta) {
		const meta = (await readJson(path)) as Meta

		if (meta.private === undefined || meta.private === false) {

			const { dir } = parse(path)

			metaList.push({
				...meta,
				dir
			})
		}
	}

	return metaList
}

async function readJson(path: string) {
	const buf = await readFile(path)
	return JSON.parse(buf.toString())
}