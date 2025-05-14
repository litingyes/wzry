<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt'
import { SpeedInsights } from '@vercel/speed-insights/nuxt'
import '@unocss/reset/tailwind.css'
import '@unocss/reset/tailwind-compat.css'
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <main class="size-screen overflow-auto">
      <NuxtPage />
    </main>
    <Analytics />
    <SpeedInsights />
  </div>
</template>

<style lang="scss">
::-webkit-scrollbar {
  @apply size-10;
  width: 40px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;

  &:hover {
    background: #555;
  }
}

/* Firefox 滚动条样式 */
* {
  scrollbar-width: thin;
  scrollbar-color: #888 #f1f1f1;
}
</style>
