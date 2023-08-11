import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig(() => ({
  plugins: [vue(), UnoCSS(), vueJsx()],
}))
