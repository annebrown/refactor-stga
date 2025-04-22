<!-- pages/test-analytics.vue -->
<script setup>
const isLoading = ref(true)
const error = ref(null)
const data = ref(null)

const fetchData = async () => {
  isLoading.value = true
  error.value = null
  
  try {
    const result = await $fetch('/api/analytics', {
      query: {
        file: 'Top Referrers - Apr 15, 8pm - Apr 22.csv'
      }
    })
    data.value = result.data
  } catch (err) {
    console.error('Error fetching data:', err)
    error.value = err.message || 'Failed to fetch data'
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <div class="p-4">
    <h1 class="text-xl font-bold mb-4">Analytics API Test</h1>
    
    <UButton @click="fetchData" :loading="isLoading">
      Fetch Data
    </UButton>
    
    <div v-if="isLoading" class="mt-4">
      Loading...
    </div>
    
    <div v-else-if="error" class="mt-4 p-4 bg-red-100 text-red-700 rounded">
      {{ error }}
    </div>
    
    <div v-else-if="data" class="mt-4">
      <pre class="bg-gray-100 p-4 rounded overflow-auto">{{ JSON.stringify(data, null, 2) }}</pre>
    </div>
  </div>
</template>