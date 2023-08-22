export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    '@nuxt/devtools',
    '@unocss/nuxt',
  ],
  devtools: {
    enabled: true,
  },
  devServer:{
    port: 4567,
  },
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },
})