import type { Preview } from "@storybook/vue3";
import 'virtual:uno.css'
import './globals.css'
// import 'uno.css'
import '@unocss/reset/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
