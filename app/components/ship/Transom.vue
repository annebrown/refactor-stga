<!--------@/app/components/ship/Transom.vue------------------------------------>
<template><div>

<!-- Transom -->
<div class="flex !w-full mx-auto">


    <!-- Logo & Town -->
    <span class="w-fullrelative grow -ml-5 my-auto hidden sm:inline-block">

        <!-- Logo -->
        <span>
            <ShipLogo class="w-fit h-auto p-3" />
        </span>

        <!-- Town -->
        <span class="transom-menu-item absolute top-[3rem] left-[5.5rem] text-md">
            <ULink to="https://arnprior.ca" class="">
                Arnprior, ON
            </ULink>
        </span>
    </span><!-- Logo & Town -->

    <!-- Spacer-->
    <span class="flex-1"> </span>

    <!-- Social Icons -->
    <span class="inline-block flex-none pt-[2rem] pr-1 my-auto text-center">

        <FleetSocialIcons class="inline-block mx-auto" /><br />

        <!-- Copyright -->
        <span class="text-center inline-block p-4 text-sm text-(--ui-text-dimmed)">
            Copyright 
                <ULink to="/admin" class="text-(--ui-text-dimmed)">
                    @ 
                </ULink>
                2025 Save the Grove Again
        </span>

    </span><!-- Social Icons -->

    <!-- Spacer-->
    <span class="flex-1"> </span>

    <!-- Spacer-->
    <span class="flex-1"> </span>

    <!-- Spacer-->
    <span class="flex-1"> </span>

    <!-- Spacer -->
    <span class="flex-1"> </span>

    <!-- Spacer-->
    <span class="flex-1"> </span>

    <!-- Menu  -->
    <span class="inline-block grow-0 w-fit m-0 p-1 pb-0 text-(--ui-text-dimmed)">

            <span class="pt-3 font-extrabold text-xl">
                Menu
            </span>

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