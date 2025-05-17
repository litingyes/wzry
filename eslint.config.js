import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  antfu({
    formatters: true,
    vue: true,
    rules: {
      'no-undef': 0,
    },
    ignores: ['./pnpm-lock.yaml'],
  }),
)
