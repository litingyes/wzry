<script setup lang="ts">
useHead({
  title: '王者荣耀图鉴',
})
</script>

<template>
  <div class="flex size-full items-center justify-center">
    <div class="flex flex-col gap-4">
      <div class="bg-gradient-to-r text-6xl text-transparent font-bold from-pink-500 to-violet-500 bg-clip-text">
        王者荣耀图鉴
      </div>
      <div class="flex gap-2 items-center justify-end">
        <UiTooltip content="QQ群">
          <button
            class="text-xl rounded-lg flex size-8 transition-colors items-center justify-center hover:bg-gray-200"
            @click="navigateTo('https://qm.qq.com/q/z9EXXPu1eU', {
              open: {
                target: '_blank',
              },
            })"
          >
            <NuxtIcon name="mingcute:qq-line" />
          </button>
        </UiTooltip>
        <UiTooltip content="Github 仓库地址">
          <button
            class="text-xl rounded-lg flex size-8 transition-colors items-center justify-center hover:bg-gray-200"
            @click="navigateTo('https://github.com/litingyes/wzry', {
              open: {
                target: '_blank',
              },
            })"
          >
            <NuxtIcon name="mingcute:github-line" />
          </button>
        </UiTooltip>
      </div>
    </div>
  </div>
</template>
