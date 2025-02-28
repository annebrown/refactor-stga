<!--------@/app.vue------------------------------------------------------------>
<template><div>

    <!-- A11y -->
    <NuxtRouteAnnouncer /><!-- Assistive Technologies --> 
    
    <UCard>

        <!-- Bow -->
        <template #header>
            <ShipBow />
        </template>

        <!-- Midships -->
        <NuxtPage />

        <!-- Transom -->
        <template #footer>
            <!-- <ShipTransom /> -->
        </template>

    </UCard>
</div></template>
<!--------@/app.vue------------------------------------------------------------>