import { defineBuildConfig } from 'unbuild'
import { resolve } from 'path'

export default defineBuildConfig({
  entries: [
    'src/index'
  ],
  alias: {
    "vedix-builder": resolve(__dirname, '../builder/src')
  },
  declaration: true,
  clean: true,
  rollup: {
    emitCJS: true,
  },
})
