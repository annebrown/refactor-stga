<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
    <NuxtLayout name="splash">

        <SplashHero class="mb-0  
            bg-(--ui-bg) "/>

        <SplashAnswer class="mx-4 mb-8 
           bg-(--ui-bg)" />

        <SplashVideo class="rounded-2xl
            bg-(--ui-color-video)" />

        <SplashEventsCalendar class="pb-8 mb-14 shadow-lg
            bg-(--ui-color-events) " />

        <BlogOnlyLatest class="mb-14 pb-18
            bg-(--ui-color-news) rounded-3xl" />

        <SplashJoin class="ml-4 mb-14 
           bg-(--ui-bg)" />

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