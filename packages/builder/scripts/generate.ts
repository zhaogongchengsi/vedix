import {resolve, parse, join} from "path";
import {globby} from 'globby';
import {readFile} from 'fs/promises'
import {outputFile} from 'fs-extra';

(async () => {

    const cwd = process.cwd()
    const componentsDir = resolve(cwd, "../components/src")

    const [dir] = process.argv.slice(2);

    const componentFiles = await globby(["*.vue"], {
        cwd: componentsDir,
        absolute: true,
        onlyFiles: true
    })

    const components: Components[] = []
    for (const componentFile of componentFiles) {
        const file = await readFile(componentFile)
        components.push({
            name: parse(componentFile).base,
            content: file.toString()
        })
    }

    await outputFile(resolve(cwd, join(dir || 'dist', 'components.json')), JSON.stringify(components, null, 2), {
        encoding: "utf-8",
    })

})()