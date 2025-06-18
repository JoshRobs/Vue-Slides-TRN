<template>
  <div>
    <button @click="$emit('prev')" class="absolute left-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/50 text-white">‹</button>
    <button @click="$emit('next')" class="absolute right-0 top-1/2 -translate-y-1/2 px-4 py-2 bg-black/50 text-white">›</button>
  </div>
</template>

<script setup>
defineEmits(['prev', 'next'])
</script>