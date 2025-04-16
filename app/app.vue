<!--------@/app.vue------------------------------------------------------------>
<template><div>
<!-- A11y -->
<NuxtRouteAnnouncer />
<UApp>
    <div class="flex flex-col"><!-- For Z Index -->

        <!-- Bow -->
        <ShipBow id="bow" class="z-1 w-full my-4"/>
    
        <!-- Midships -->
        <NuxtPage id="midships" class="pt-15" />

        <!-- Transom -->
        <ShipTransom id="transom" class="" />

    </div>
</UApp>

</div></template>
<!--------@/app.vue------------------------------------------------------------>