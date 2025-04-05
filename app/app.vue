<!--------@/app.vue------------------------------------------------------------>
<template><div>
<!-- A11y -->
<NuxtRouteAnnouncer />
<UApp>
    <div class="flex flex-col"><!-- For Z Index -->

        <!-- Bow -->
        <ShipBow id="bow" class="z-1 w-full my-2"/>
    
        <!-- Midships -->
        <NuxtPage id="z-2 midships" class="pt-12" />

        <!-- Transom -->
        <ShipTransom id="transom" class="" />

    </div>
</UApp>

</div></template>
<!--------@/app.vue------------------------------------------------------------>