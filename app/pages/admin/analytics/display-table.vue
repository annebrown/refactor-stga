<template>
    <div>
      <UCard title="Vercel Analytics Dashboard">
        <UTable :rows="analyticsData" :columns="analyticsColumns">
          <template #metric-data="{ row, column }">
            <span>{{ row[column.key] }}</span>
          </template>
        </UTable>
        </UCard>
    </div>
  </template>


<script setup>
const { countries, referrers, isLoading, error, fetchData } = useVercelAnalytics()

// Fetch data when component is mounted
onMounted(() => {
  fetchData()
})
</script>