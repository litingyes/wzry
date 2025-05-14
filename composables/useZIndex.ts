const zIndex = ref(100)

export function useZIndex() {
  return zIndex.value++
}
