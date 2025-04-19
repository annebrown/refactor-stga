<!--------@/app/components/ship/Bow.vue---------------------------------------->
<template><div>

<!-- Bow -->
<div class="fixed flex flex-row w-full max-w-4xl h-[4rem] ml-2
    rounded-s-[calc(var(--ui-radius-round)*2)] rounded-e-none
    bg-(--ui-bow)
    ">

    <!-- Logo -->
    <span class="shrink">
        <ShipLogo class="shrink inline-block ml-1.5 mt-2" />
    </span>

    <!-- Spacer-->
    <div class="flex-auto inline-block">&nbsp;</div>
    
    <!-- Main Menu - Collapsable -->
    <ShipMainMenu    class="text-shadow-lg flex-none hidden sm:inline-block w-fit mt-1.5 mr-1" />

    <!-- Hamburger Icon & Dropdown Menu -->
    <span class="flex-none mt-4 mr-2">
        <ShipHamburger />
    </span>

    <!-- Color Mode Toggle-->
    <span class="flex-none mt-3.5 mr-5">
        <ShipColorMode />  
    </span>

</div><!-- Bow -->

</div></template>
<!--------@/app/components/ship/Bow.vue---------------------------------------->