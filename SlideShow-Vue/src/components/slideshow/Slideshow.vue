<template>
  <div class="relative w-full overflow-hidden" @mouseenter="pause" @mouseleave="play">
    <SlideshowImage :src="currentImage" :alt="`Slide ${currentIndex}`" />

    <SlideshowControls @prev="prev" @next="next" />
  </div>
</template>

<script setup>
import SlideshowImage from './SlideshowImage.vue'
import SlideshowControls from './SlideshowControls.vue'
import { useSlideshow } from '@/composables/useSlideshow'

const props = defineProps({images});
const emit = defineEmits(['change'])

const {
  currentIndex,
  currentImage,
  next,
  prev,
  goTo,
  play,
  pause
} = useSlideshow(props.images, props.autoplay, props.interval, emit)
</script>