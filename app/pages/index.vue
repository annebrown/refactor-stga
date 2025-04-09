<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
    <NuxtLayout name="splash">

        <SplashHero class="mb-14 bg-transparent"/>

        <SplashAnswer class="mx-4 mb-14 bg-(--stga-answer)" />

        <SplashVideo class="bg-(--ui-color-secondary-300)" />

        <SplashEventsCalendar class="mb-14 pb-16 bg-(--stga-events)" />

        <BlogOnlyLatest class="mb-14 pb-18 bg-amber-200" />

        <SplashJoin class="mb-14 bg-(--stga-join)" />

        <SplashTestimonials class="bg-(--ui-color-secondary-200)" />

        <ShipPageSignature class="text-3xl text-(--ui--color-secondary)" />

    </NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Save the Grove Again', 
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->