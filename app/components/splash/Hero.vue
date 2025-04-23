<!--------@/app/components/splash/Hero.vue------------------------------------->
<template><div>

    <!-- Hero -->
    <div class="relative w-ful p-0">

        <!-- Hero Image -->
        <div class="w-full m-0 rounded-4xl">
            <img
                class="z-1 p-4 w-full rounded-4xl  border-30 dark:border-40 border-(--ui-secondary-3) dark:border-(--ui-primary-2)"
                src="/images/hero/big-postcard.png"
                alt="Postcard - Gillies Grove 10,000 years in the making"
                width="500"
                height="264"
            />
        </div>

        <!-- Square Logo -->
        <div class="z-500 absolute -top-2 -right-4 p-6 rounded-5xl">
            <ULink to="/action" class="">
                <img
                    src="/images/logo/logo-round.svg"
                    class="dark:invert dark:hue-rotate-180 p-0.5
                    h-[7rem] w-[7rem] sm:h-[12rem] sm:w-[12rem]
                    shadow-md shadow-black dark:shadow-white m-8 rounded-full"
                    alt="Logo - Trees and water inside a circle"
                    loading="eager"
                    priority
                    width="200"
                    height="200"
                />
            </ULink>
        </div>

    </div><!-- Hero -->

</div></template>
<!--------@/app/components/splash/Hero.vue------------------------------------->