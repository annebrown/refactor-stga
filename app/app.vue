<!--------@/app.vue------------------------------------------------------------>
<template><div>

<!-- A11y -->
<NuxtRouteAnnouncer />

<!-- Analytics -->
<Analytics />

<UApp>

    <!-- Ship -->
    <UContainer class="w-full mx-auto max-w-4xl">

        <UCard
            variant="soft"
            class="w-full m-0 p-0
            rounded-4xl sm:rounded-full bg-transparent divide-transparent
          "
            :ui="{ 
                root: 'relative rounded-4xl',
                header: 'z-200 sticky top-2 bg-(--ui-bg) rounded-full ring-3 ring-(--ui-secondary-2) dark:ring-(--ui-primary-2) shadow-black/25 shadow-lg', 
                footer: 'mb-3 rounded-full bg-(--ui-bg) ring-transparent sm:ring-3 ring-(--ui-secondary-2) dark:ring-(--ui-primary-2) shadow-transparent sm:shadow-black/25 shadow-xl',
                body: 'm-0 p-0' 
            }"
        >

            <!-- CARD HEADER -->
            <template #header class="flex w-full items-center justify-between">
                
                <!-- Logo -->
                <span class="flex-auto inline-block">
                        <ShipLogo class="inline-block w-[14rem] sm:-ml-6 p-2 pb-0"/>
                </span>
                
                <!-- <div class="grow"> </div> -->

                <!-- Bow Menus & Toggles -->
                <ShipBowMenu id="bow" class="inline-block mt-2 rounded-4xl"/>

            </template> <!-- CARD HEADER -->
            
        
            <!-- CARD BODY -->
            <div class="z-1 bg-(--ui-bg) rounded-4xl m-0 p-0">

                <div class="w-full px-0 mx-0">

                    <!-- Midships -->
                    <NuxtPage id="midships" class="z-1 w-full m-0 p-0" />

                </div>
            </div>

            <!-- CARD FOOTER -->
            <template #footer class="w-full">

                <!-- Transom -->
                <ShipTransom id="transom" class="w-full shadow-3xl" />

            </template>

        </UCard>

    </UContainer><!-- Ship -->

</UApp>

</div></template>

<script setup lang="ts">
    import { Analytics } from '@vercel/analytics/nuxt';

    // useSeoMeta({
    //     title: 'My Site',
    //     ogTitle: ' Site',
    //     description: 'This is my site.',
    //     ogDescription: 'This is my site.',
    //     ogImage: 'https://example.com/image.png',
    //     twitterCard: 'summary_large_image',
    //     })
    
</script>
<!--------@/app.vue------------------------------------------------------------>