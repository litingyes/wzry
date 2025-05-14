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
  --at-apply: size-1;
}

::-webkit-scrollbar-track {
  --at-apply: bg-gray-200 rounded-lg;
}

::-webkit-scrollbar-thumb {
  --at-apply: 'bg-gray-300 rounded-lg transition-colors hover:bg-gray-400';
}
</style>
