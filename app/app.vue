<!--------@/app.vue------------------------------------------------------------>
<template><div>

<!-- A11y -->
<NuxtRouteAnnouncer />

<!-- Analytics -->
<Analytics />
<!-- <NuxtPath /> -->

<UApp>

    <!-- Ship -->
    <div class="w-full mx-auto flex flex-col max-w-4xl">

        <!-- Bow -->
        <ShipBow id="bow" class="z-100 w-full mb-1"/>
    
        <!-- Midships -->
        <NuxtPage id="midships" class="z-10 w-full mt-[4.5rem]" />

        <!-- Transom -->
        <ShipTransom id="transom" class="w-full" />

    </div>
</UApp>

</div></template>

<script setup lang="ts">
    import { Analytics } from '@vercel/analytics/nuxt';
</script>
<!--------@/app.vue------------------------------------------------------------>