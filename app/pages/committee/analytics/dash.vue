<!-- pages/analytics-dashboard.vue -->
<script setup lang="ts">
const countries = ref([])
const referrers = ref([])
const isLoading = ref(true)

// Fetch data from our API
const fetchAnalyticsData = async () => {
  isLoading.value = true
  try {
    const [countriesData, referrersData] = await Promise.all([
      $fetch('/api/analytics', {
        query: {
          file: '2025/Top Countries - Apr 15, 8pm - Apr 22.csv'
        }
      }),
      $fetch('/api/analytics', {
        query: {
          file: 'Top Referrers - Apr 15, 8pm - Apr 22.csv'
        }
      })
    ])
    
    countries.value = countriesData.data
    referrers.value = referrersData.data
  } catch (error) {
    console.error('Error fetching analytics data:', error)
  } finally {
    isLoading.value = false
  }
}

// Fetch data when component is mounted
onMounted(() => {
  fetchAnalyticsData()
})
</script>

<template>
  <UApp>
    <div class="p-6">
      <h2 class="text-2xl font-bold mb-6">Analytics Dashboard</h2>
      
      <div v-if="isLoading">
        <ULoader size="lg" />
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
            { key: 'country', label: 'Country' },
            { key: 'visitors', label: 'Visitors' },
            { key: 'percentage', label: 'Percentage' }
          ]" />
        </UCard>
        
        <!-- Top Referrers -->
        <UCard>
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-xl font-semibold">Top Referrers</h3>
              <UBadge :label="referrers.length.toString()" color="primary" variant="subtle" />
            </div>
          </template>
          
          <UTable :rows="referrers" :columns="[
            { key: 'referrer', label: 'Referrer' },
            { key: 'visitors', label: 'Visitors' },
            { key: 'percentage', label: 'Percentage' }
          ]" />
        </UCard>
      </div>
    </div>
  </UApp>
</template>