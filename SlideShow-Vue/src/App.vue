<script setup>
import Slideshow from './components/slideshow/Slideshow.vue';

const images = [
  '/images/slide1.jpg',
  '/images/slide2.jpg',
  '/images/slide3.jpg',
]
</script>

<template>
    <Slideshow :images="images" />
/>
</template>

<style scoped>
</style>
