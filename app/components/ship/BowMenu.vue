<!--------@/app/components/ship/Bow.vue---------------------------------------->
<template>
<!--  Bow Menu -->
<span class="inline-block">

    <!-- Main Menu - Collapsable -->
    <ShipMainMenu  class="hidden md:inline-block mr-8 pl-4 text-shadow-lg 
        rounded-4xl bg-(--ui-bg) " />

    

        <!-- Absolute -->
        <span class="inline-block absolute bottom-5 right-4">

            <!-- Absolute -->
            <span class="inline-block">

                <!-- Hamburger Icon/Dropdown Menu -->
                <ShipHamburger class="inline-block mr-2" />

                <!-- Color Mode Toggle-->
                <FleetColorModeToggle class="inline-block" />
            </span>


        </span>
     

    </span><!-- Left Side of Bow -->

</template>
<!--------@/app/components/ship/Bow.vue---------------------------------------->