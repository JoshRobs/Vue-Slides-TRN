<template>
  <div
    class="absolute inset-0 z-10 flex items-center justify-between pointer-events-none transition-opacity duration-600 opacity-0 group-hover:opacity-100"
  >
    <button
      @click="$emit('prev')"
      class="h-full w-12 bg-black/40 text-white text-2xl pointer-events-auto hover:bg-black/60 hover:scale-105 transition-all duration-200"
    >
      ‹
    </button>
    <button
      @click="$emit('next')"
      class="h-full w-12 bg-black/40 text-white text-2xl pointer-events-auto hover:bg-black/60 hover:scale-105 transition-all duration-200"
    >
      ›
    </button>
  </div>
</template>

<script setup>
defineEmits(['prev', 'next'])
</script>
