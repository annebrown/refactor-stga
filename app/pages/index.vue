<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="splash">

        <SplashHero class="     bg-(--ui-bg) "/>

        <SplashAnswer class="   bg-(--ui-bg)" />

        <SplashVideo class="    bg-(--ui-color-video)" />

        <SplashEventsCalendar class="m-4 bg-(--color-gray-100) rounded-xl" />

        <BlogOnlyLatest class=" bg-(--ui-color-news)" />

        <SplashJoin class="     bg-(--ui-bg)"/>

        <SplashTestimonials class="bg-(--ui-color-testimonials)" />

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Save the Grove Again', 
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->