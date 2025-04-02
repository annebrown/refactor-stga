<!--------@/app/components/splash/Hero.vue------------------------------------->
<template><div>

    <!-- Hero -->
    <div class="w-full h-full pt-22">
        <!-- Hero Image -->
        <img
                class="z-10 w-full h-full fill rounded-md"
                src="/hero/big-postcard.png"
                alt="Postcard - Gillies Grove 10,000 years in the making"

                width="500"
                height="264"

        />
        <!-- Square Logo -->
        <div class="z-20 flex flex-wrap">
            <div class="mx-auto">

              <ULink to="/">
                <img
                  src="/hero/logo-orig-sq.png"
                  class="z-91 absolute top-10 right-10 w-1/5 h-auto"
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