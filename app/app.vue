<!--------@/app.vue------------------------------------------------------------>
<template><div>

<!-- A11y -->
<NuxtRouteAnnouncer />

<!-- Analytics -->
<Analytics />

<UApp>

    <!-- Ship -->
    <UContainer class="w-full mx-auto max-w-4xl m-0 mt-2 mx-auto p-0">

        <UCard
            variant="link"
            class="w-full mt-1 rounded-4xl bg-(--ui-secondary-2) dark:bg-(--ui-primary-2)"
            :ui="{ 
                root: 'relative',
                header: ' z-200 sticky top-2  bg-(--ui-bg) ring-3 ring-(--ui-secondary-2) dark:ring-(--ui-primary-2) rounded-4xl shadow-black shadow-md', 
                footer: 'rounded-4xl mb-2 pt-1 pb-2 bg-(--ui-bg) ring-3 ring-(--ui-secondary-2) dark:ring-(--ui-primary-2) shadow-black shadow-lg',
                body: 'm-0 p-0' 
            }"
        >

            <!-- CARD HEADER -->
            <template #header class="flex w-full items-center justify-between">
                
                <!-- Logo -->
                <span class="flex-auto inline-block">
                        <ShipLogo class="inline-block w-[12rem] pt-[0.5rem] ml-2 sm:-ml-5" />
                </span>
                <div class="grow"> </div>

                <!-- Bow -->
                <ShipBowMenu id="bow" class="inline-block pt-1 mr-2 sm:-mr- rounded-4xl"/>

            </template> <!-- CARD HEADER -->
            
        
            <!-- CARD BODY -->
            <div class="z-1 bg-(--ui-bg) rounded-4xl p-1">

                <div class="w-full px-0 mx-0">

                    <!-- Midships -->
                    <NuxtPage id="midships" class="z-1 w-full" />

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