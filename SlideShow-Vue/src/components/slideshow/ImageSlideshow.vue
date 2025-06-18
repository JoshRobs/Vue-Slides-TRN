<template>
  <div
    class="relative w-[700px] h-auto overflow-hidden group"
    @mouseenter="pause"
    @mouseleave="play"
  >
    <transition name="fade" mode="out-in">
      <SlideshowImage :src="currentImage" :alt="`Image Slide ${currentIndex}`" />
    </transition>
    <SlideshowControls @prev="prev" @next="next" />
  </div>
</template>

<script setup>
import SlideshowImage from './SlideshowImage.vue'
import SlideshowControls from './SlideshowControls.vue'
import { useSlideshow } from '@/composables/useSlideshow'

const props = defineProps({ images: Array })
const emit = defineEmits(['change'])

const { currentIndex, currentImage, next, prev, play, pause } = useSlideshow(
  props.images,
  props.autoplay,
  props.interval,
  emit,
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
