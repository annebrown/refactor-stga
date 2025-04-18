<!--------@/app/components/splash/Hero.vue------------------------------------->
<template><div>

    <!-- Hero -->
    <div class="relative w-full">
        <!-- Hero Image -->
        <div 
            class="w-full p-2 pb-0"
        >
            <img
                    class="z-1 relative w-full rounded-4xl"
                    src="/images/hero/big-postcard.png"
                    alt="Postcard - Gillies Grove 10,000 years in the making"

                    width="500"
                    height="264"

            />
        </div>
        <!-- Square Logo -->

        <ULink 
            to="/"
            class="z-91 absolute top-10 right-10 w-1/5 h-auto">
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
  

    </div><!-- Hero -->

</div></template>
<!--------@/app/components/splash/Hero.vue------------------------------------->