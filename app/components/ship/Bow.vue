<!--------@/app/components/ship/Bow.vue---------------------------------------->
<template><div>

<!-- Bow -->
<div id="banner" class="fixed flex flex-row w-full h-[5rem] rounded-3xl">

    <!-- Logo -->
    <ShipLogo class="flex-auto inline-block ml-1 mt-1" />

    <!-- Spacer-->
    <div class="flex-auto inline-block">&nbsp;</div>
    
    <!-- Main Menu - Collapsable -->
    <ShipMainMenu class="flex-none hidden sm:inline-block flex-none w-fit max-w-32 pr-[2rem]" />

    <div class="flex-none inline-block">

        <!-- Hamburger Icon & Dropdown Menu -->
        <ShipHamburger class="" />

        <!-- Color Mode Toggle-->
        <ShipColorMode class="" />  

    </div>

</div><!-- Bow -->

</div></template>
<!--------@/app/components/ship/Bow.vue---------------------------------------->