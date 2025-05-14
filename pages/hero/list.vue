<script setup lang="ts">
import heroes from '~/data/heroes.json'
import heroTypes from '~/data/heroTypes.json'

function getHeroType(heroTypeId: number) {
  return heroTypes.find(item => item.id === heroTypeId)?.type
}
</script>

<template>
  <div class="p-6">
    <div class="flex justify-around flex-wrap gap-4">
      <div v-for="hero in heroes" :key="hero.id_name" class="flex w-[160px] h-[52px] items-center gap-2 bg-gray-100 px-3 py-2 rounded-2xl cursor-pointer transition-colors hover:bg-gray-200 active:bg-blue-100">
        <div>
          <NuxtImg class="size-8 rounded-lg" :src="getHeroLink(hero.ename)" />
        </div>
        <div>
          <div class="text-sm">
            {{ hero.cname }}
          </div>
          <div class="text-xs text-neutral">
            {{ getHeroType(hero.hero_type) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
