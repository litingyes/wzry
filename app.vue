<script lang="ts" setup>
import { Analytics } from '@vercel/analytics/nuxt'
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
    <Analytics />
  </div>
</template>
