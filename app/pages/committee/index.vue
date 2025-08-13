<!--------@/pages/committee/index.vue------------------------------------------>
import { useAsyncData } from '#app'

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Committee'
    })

    const { data: analyticsData, pending, error } = await useAsyncData(
        'vercel-analytics',
        () => $fetch('/api/analytics')
    );
</script>

<template><div>
    <UCard v-if="!error">
        <template #header v-if="items">
            Vercel Analytics - Top Pages
        </template>

        <p class="text-2xl text-error">
            ANALYTICS DATA
        </p>

    <div v-if="pending">
        <p>
            Loading analytics...
        </p>
    </div>
    <div v-else-if="error">
        <p>
            Error: {{ error.message }}
        </p>
    </div>
    <div v-else-if="analyticsData">
        <h2>Top Pages by Visitors</h2>
        <ul>
            <li v-for="page in analyticsData.pages" :key="page.path">
                {{ page.path }}: {{ page.visitors }} visitors
            </li>
        </ul>
    </div>
    <div v-else>
        <p>
            No analytics data available.
        </p>
    </div>
  </UCard>
</div></template>
<!--------@/pages/committee/index.vue------------------------------------------>