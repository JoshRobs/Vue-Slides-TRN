<template>
  <div class="absolute inset-0 z-10 flex items-center justify-between pointer-events-none">
    <button
      @click="$emit('prev')"
      class="h-full w-12 bg-black/50 text-white text-2xl pointer-events-auto"
    >
      ‹
    </button>
    <button
      @click="$emit('next')"
      class="h-full w-12 bg-black/50 text-white text-2xl pointer-events-auto"
    >
      ›
    </button>
  </div>
</template>

<script setup>
defineEmits(['prev', 'next'])
</script>
