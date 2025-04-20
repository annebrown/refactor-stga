<!--------@/app/components/ship/Transom.vue------------------------------------>
<template><div>

<!-- Transom -->
<div class="flex !w-full mx-auto px-2">


    <!-- Logo & Town -->
    <span class="relative grow -ml-6 pt-2 hidden sm:inline-block">

        <!-- Logo -->
        <span>
            <ShipLogo class="w-[17rem] h-auto" />
        </span>

        <!-- Town -->
        <span class="transom-menu-item absolute top-[3rem] left-[5.5rem] text-md">
            <ULink to="https://arnprior.ca" class="">
                Arnprior, ON
            </ULink>
        </span>
    </span><!-- Logo & Town -->

        <!-- Spacer-->
        <span class="grow"> </span>

    <!-- Social Icons -->
    <span class="inline-block grow-0 pt-3 text-center">

        <FleetSocialIcons class="inline-block mx-auto" /><br />

        <!-- Copyright -->
        <span class="text-center inline-block pt-2 text-sm text-(--ui-text-dimmed)">
            Copyright 
                <ULink to="/admin" class="text-(--ui-text-dimmed)">
                    @ 
                </ULink>
                2025 Save the Grove Again
        </span>

    </span>

    <!-- Spacer-->
    <span class="grow"> </span>
    <!-- Spacer-->
    <span class="grow"> </span>

    <!-- Menu  -->
    <span class="inline-block grow-0 w-fit m-0 sm:-mr-4 pr-1 text-(--ui-text-dimmed)">

            <span class="font-extrabold text-lg">Menu</span>

            <ul class="">

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
                    <ULink to="/about">
                        About
                    </ULink>
                </li>
            </ul>

    </span><!-- Menu  -->

</div><!-- Transom  -->

</div></template>   
<!--------@/app/components/ship/Transom.vue------------------------------------>