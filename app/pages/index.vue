<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

        <SplashHero class="     bg-(--ui-color-hero) "/>

        <SplashAnswer class="   bg-(--ui-color-answer)" />

        <SplashVideo class="    bg-(--ui-color-video) rounded-3xl" />

        <SplashEventsCalendar class="m-4 bg-(--ui-color-events) rounded-xl text-black" />

        <BlogOnlyLatest class=" bg-(--ui-color-news) rounded-3xl" />

        <SplashJoin class="     bg-(--ui-color-join)"/>

        <SplashTestimonials class="bg-(--ui-color-testimonials) rounded-3xl" />

        <ShipPageSignature class="text-center my-8" />

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Save the Grove Again', 
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->