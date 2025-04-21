<!--------@/app/components/splash/Hero.vue------------------------------------->
<template><div>

    <!-- Hero -->
    <div class="relative w-full">

        <!-- Hero Image -->
        <div class="w-full p-8 pb-0 mt-10 rounded-4xl">
            <img
                class="z-1 p-2 w-full rounded-4xl border-35 border-(--ui-secondary-3) dark:border-(--ui-primary-2)"
                src="/images/hero/big-postcard.png"
                alt="Postcard - Gillies Grove 10,000 years in the making"
                width="500"
                height="264"
            />
        </div>

        <!-- Square Logo -->
        <div class="z-500 absolute -top-9 sm:-top-[6rem] sm:-top-[4.3rem] -right-7 p-4 rounded-5xl">
            <ULink to="/" class="">
                <img
                    src="/images/logo/logo-round.svg"
                    class="dark:invert dark:hue-rotate-180 p-0.5
                    w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem] md:w-[15rem] md:h-[15rem]
                    shadow-md shadow-black m-8 rounded-full"
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