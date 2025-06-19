<script setup>
import ImageSlideshow from './components/slideshow/ImageSlideshow.vue'
import { useImageLoader } from '@/composables/useImageLoader'
import { ref, onMounted } from 'vue'
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'

const { images, isLoading, fetchImages } = useImageLoader()
// Fetch images on mount
onMounted(() => {
  fetchImages()
})
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <div class="w-full max-w-full aspect-video flex items-center justify-center">
      <!--Keep aspect ratio in wrapper to keep button locked below-->
      <ImageSlideshow v-if="!isLoading" :images="images" :autoplay="true" :interval="6000" />
      <pulse-loader v-else :loading="isLoading" :color="color" :size="size"></pulse-loader>
    </div>
    <button
      type="button"
      class="cursor-pointer w-[50%] text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-xl text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-default disabled:bg-gray-600 disabled:hover:bg-gray-600 transition-colors duration-400 ease-in-out"
      :disabled="isLoading"
      @click="fetchImages()"
    >
      Load New Images
    </button>
  </div>
</template>

<style scoped></style>
