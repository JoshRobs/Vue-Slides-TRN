<template>
  <img
    :src="src"
    :alt="alt"
    @load="loaded = true"
    :class="[
      'block w-full object-contain transition-all duration-1000 ease-in-out transform',
      loaded ? 'opacity-100' : 'opacity-0', // Aniamtion on load
    ]"
  />
</template>

<script setup>
import { ref } from 'vue'
const loaded = ref(false)
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
})
</script>
