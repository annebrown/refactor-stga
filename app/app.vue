<!--------@/app.vue------------------------------------------------------------>
<template><div>
<!-- A11y -->
<NuxtRouteAnnouncer />
<Analytics />
<NuxtPath />
<UApp>
    <div class="flex flex-col"><!-- For Z Index -->

        <!-- Bow -->
        <ShipBow id="bow" class="z-100"/>
    
        <!-- Midships -->
        <NuxtPage id="midships" class="z-10 mt-10" />

        <!-- Transom -->
        <ShipTransom id="transom" class="" />

    </div>
</UApp>

</div></template>

<script setup lang="ts">
    import { Analytics } from '@vercel/analytics/nuxt';
</script>
<!--------@/app.vue------------------------------------------------------------>