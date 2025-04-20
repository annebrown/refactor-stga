<!--------@/app/components/splash/Hero.vue------------------------------------->
<template><div>

    <!-- Hero -->
    <div class="relative w-full">

        <!-- Hero Image -->
        <div class="w-full p-2 pb-0">
            <img
                class="z-1 w-full rounded-4xl ring-3 ring-(--ui-secondary-2) dark:ring-(--ui-primary-2)"
                src="/images/hero/big-postcard.png"
                alt="Postcard - Gillies Grove 10,000 years in the making"
                width="500"
                height="264"
            />
        </div>

        <!-- Square Logo -->
        <div class="z-500 absolute -top-12 right-8 rounded-5xl">
            <ULink to="/" class="">
                <img
                    src="/images/logo/logo-round.svg"
                    class="dark:invert dark:hue-rotate-180 w-[10rem] h-[10rem] shadow-md shadow-black m-8 rounded-full"
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