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
