<!--------@/app/components/ship/Transom.vue------------------------------------>
<template><div>

<!-- Transom -->
<div>

    <!-- Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 w-full">


        <!-- Logo & Town -->
        <div class="mx-auto sm:mx-2">

            <!-- Logo -->
            <div class="m-2 sm:-ml-6 sm:-mr-6">
                <ShipLogoArnprior class="w-80 sm:w-64 p-2" />
            </div>

        </div><!-- Logo & Town -->

        <!-- Spacer-->
        <div class=""></div>

        <!-- Social Links -->

        <div class="mt-0 sm:my-auto mb-3 mx-auto">

            <FleetSocialIcons class="" />

        </div><!-- Social Links -->

        <!-- Spacer-->
        <div class="grow hidden md:inline-block"></div>

        <!-- Menu  -->
        <div class="mt-1 -mb-5 justify-end hidden md:inline-block grid grid-cols-2 text-(--ui-text-dimmed)">

                <div class="font-extrabold text-lg">
                    Menu
                </div>

                <!-- Menu Items-->
                <ul class="transom">

                    <li class="transom-menu-item">
                        <ULink to="/blog">
                            Blog
                        </ULink>
                    </li>

                    <li class="transom-menu-item">
                        <ULink to="/action">
                            Get Involved!
                        </ULink>
                    </li>

                    <li class="transom-menu-item">
                        <ULink to="/faq">
                            FAQ
                        </ULink>
                    </li>

                    <li class="transom-menu-item">
                        <ULink to="/about">
                            About
                        </ULink>
                    </li>

                    <li class="transom-menu-item">
                        <ULink to="/admin">
                            Admin
                        </ULink>
                    </li>
                </ul>
                <!-- Menu Items-->

        </div>
        <!-- Menu  -->

    </div>
    <!-- Grid -->

    <div class="w-full mx-auto mb-2 text-center"><!-- Transom Bottom -->
        <!-- Copyright -->
        <div class="text-sm text-(--ui-text-dimmed)">
        Copyright 
            <ULink to="/committee" class="!text-(--ui-text-dimmed)">
                @ 
            </ULink>
            2025 Save the Grove Again
        </div>
    </div>
    <!-- Transom Bottom -->

</div>
<!-- Transom -->

</div></template>

<script setup>
    import { ShipLogoArnprior } from '#components';
    import { useMediaQuery } from '@vueuse/core';

    const isSm = useMediaQuery('(min-width: 640px)'); 
    const isMd = useMediaQuery('(min-width: 768px)');
    const isLg = useMediaQuery('(min-width: 1024px)');
    const isXl = useMediaQuery('(min-width: 1280px)');
    const is2Xl = useMediaQuery('(min-width: 1536px)');

</script>
<!--------@/app/components/ship/Transom.vue------------------------------------>