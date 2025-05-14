import { mergeConfigs } from '@unocss/core'
import { transformerDirectives } from 'unocss'
import config from './.nuxt/uno.config.mjs'

export default mergeConfigs([config, {
  transformers: [transformerDirectives()],
}])
