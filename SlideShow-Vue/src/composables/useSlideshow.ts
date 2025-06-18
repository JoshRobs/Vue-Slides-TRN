import { ref, computed, onMounted, onUnmounted, watch } from 'vue'

export function useSlideshow(
  images: string[],
  autoplay = false,
  interval = 3000,
  emit: (event: 'change', index: number) => void
) {
  const currentIndex = ref(0)
  const timer = ref<number | null>(null)

  const currentImage = computed(() => images[currentIndex.value])

  function next() {
    currentIndex.value = (currentIndex.value + 1) % images.length
    emit('change', currentIndex.value)
  }

  function prev() {
    currentIndex.value = (currentIndex.value - 1 + images.length) % images.length
    emit('change', currentIndex.value)
  }

  function goTo(index: number) {
    currentIndex.value = index
    emit('change', index)
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

  onMounted(play)
  onUnmounted(pause)
  watch(() => autoplay, (val) => (val ? play() : pause()))

  return {
    currentIndex,
    currentImage,
    next,
    prev,
    goTo,
    play,
    pause
  }
}