import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import externalPlugin from './plugins/external';

export default defineConfig(() => {

  return {
    build: {
      target: 'modules',
      outDir: 'dist',
      emptyOutDir: false,
      minify: false,
      rollupOptions: {
        input: ['./src/index.ts'],
        output: [
          {
            format: 'es',
            dir: 'dist/es',
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: './src',
          },
          {
            format: 'commonjs',
            dir: 'dist/lib',
            entryFileNames: '[name].js',
            preserveModules: true,
            preserveModulesRoot: './src',
          },
        ],
      },
      lib: {
        entry: 'src/index.ts',
        formats: ['es', 'cjs'],
      },
    },
    plugins: [vue(), UnoCSS(), vueJsx(), externalPlugin()],
  }
})

