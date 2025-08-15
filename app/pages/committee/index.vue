<!--------@/pages/committee/index.vue------------------------------------------>
<script setup lang='ts'>
definePageMeta({ 
  title: 'Committee'
})

const { data: analyticsData, pending, error } = await useAsyncData(
  'vercel-analytics',
  () => $fetch('/api/analytics')
)
</script>

<template><div>

    <div v-if="analyticsData">

        <!-- Debug -->
        <div v-if="0">
            <p>Raw analyticsData:</p>
            <pre>
                {{ analyticsData }}
            </pre>
        </div>

        <!-- Top pages -->
        <UCard>

            <template #header>
                Vercel Analytics - Top Pages
            </template>

            <div v-if="pending">
                <p>Loading analytics...</p>
            </div>

            <div v-else-if="analyticsData.error">
                <p>Vercel Says: {{ analyticsData.error }}</p>
            </div>

            <div v-else-if="error">
                <p>Error: {{ error.message }}</p>
            </div>
            
            <div v-else-if="analyticsData.value?.pages?.length">
                <h2>Top Pages by Visitors</h2>
                <ul>
                    <li v-for="page in analyticsData.value.pages" :key="page.path">
                        {{ page.path }}: {{ page.visitors }} visitors
                    </li>
                </ul>
            </div>

            <div v-else>
                <p>Back to the drawing board, boss.</p>
            </div>

        </UCard>

    </div>

</div></template>
<!--------@/pages/committee/index.vue------------------------------------------>