<script lang="ts" setup>
import type { Placement } from '@floating-ui/vue'
import { autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/vue'

defineOptions({
  name: 'UiTooltip',
})

const props = withDefaults(defineProps<{
  content: string
  placement?: Placement
}>(), {
  placement: 'top',
})

const visible = ref(false)

const reference = useTemplateRef('reference')
const floating = useTemplateRef('floating')

const { floatingStyles } = useFloating(reference, floating, {
  placement: props.placement,
  middleware: [offset(8), shift(), flip()],
  whileElementsMounted: autoUpdate,
})
const zIndex = useZIndex()

onClickOutside(reference, () => {
  visible.value = false
})
</script>

<template>
  <div ref="reference" @pointerenter="visible = true" @pointerleave="visible = false">
    <slot />
  </div>
  <div v-if="visible" ref="floating" class="border border-solid border-gray-100 bg-white px-1 py-0.5 rounded-lg text-sm text-neutral-800" :style="{ ...floatingStyles, zIndex }">
    <span>{{ content }}</span>
  </div>
</template>
