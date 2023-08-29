export default defineNuxtConfig({
  extends: '@nuxt-themes/docus',
  modules: [
    '@nuxt/devtools',
    '@unocss/nuxt',
  ],
  components: [
    { path: '~/components/ui', global: true, prefix: 'vedix' }
  ],
  devtools: {
    enabled: true,
  },
  app: {
    head: {
      script: [
        { src: '/theme.js' }
      ],
    }
  },
  devServer: {
    port: 4567,
  },
  experimental: {
    payloadExtraction: false,
    inlineSSRStyles: false,
    renderJsonPayloads: true,
  },
})