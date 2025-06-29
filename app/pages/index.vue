<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

        <!-- Hero -->
        <SplashHero class="pb-8  
            bg-(--ui-color-hero) "/>

        <!-- Answer -->
        <SplashAnswer class="   
            bg-(--ui-color-answer)" />

        <!-- Video - What's At Stake -->
        <SplashVideo class="    
            bg-(--ui-color-video) rounded-lg 
            border-5 border-(--ui-secondary-4) dark:border-(--ui-primary-2)" />

        <!-- Events -->
        <SplashEventsCalendar class="my-6 p-4 py-10 text-black
            bg-(--ui-color-events) rounded-4xl
            border-8 border-(--ui-secondary-4) dark:border-none" />

        <!-- Latest 3 Blogs -->
        <SplashOnlyLatest class=" 
            bg-(--ui-color-news) rounded-lg" />

        <!-- Join -->
        <SplashJoin class="     
            bg-(--ui-color-join)"/>

        <!-- Local Voices -->
        <SplashTestimonials class="
            bg-(--ui-color-voices) rounded-lg" />

        <ShipPageSignature class="text-center pt-8 pb-4 mb-1 px-2" />

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Save the Grove Again', 
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->