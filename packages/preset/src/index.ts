import {generateTheme} from "./theme";
import {genCss} from "./css";

export interface PresetVedixOptions {
    /**
     * The prefix of the generated css variables
     * @default --un-preset-radix
     */
    // prefix?: string;

    /**
     * The prefix of the generated css variables
     * @default slate
     */
    theme: "slate" | "neutral" | "stone" | "zinc"

    /**
     * Customize the selector used to apply the dark versions of the color palette
     * @default ".dark"
     */
    darkSelector?: string;

    /**
     * Customize the selector used to apply the light versions of the color palette
     * @default ":root"
     */
    lightSelector?: string;
    /**
     * Extend instead of override the default theme
     * @default true
     */
    extend?: boolean;
}

export default function presetVedix(options: PresetVedixOptions = {theme: "slate", extend: true, darkSelector: '.dark', lightSelector: ":root"}) {

    const extend = options.extend || true;

    const {colors, fontFamily, animation, keyframes} = generateTheme()

    return {
        name: "unocss-preset-vedix",
        extendTheme(theme: Record<string, Object>) {
            theme.colors = {
                ...colors,
                ...(extend ? theme.colors : []),
            };
            theme['fontFamily'] = fontFamily
            theme['animation'] = animation
            theme['keyframes'] = keyframes
        },
        preflights: [
            {
                getCSS: () => genCss(options),
            },
        ],
    }
}
