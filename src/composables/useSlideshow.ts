import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

export function useSlideshow(images: string[], autoplay = false, interval = 6000) {
  const currentIndex = ref(0)
  const timer = ref<number | null>(null)

  const currentImage = computed(() => images[currentIndex.value])

  function next() {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }

  function prev() {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
  }

  function play() {
    if (autoplay) {
      timer.value = window.setInterval(next, interval)
    }
  }

  function pause() {
    if (timer.value !== null) {
      clearInterval(timer.value)
      timer.value = null
    }
  }

  // TODO: Add circles to navigate directly to indexed images
  function goTo(index: number) {
    currentIndex.value = index
  }

  onMounted(play)
  onUnmounted(pause)

  // Watcher in case I want to add a UI toggle for autoplay
  watch(
    () => autoplay,
    (val) => (val ? play() : pause()),
  )

  return {
    currentIndex,
    currentImage,
    next,
    prev,
    goTo,
    play,
    pause,
  }
}
