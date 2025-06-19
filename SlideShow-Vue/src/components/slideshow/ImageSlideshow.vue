<template>
  <div
    class="relative w-[80%] aspect-video h-auto overflow-hidden group"
    @mouseenter="pause"
    @mouseleave="play"
  >
    <transition name="fade">
      <!--Image display-->
      <SlideshowImage
        :src="currentImage"
        :alt="`Image Slide ${currentIndex}`"
        :key="currentImage"
      />
    </transition>
    <SlideshowControls @prev="prev" @next="next" />
  </div>
</template>

<script setup>
import SlideshowImage from './SlideshowImage.vue'
import SlideshowControls from './SlideshowControls.vue'
import { useSlideshow } from '@/composables/useSlideshow'

const props = defineProps({
  images: {
    type: Array,
    default: [],
  },
  autoplay: {
    type: Boolean,
    default: true,
  },
  interval: {
    type: Number,
    default: 1000,
  },
})
const emit = defineEmits(['change'])

// Here we set up next and previous buttons, as well as autoplay and wait time before next slide
const { currentIndex, currentImage, next, prev, play, pause } = useSlideshow(
  props.images,
  props.autoplay,
  props.interval,
  emit,
)
</script>

<style scoped>
/* 
Vue Transition
*/
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  position: absolute;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
