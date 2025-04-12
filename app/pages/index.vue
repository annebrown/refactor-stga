<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
    <NuxtLayout name="splash">

        <SplashHero class="mb-0  
            bg-transparent"/>

        <SplashAnswer class="mx-4 mb-8 
            bg-transparent" />

        <SplashVideo class="
            bg-(--ui-color-video)" />

        <SplashEventsCalendar class="mb-14 rounded-3xl
            bg-transparent" />

        <BlogOnlyLatest class="mb-14 pb-18
            bg-(--ui-color-news) rounded-3xl" />

        <SplashJoin class="ml-4 mb-14 
            bg-transparent" />

        <SplashTestimonials class="
            bg-(--ui-color-testimonials)" />

        <ShipPageSignature id="page-signature" class="py-8 text-3xl" />

    </NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Save the Grove Again', 
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->