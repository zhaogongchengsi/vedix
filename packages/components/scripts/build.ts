import { join, parse, relative } from 'node:path'
import { readFile } from 'node:fs/promises'
import process from 'node:process'
import { globby } from 'globby'
import { outputFile } from 'fs-extra'
import { normalize } from 'pathe'
import { consola } from 'consola'
import { pascalCase } from 'scule'

interface Meta {
  name: string
  file: string | Record<string, string>
  private?: boolean
  dependence?: string[]
  dir: string
}

interface ComponentsMeta {
  name: string
  file: string
  private?: boolean
  dependence?: string[]
  dir: string
}

const cwd = process.cwd()
const [dir] = process.argv.slice(2);

(async () => {
  consola.start('build start ...')

  const metas = await readMeta()

  const list = await readComponentFile(metas)

  const exportList: { name: string; dependence?: string[]; file: string }[] = []
  const indexC = []
  const indexM = []

  const distIndexMjs = join(cwd, dir, 'index.mjs')
  const distIndexCjs = join(cwd, dir, 'index.cjs')

  for (const { meta, content } of list) {
    if (!meta.name || /^\d/gm.test(meta.name)) {
      consola.error(`error: ${meta.name} contains illegal string`)
      continue
    }

    const { cjs, mjs } = createFileInfo(meta)

    exportList.push({ name: meta.name, dependence: meta.dependence, file: parse(meta.file).base })

    indexM.push(`import ${pascalCase(meta.name)} from "./${normalize(relative(distIndexMjs, mjs)).substring(3)}";`)
    indexC.push(`const ${pascalCase(meta.name)} = require("./${normalize(relative(distIndexCjs, cjs)).substring(3)}");`)
    await outputFile(mjs, createMjsCode(content))
    await outputFile(cjs, createCjsCode(content))
  }

  const code = exportList.map(({ name, dependence, file }) => {
    return `  ['${name}' ,{ file: '${file}', code: ${pascalCase(name)} ${dependence ? `, dependence: [${dependence.map(dep => `'${dep}'`).join(',')}]` : ''}}]`
  }).join(',\n')

  await outputFile(distIndexMjs, `${indexM.join('\n')}\n\n\n` + `export default new Map([\n${code}\n])`)
  await outputFile(distIndexCjs, `${indexC.join('\n')}\n\n\n` + `module.exports = new Map([\n${code}\n])`)

  consola.success('build success')
})()

function createMjsCode(code: string) {
  return `export default \`${code}\``
}

function createCjsCode(code: string) {
  return `module.exports = \`${code}\``
}

function createFileInfo(meta: ComponentsMeta) {
  const path = join(cwd, dir)

  const name = parse(meta.file).name

  return {
    cjs: join(path, 'lib', `${name}.cjs`),
    mjs: join(path, 'es', `${name}.mjs`),
  }
}

async function readComponentFile(metas: Meta[]) {
  const components: { meta: ComponentsMeta; content: string; filename: string }[] = []

  for (const meta of metas) {
    const { file, dir } = meta
    if (typeof file === 'string') {
      const component = join(dir, file)
      const content = (await readFile(component)).toString()
      components.push({
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        meta,
        content,
        filename: parse(component).name,
      })
    }
    else {
      for (const [name, path] of Object.entries(file)) {
        const component = join(dir, path)
        const content = (await readFile(component)).toString()
        const _meta = {
          ...meta,
          file: path,
          name,
        }
        components.push({
          meta: _meta,
          content,
          filename: name,
        })
      }
    }
  }

  return components
}

async function readMeta() {
  const componentMeta = await globby(['./**/meta.json'], {
    cwd,
    absolute: true,
    onlyFiles: true,
  })

  const metaList: Meta[] = []
  for (const path of componentMeta) {
    const meta = (await readJson(path)) as Meta

    if (meta.private === undefined || !meta.private) {
      const { dir } = parse(path)

      metaList.push({
        ...meta,
        dir,
      })
    }
  }

  return metaList
}

async function readJson(path: string) {
  const buf = await readFile(path)
  return JSON.parse(buf.toString())
}
