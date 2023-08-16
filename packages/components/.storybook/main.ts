import {mergeConfig} from "vite";
import UnoCSS from "unocss/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { presetUno } from 'unocss'
// @ts-ignore
import vedixPreset from 'vedix-unocss-preset'

const config = {
    stories: [
        "../stories/**/*.mdx",
        "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    ],
    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],
    framework: {
        name: "@storybook/vue3-vite",
        options: {},
    },
    docs: {
        autodocs: "tag",
    },
    viteFinal: async (config: Record<string, any>) => {

        return mergeConfig(config, {
            plugins: [
                UnoCSS({
                    presets: [
                        presetUno(),
                        // @ts-ignore
                        vedixPreset()
                    ]
                }),
                vueJsx()
            ]
        })
    }
};
export default config;
