<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

        <!-- Hero -->
        <SplashHero class="my-2 py-3  
            bg-(--ui-color-hero) "/>

        <!-- Answer -->
        <SplashAnswer class="   
            bg-(--ui-color-answer)" />

        <!-- Video - What's At Stake -->
        <SplashVideo class="    
            bg-(--ui-color-video) rounded-3xl 
            border-10 border-(--ui-secondary-2) dark:border-(--ui-primary-2)" />

        <!-- Events -->
        <SplashEventsCalendar class="my-6 p-4 py-10text-black
            bg-(--ui-color-events) rounded-4xl
            border-8 border-(--ui-secondary-3) dark:border-none" />

        <!-- Latest 3 Blogs -->
        <BlogOnlyLatest class=" 
            bg-(--ui-color-news) rounded-3xl" />

        <!-- Join -->
        <SplashJoin class="     
            bg-(--ui-color-join)"/>

        <!-- Local Voices -->
        <SplashTestimonials class="
            bg-(--ui-color-voices) rounded-3xl" />

        <ShipPageSignature class="text-center pt-8 pb-4 mb-1 px-2" />

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Save the Grove Again', 
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->