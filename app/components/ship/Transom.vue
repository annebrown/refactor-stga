<!--------@/app/components/ship/Transom.vue------------------------------------>

<template><div>

<!-- Transom -->
<div class="relative w-full px-1">

    <!-- Flex -->
    <div class="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-4">

        <!-- Logo & Town -->
        <div class="flex-none">

            <!-- Logo -->
            <span>
                <ShipLogo class="" />
            </span>

            <!-- Town -->
            <span class="transom absolute top-[1.25rem] left-[3.5rem]">
                <ULink to="https://arnprior.ca" class=" text-xs">Arnprior, ON</ULink>
            </span>

        </div><!-- Logo & Town -->

         <!-- Contacts & Socials-->
        <div class="w-full">
            <FleetSocialIcons class="w-full mx-auto mt-[1rem] text-center" /><br />
        </div>

        <!-- Menu  -->
        <div class="flex-none flex text-(--ui-text-dimmed)">

            <!-- Spacer-->
            <div class="flex-1"> </div>

            <div class="flex-none w-fit mt-0 pb-5 pt-0">
                <span class="font-extrabold text-ld">Menu</span>
                <ul class="">
                    <li class="transom-menu-item"><ULink to="/blog">Blog</ULink></li>
                    <li class="transom-menu-item"><ULink to="/action">Get Involved!</ULink></li>
                    <li class="transom-menu-item"><ULink to="/about">About</ULink></li>
                </ul>
            </div>
        </div><!-- Menu  -->

    </div><!-- Flex  -->
    <!-- Copyright -->
    <div class="w-full -mt-10 text-center text-sm text-(--ui-text-dimmed)">
        Copyright <ULink to="/admin" class="text-(--ui-text-dimmed)">@</ULink> 2025 Save the Grove Again
    </div>

    
</div><!-- Transom  -->

</div></template>   
<!--------@/app/components/ship/Transom.vue------------------------------------>