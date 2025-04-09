<!--------@/app/components/ship/Bow.vue---------------------------------------->
<template><div>

<!-- Bow -->
<div class="fixed flex flex-row w-full h-14 pl-2 bg-white dark:bg-black">

    <!-- Logo -->
    <ShipLogo class="inline-block -mt-2 w-70 h-auto" />

    <!-- Spacer-->
    <div class="grow">&nbsp;</div>
    
    <!-- Main Menu - Collapsable -->
    <ShipMainMenu class="inline-block flex-none w-fit mr-1" />

    <!-- Hamburger Icon & Dropdown Menu -->
    <ShipHamburger class="w-fit inline-block flex-none p-1" />

    <!-- Color Mode Toggle-->
    <div class="pt-2"><ShipColorMode class="w-fit inline-block flex-none" /></div>              

</div><!-- Bow -->

</div></template>
<!--------@/app/components/ship/Bow.vue---------------------------------------->