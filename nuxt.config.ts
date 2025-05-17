import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@vueuse/nuxt',
    'motion-v/nuxt',
    'nuxt-lodash',
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  fonts: {
    families: [
      {
        name: 'Noto Sans SC',
        provider: 'google',
      },
    ],
  },
  icon: {
    componentName: 'NuxtIcon',
    serverBundle: {
      collections: ['mingcute'],
    },
  },
  lodash: {
    prefix: '_',
  },
})
