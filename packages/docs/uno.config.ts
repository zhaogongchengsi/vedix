import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup
} from 'unocss'
import  presetVedix ,{ slate } from 'vedix-unocss-preset'

export default defineConfig({
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
        presetVedix({ theme: slate })
    ],
    transformers: [transformerDirectives(), transformerVariantGroup()]
})