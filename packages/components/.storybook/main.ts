import { mergeConfig } from "vite";
import UnoCSS from "unocss/vite";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { presetUno } from 'unocss'
import { slate, presetVedix } from 'vedix-unocss-preset'

const config = {
    stories: [
        "../src/**/*.mdx",
        "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
        "!../**/node_modules/**/*",
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
                UnoCSS(),
                vueJsx()
            ]
        })
    }
};
export default config;
