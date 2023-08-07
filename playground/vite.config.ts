import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [vue(), UnoCSS()],
  server: {
    port: 3456,
  },
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, 'src')}/`,
    }
  }
})
