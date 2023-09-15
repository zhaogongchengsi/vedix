import { parse } from 'node:path'
import { readFile } from 'node:fs/promises'
import process from 'node:process'
import { globby } from 'globby'
import { consola } from 'consola'
import { join } from 'pathe'
import { outputFile } from 'fs-extra'

interface Meta {
  name: string
  file: string | Record<string, string>
  private?: boolean
  dependence?: string[]
  dir: string
}

const cwd = process.cwd()
const [dir] = process.argv.slice(2);

(async () => {
  consola.start('build start ...')

  const metas = await readMeta()

  const code: string[] = []

  const outputDep = (dependence?: string | string[]) => {
    if (!dependence)
      return '[]'
    return typeof dependence === 'string' ? dependence : dependence.map(item => `'${item}'`).join(',')
  }

  for (const { name, dependence, dir, file, private: pr } of metas) {
    if (pr !== undefined && pr)
      continue

    if (typeof file === 'string') {
      const content = await readFile(join(dir, file))
      code.push(`  ['${name}', { content: ${JSON.stringify(content.toString())}, dependence: [${outputDep(dependence)}]}]`)
    }
    else {
      const components: string[] = []
      for (const [cname, path] of Object.entries(file)) {
        const content = await readFile(join(dir, path))
        components.push(`'${cname}': ${JSON.stringify(content.toString())}`)
      }
      code.push(`  ['${name}', { content: {${components.join(',')}}, dependence: [${outputDep(dependence)}]}]`)
    }
  }

  await outputFile(join(cwd, dir, 'index.cjs'), `module.exports = new Map([\n${code.join(',\n')}\n])`)
  await outputFile(join(cwd, dir, 'index.mjs'), `export default new Map([\n${code.join(',\n')}\n])`)

  consola.success('build success')
})()

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
