import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetUno,
  presetWebFonts,
} from 'unocss'
import { presetVedix, slate } from 'vedix-unocss-preset'

export default defineConfig({
  shortcuts: [],
  content: {
    pipeline: {
      include: [
        // 默认配置
        /\.(vue|mdx)($|\?)/,
        // 包括 js/ts 文件
        'src/**/*stories.{js,ts}',
      ],
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    presetVedix({ theme: slate }),
  ],
})
