<!--------@/pages/index.vue---------------------------------------------------->
<template><div>
    <NuxtLayout name="splash">
    <SplashHero />
    <SplashAnswer />
    <SplashVideo />
    <BlogOnlyLatest />
    <SplashJoin />
    <SplashTestimonials />
    <ShipPageSignature />
    </NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Save the Grove Again', 
    })
</script>
<!--------@/pages/index.vue---------------------------------------------------->