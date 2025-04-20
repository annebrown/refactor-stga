<!--------@/app/components/splash/Join.vue------------------------------------->
<template><div>

<!-- Grid -->
<div class="z-30 grid grid-cols-1 sm:grid-cols-2  gap-4 w-full py-10 align-items-center">

    <!-- Text & Button -->
    <div class="align-items-center">

        <p class="p-4 text-justify">
            Join us as we gather together our collective love of this ecological and historical gem to counter the development proposal. Together we can find a better and more sustainable solution that meets the needs of all, including; the Galilee Center, a respected retreat center that has been entrusted with the care of this land for many years; the town's folk who live nearby or use this area for their physical and spiritual wellbeing; the flora, fauna and fungi of the great and incredibly rare forest known as Gillies Grove; and the developer who needs to find ways to build homes for a growing Ontario population.
        </p>

        <!-- Button - Get Involved!-->
        <div class="flex items-center justify-center">
            <UButton 
                class="text-center shadow-black shadow-lg"
                label="Get Involved!"
                to="/action" 
                target="_blank"
                active
                color="secondary"
                variant="solid"
            /> 
        </div>  

    </div><!-- Text & Button -->

    <!-- Green Vignette" -->
    <div class="flex items-center justify-center">
        <img
            class=""
            src="/images/join/vignette.svg"
            alt="Sketch - Shoreline and forest"
            loading="eager"
            priority
            width=500
            height=358
        />

    </div>

</div><!-- Grid -->

</div></template>
<!--------@/app/components/splash/Join.vue------------------------------------->