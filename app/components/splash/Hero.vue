<!--------@/app/components/splash/Hero.vue------------------------------------->
<template><div>

    <!-- Hero -->
    <div class="relative w-full h-full -mt-4">
        <!-- Hero Image -->
        <div class="">
            <img
                    class="z-1 w-full rounded-md"
                    src="/hero/big-postcard.png"
                    alt="Postcard - Gillies Grove 10,000 years in the making"

                    width="500"
                    height="264"

            />
        </div>
        <!-- Square Logo -->
        <div class="z-20 flex flex-wrap">
            <div class="mx-auto">

              <ULink to="/">
                <img
                  src="/hero/logo-orig-sq.png"
                  class="z-91 absolute -top-2 right-20 w-1/5 h-auto dark:invert dark:hue-rotate-180"
                  alt="Logo - Trees and water inside a circle"
                  loading="eager"
                  priority
                  width="300"
                  height="300"
                />
              </ULink>

            </div>
        </div><!-- Square Logo-->

    </div><!-- Hero -->

</div></template>
<!--------@/app/components/splash/Hero.vue------------------------------------->