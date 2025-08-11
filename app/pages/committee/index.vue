<!--------@/pages/committee/index.vue------------------------------------------>
<script setup lang='ts'>
    definePageMeta({ 
        title: 'Committee'
    })
const { data: items, pending } = await useAsyncData('items', () => $fetch('/api/items'));

    const { data: analyticsData, error } = await useAsyncData(
        'vercel-analytics',
        () => $fetch('/api/analytics')
    );

    // process for UI component
    const processedData = computed(() => {
    if (!analyticsData.value) return [];
    return analyticsData.value.pages?.slice(0, 5) || []; // Top 5 pages
    });
</script>

<template><div>
    <UCard v-if="!error">
        <template #header v-if="items">
            Vercel Analytics - Top Pages
        </template>

        <p class="text-2xl text-error">
            ANALYTICS DATA
        </p>
        <P>{{ analyticsData }}</P>
        <DebugObject :items="items" />

        <!-- <UTable :rows="processedData" /> -->
    </UCard>

    <div v-else>
        <p>Error fetching analytics data.</p>
    </div>


      <div v-if="pending">Loading items...</div>
  <div v-else-if="items && items.length > 0">
    <div v-for="item in items" :key="item.id">{{ item.name }}</div>
  </div>
  <div v-else>No data available.</div>

  <Analytics />
  
</div></template>
<!--------@/pages/committee/index.vue------------------------------------------>