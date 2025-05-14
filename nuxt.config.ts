// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    'motion-v/nuxt',
  ],
  icon: {
    componentName: 'NuxtIcon',
    serverBundle: {
      collections: ['mingcute'],
    },
  },
  eslint: {
    config: {
      standalone: false,
    },
  },
  unocss: {
    nuxtLayers: true,
  },
})
