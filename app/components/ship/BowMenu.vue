<!--------@/app/components/ship/Bow.vue---------------------------------------->
<template>
<!--  Bow Menu -->
<span class="inline-block">

    <!-- Main Menu - Collapsable -->
    <ShipMainMenu  class="hidden sm:inline-block text-shadow-lg pr-8 pl-6
        rounded-4xl bg-(--ui-bg) border-3 border-(--ui-secondary-2) dark:border-(--ui-primary-2)" />

    

        <!-- Absolute -->
        <span class="inline-block absolute bottom-[1rem] right-2 sm:-right-[0.1rem] h-fit">

            <!-- Absolute -->
            <span class="inline-block h-fit">

                <!-- Hamburger Icon/Dropdown Menu -->
                <ShipHamburger class="inline-block w-fit h-fit mr-2" />

                <!-- Color Mode Toggle-->
                <FleetColorModeToggle class="inline-block w-fit h-fit" />
            </span>


        </span>
     

    </span><!-- Left Side of Bow -->

</template>
<!--------@/app/components/ship/Bow.vue---------------------------------------->