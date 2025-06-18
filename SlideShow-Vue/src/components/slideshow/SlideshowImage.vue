<template>
  <img
    :src="'src/assets/images/' + src"
    :alt="alt"
    class="w-full h-auto transition-opacity duration-500"
  />
</template>

<script setup>
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
