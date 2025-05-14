<script setup lang="ts">
useHead({
  title: '王者荣耀图鉴',
})
</script>

<template>
  <div class="size-full flex items-center justify-center">
    <div class="flex flex-col gap-4">
      <div class="font-bold text-6xl bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
        王者荣耀图鉴
      </div>
      <div class="flex items-center justify-end gap-2">
        <UiTooltip content="QQ群">
          <button
            class="flex items-center justify-center rounded-lg size-8 transition-colors hover:bg-gray-200 text-xl"
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
            class="size-8 rounded-lg transition-colors hover:bg-gray-200 text-xl flex items-center justify-center"
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
