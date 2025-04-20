<!--------@/app/components/splash/Hero.vue------------------------------------->
<template><div>

    <!-- Hero -->
    <div class="relative w-full">

        <!-- Hero Image -->
        <div class="w-full p-2 pb-0">
            <img
                class="z-1 w-full rounded-4xl ring-2 ring-transparent dark:ring-(--ui-color-secondary-950)"
                src="/images/hero/big-postcard.png"
                alt="Postcard - Gillies Grove 10,000 years in the making"
                width="500"
                height="264"
            />
        </div>

        <!-- Square Logo -->
        <div class="z-2 absolute -top-4 right-8">
            <ULink to="/" class="w-[30rem] h-[30rem]">
                <img
                    src="/images/hero/logo-orig-sq.png"
                    class="dark:invert dark:hue-rotate-180"
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