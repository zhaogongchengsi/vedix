export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    '@nuxt/devtools',
  ],
  devtools: {
    enabled: true,
  },
  devServer:{
    port: 4567,
  }
})