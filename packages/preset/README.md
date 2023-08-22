# Vedix Unocss Preset

[![NPM version](https://img.shields.io/npm/v/vedix-unocss-preset?color=a1b858&label=)](https://www.npmjs.com/package/vedix-unocss-preset)

## Installation

```shell
pnpm add -D vedix-unocss-preset
yarn add -D vedix-unocss-preset
npm install -D vedix-unocss-preset
```

Use with unocss

```ts
// uno.config.ts
import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import vedixPreset from 'vedix-unocss-preset'

export default defineConfig({
  presets: [presetUno(), vedixPreset()]
})
```

## Theme

```ts
// uno.config.ts
import { neutral, slate, stone, zinc } from 'vedix-unocss-preset'

export default defineConfig({
    presets: [presetUno(), vedixPreset({ theme: slate })]
})
```

```html
<html>
<head>...</head>
<body class="slate-theme" >...</body>
<!--dark-->
<!--<body class="slate-theme .dark" >...</body>-->
</html>
```

## License

[MIT](./LICENSE) License © 2023 [zhaogongchengsi](https://github.com/zhaogongchengsi)

