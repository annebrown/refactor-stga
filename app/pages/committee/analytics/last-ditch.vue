<script setup>
import { parse } from 'csv-parse/sync'

const countries = ref([])
const referrers = ref([])
const isLoading = ref(true)
const error = ref(null)

const fetchCSV = async (filename) => {
  try {
    // Access files directly from the public directory
    const response = await fetch(`/assets/data/analytics/${filename}`)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filename}: ${response.status} ${response.statusText}`)
    }
    
    const text = await response.text()
    return parse(text, {
      columns: true,
      skip_empty_lines: true,
      trim: true
    })
  } catch (err) {
    console.error(`Error fetching ${filename}:`, err)
    throw err
  }
}

const fetchData = async () => {
  isLoading.value = true
  error.value = null
  
  try {
    // Fetch both CSV files in parallel
    [countries.value, referrers.value] = await Promise.all([
      fetchCSV('Top Countries - Apr 15, 8pm - Apr 22.csv'),
      fetchCSV('Top Referrers - Apr 15, 8pm - Apr 22.csv')
    ])
  } catch (err) {
    console.error('Error loading analytics data:', err)
    error.value = err.message
  } finally {
    isLoading.value = false
  }
}

onMounted(() => {
  fetchData()
})
</script>

<template>
  <UApp>
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      
      <div v-if="isLoading">
        <ULoader size="lg" />
      </div>
      
      <div v-else-if="error" class="p-4 bg-red-100 text-red-700 rounded mb-6">
        Error loading data: {{ error }}
      </div>
      
      <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Top Countries -->
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-semibold">Top Countries</h2>
              <UBadge :label="countries.length.toString()" color="primary" variant="subtle" />
            </div>
          </template>
          
          <UTable :rows="countries" :columns="[
            { key: 'Page', label: 'Country' },
            { key: 'Visitors', label: 'Visitors' },
            { key: 'Total', label: 'Total' }
          ]" />
        </UCard>
        
        <!-- Top Referrers -->
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h2 class="text-xl font-semibold">Top Referrers</h2>
              <UBadge :label="referrers.length.toString()" color="primary" variant="subtle" />
            </div>
          </template>
          
          <UTable :rows="referrers" :columns="[
            { key: 'Page', label: 'Referrer' },
            { key: 'Visitors', label: 'Visitors' },
            { key: 'Total', label: 'Total' }
          ]" />
        </UCard>
      </div>
    </div>
  </UApp>
</template>