<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

        <!-- Hero -->
        <SplashHero class="     bg-(--ui-color-hero) "/>

        <!-- Answer -->
        <SplashAnswer class="   bg-(--ui-color-answer)" />

        <!-- Video - What's At Stake -->
        <SplashVideo class="mb-8 shadow-lg   
            bg-(--ui-color-video) rounded-3xl 
            border-10 border-(--ui-secondary-2) dark:border-(--ui-primary-2)" />

        <!-- Events -->
        <SplashEventsCalendar class="my-2 p-4 text-black
            bg-(--ui-color-events) rounded-4xl
            border-8 border-(--ui-secondary-3) dark:border-(ui-primary-1)" />

        <!-- Latest 3 Blogs -->
        <BlogOnlyLatest class=" 
            bg-(--ui-color-news) rounded-3xl" />

        <!-- Join -->
        <SplashJoin class="     
            bg-(--ui-color-join)"/>

        <!-- Local Voices -->
        <SplashTestimonials class="
            bg-(--ui-color-voices) rounded-3xl" />

        <ShipPageSignature class="text-center my-8" />

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Save the Grove Again', 
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->