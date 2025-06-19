import { ref } from 'vue'

// Image loader composable. Takes in an image count for number of images to load. Pretty slow api. Not related to resolution
export function useImageLoader(imageCount = 5) {
  const images = ref([] as string[])
  const isLoading = ref(false)
  const error = ref('')

  // Fetch images from picsum api and push into images array
  async function fetchImages() {
    isLoading.value = true
    images.value = [] // Clear images on fetch
    error.value = ''
    try {
      for (let i = 0; i < imageCount; i++) {
        const result = await fetch(`https://picsum.photos/seed/${Math.random() * 100}/1920/1080`)

        images.value.push(result.url)
      }
    } catch (err) {
      error.value = 'Failed to fetch images'
      console.error(err)
    } finally {
      isLoading.value = false
    }
  }

  return {
    images,
    isLoading,
    fetchImages,
  }
}
