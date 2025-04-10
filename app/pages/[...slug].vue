<!--------@/pages/[...slug].vue------------------------------------------------>
<template><!-- No div - breaks route-->
 <NuxtLayout>
    <div>
        <ContentRenderer :value="page" />
    </div>
</NuxtLayout>
</template>

<script lang="ts" setup>
    definePageMeta({ 
        layout: 'default'
    })
    
    const route = useRoute()


    const { data: page } = await useAsyncData(route.path, () => 
        queryContent(route.path).findOne())

    if (!page.value) {
         throw createError({ statusCode: 404, 
            statusMessage: 'Page Not Found', fatal: true })
    }
</script>
<!--------@/pages/[...slug].vue------------------------------------------------>