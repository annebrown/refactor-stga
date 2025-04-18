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
            <span class="transom absolute top-[2.5rem] left-[5rem]">
                Arnprior, ON
            </span>

        </div><!-- Logo & Town -->

         <!-- Contacts & Socials-->
        <div class="w-full">
            <ShipSocialIcons class="w-full mx-auto mt-[1.5rem] text-center" />
        </div>

        <!-- Menu  -->
        <div class="flex-none flex">

            <!-- Spacer-->
            <div class="flex-1"> </div>

            <div class="flex-none w-fit">
                <span class="font-extrabold text-xl">Menu</span>
                <ul class="">
                    <li class="stga-transom"><ULink to="/blog">Blog</ULink></li>
                    <li class="stga-transom"><ULink to="/action">Get Involved!</ULink></li>
                    <li class="stga-transom"><ULink to="/about">About</ULink></li>
                </ul>
            </div>
        </div><!-- Menu  -->

    </div><!-- Flex  -->
    <!-- Copyright -->
    <div class="w-full pb-2 text-center">
        Copyright <ULink to="/admin" class="text-(--ui-text)">@</ULink> 2025 Save the Grove Again
    </div>

    
</div><!-- Transom  -->

</div></template>    
<!--------@/app/components/ship/Transom.vue------------------------------------>