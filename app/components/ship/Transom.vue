<!--------@/app/components/ship/Transom.vue------------------------------------>

<template><div>

    <!-- Transom -->
    <div class="relative z-10 w-full">
    
        <!-- Flex -->
        <div class="flex flex-row m-0 ml-3 p-0 pt-0 ">
    
            <!-- Logo & Town -->
            <div class="shrink m-0 p-0 pb-3">
    
                <!-- Logo -->
                <ULink to="/" class="inline-block m-0 p-0 pl-2 w-40 h-5 align-top">
                    <ShipLogo class="" />
                </ULink>

                <!-- Town -->
                <p class="m-0 p-0 pt-2 pl-1 text-xs text-center align-top">
                    Arnprior, ON
                </p>
    
            </div><!-- Logo & Town -->
    
            <!-- Contacts -->
            <div class="flex-none inline-block mx-auto items-center m-0 mb-1 p-0 pb-0">
    
                <ShipSocialIcons />
    
            </div><!-- Contacts -->
    
            <!-- Menu  -->
            <div class="mr-5 flex-none w-fit h-auto pb-1">
    
                <!-- Container -->
                <div class="container mb-0 text-right">
    
                    <h2 class="text-sm font-bold mb-0 pb-0">
                        Menu
                    </h2>
    
                    <ul>
                        <li class="text-xs">
                            <ULink
                            to="/blog"
                            class="text-xs text-center duration-300 hover:text-primary text-(--ui-color-secondary-600)">
                            Blog
                            </ULink>
                        </li>
                        <li class="pb-0 text-xs">
                            <ULink
                            to="/action"
                            class="text-xs duration-300 hover:text-primary text-(--ui-color-secondary-600)">
                            Get Involved!
                            </ULink>
                        </li>
                        <li class="pl-0 text-xs pb-0">
                        <ULink
                            to="/about"
                            class="text-xs duration-300 hover:text-primary text-(--ui-color-secondary-600)">
                            About
                            </ULink>
                        </li>
                    </ul>
                </div><!-- Container -->
            </div><!-- Menu  -->

        </div><!-- Flex  -->
    
        <!-- Copyright -->
        <div class="pb-5 pt-0 w-full rounded-b-lg">
            <p class="text-center text-xs">
                Copyright <ULink to="/flyer">@</ULink> 2025 Save the Grove Again
            </p>
        </div>
    
    </div><!-- Transom  -->

</div></template>    
<!--------@/app/components/ship/Transom.vue------------------------------------>