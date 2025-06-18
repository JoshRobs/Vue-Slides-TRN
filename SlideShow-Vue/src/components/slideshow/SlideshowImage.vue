<template>
  <img :src="src" :alt="alt" class="w-full h-auto object-cover transition-opacity duration-500" />
</template>

<script setup>
defineProps({ 
    src: {
        type:String,
        required:true
    },
    alt: {
        type:String,
        required:true
    },
})
</script>