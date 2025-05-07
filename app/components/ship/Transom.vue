<!--------@/app/components/ship/Transom.vue------------------------------------>
<template><div>

<!-- Transom Top -->
<div class="relative flex w-full mx-auto">

    <!-- Logo & Town -->
    <span class="flex-none -ml-6.25 my-auto inline-block">

        <!-- Logo -->
        <span class="inline-block">
            <ShipLogo class="inline-block
                w-40 sm:w-72 md:w-96 
                ml-8 
                mt-9 
                pb-0"
            />
        </span>
                
        <!-- Town -->
        <span class="transom-menu-item absolute 
            top-[4.25rem] sm:top-4 md:top-[6rem] lg:top-[6rem] 
            left-[4.75rem] sm:left-[6.5rem] md:left-[8.25rem] lg:left-[8rem] 
            text-xs sm:text-sx md:text-lg lg:text-xl">
            <ULink to="https://arnprior.ca" class="text-(--ui-secondary)">
                Arnprior, ON
            </ULink>
        </span>
    </span><!-- Logo & Town -->

    <!-- Spacer-->
    <span class="flex-1"> </span>

    <!-- Social Icons -->
    <span class="inline-block flex-none my-auto mr-3 pt-6">

        <FleetSocialIcons class="inline-block mx-auto" /><br />

    </span><!-- Social Icons -->

    <!-- Menu  -->
    <!-- <span class="inline-block grow-0 w-fit m-2 text-(--ui-text-dimmed)">

            <span class="font-extrabold text-lg">
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

    </span> -->
    <!-- Menu  -->

</div><!-- Transom Top -->

<div class="w-full mx-auto mb-2 text-center"><!-- Transom Bottom -->
    <!-- Copyright -->
    <span class="text-sm text-(--ui-text-dimmed)">
    Copyright 
        <ULink to="/admin" class="text-(--ui-text-dimmed)">
            @ 
        </ULink>
        2025 Save the Grove Again
    </span>
</div><!-- Transom Bottom -->

</div></template>   
<!--------@/app/components/ship/Transom.vue------------------------------------>