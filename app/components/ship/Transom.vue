<!--------@/app/components/ship/Transom.vue------------------------------------>
<template><div>

<!-- Transom -->
<div class="flex !w-full mx-auto px-2">


    <!-- Logo & Town -->
    <span class="relative grow hidden sm:inline-block">

        <!-- Logo -->
        <span>
            <ShipLogo class="w-[10rem] h-auto" />
        </span>

        <!-- Town -->
        <span class="transom absolute top-[1.25rem]">
            <ULink to="https://arnprior.ca" class="text-xs">
                Arnprior, ON
            </ULink>
        </span>
    </span><!-- Logo & Town -->

        <!-- Spacer-->
        <span class="grow"> </span>

    <!-- Social Icons -->
    <span class="inline-block grow-0 text-center">

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
    <span class="inline-block grow-0 w-fit pr-1 text-(--ui-text-dimmed)">

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