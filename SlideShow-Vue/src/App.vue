<script setup>
import ImageSlideshow from './components/slideshow/ImageSlideshow.vue'

const images = ['image1.png', 'image2.png', 'image3.png']
</script>

<template>
  <ImageSlideshow :images="images" />
</template>

<style scoped></style>
