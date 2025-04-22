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
            variant="link"
            class="w-full m-1 p-0 sm:mt-1 md:mt-8 lg:mt-10 p-0 sm:py-3 rounded-4xl bg-(--ui-secondary-2) dark:bg-(--ui-primary-2)"
            :ui="{ 
                root: 'relative',
                header: 'z-200 sticky top-1 sm:top-2 bg-(--ui-bg) ring-3 ring-(--ui-secondary-2) dark:ring-(--ui-primary-2) rounded-4xl shadow-black shadow-md', 
                footer: 'rounded-4xl mb-2 pt-1 pb-2 bg-(--ui-bg) ring-3 ring-(--ui-secondary-3) dark:ring-(--ui-primary-2) shadow-black/50 shadow-lg',
                body: 'm-0 p-0' 
            }"
        >

            <!-- CARD HEADER -->
            <template #header class="flex w-full items-center justify-between pt-8">
                
                <!-- Logo -->
                <span class="flex-auto inline-block">
                        <ShipLogo class="inline-block w-[12rem] pt-[0.5rem] ml-2 sm:-ml-5" />
                </span>
                <div class="grow"> </div>

                <!-- Bow Menus & Toggles -->
                <ShipBowMenu id="bow" class="inline-block align-bottom mt-2 rounded-4xl"/>

            </template> <!-- CARD HEADER -->
            
        
            <!-- CARD BODY -->
            <div class="z-1 bg-(--ui-bg) rounded-4xl p-0">

                <div class="w-full px-0 mx-0">

                    <!-- Midships -->
                    <NuxtPage id="midships" class="z-1 w-full p-0" />

                </div>
            </div>

            <!-- CARD FOOTER -->
            <template #footer class="flex w-full items-center justify-between">

                <!-- Transom -->
                <ShipTransom id="transom" class="w-full" />

            </template>

        </UCard>

    </UContainer><!-- Ship -->

</UApp>

</div></template>

<script setup lang="ts">
    import { Analytics } from '@vercel/analytics/nuxt';
</script>
<!--------@/app.vue------------------------------------------------------------>