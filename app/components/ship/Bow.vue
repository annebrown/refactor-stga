<!--------@/app/components/ship/Bow.vue---------------------------------------->
<template><div>
    <!-- Bow -->
    <div id="bow" class="relative flex justify-between items-center p-4">

        <!-- Logo -->
        <div class="flex items-center space-x-4">
            <ShipLogo class="w-auto h-6" />
            <ShipMainMenu class="w-fit" />
        </div>

        <!-- Menu and Color Mode Selector -->
        <div class="flex items-center space-x-4">
            <ShipHamburger /><UIColorMode />
        </div>

    </div><!-- Bow -->

</div></template>
<!--------@/app/components/ship/Bow.vue---------------------------------------->