<!--------@/app/components/splash/Join.vue------------------------------------->
<template><div>

    <!-- Grid -->
    <div class=" 
        grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 
        w-full z-30 
        align-items-center"
    >
        <div class="">
            <p class="text-justify">
                Join us as we gather together our collective love of this ecological and historical gem to counter the development proposal. Together we can find a better and more sustainable solution that meets the needs of all, including; the Galilee Center, a respected retreat center that has been entrusted with the care of this land for many years; the town's folk who live nearby or use this area for their physical and spiritual wellbeing; the flora, fauna and fungi of the great and incredibly rare forest known as Gillies Grove; and the developer who needs to find ways to build homes for a growing Ontario population.
            </p>
        </div>

        <!-- Vignette, Button and Signature -->
        <div class="">

            <!-- Green Vignette" -->
            <img
           
                src="/images/join/6-green-min.jpg"
                alt="Shoreline and forest sketch"
                loading="eager"
                priority
                width=1057
                height=551
            />

            <!-- Button - Get Involved! -->
            <div class="bg-green-600 rounded-lg hover:bg-sky-200 
                hover:text-black text-white text-3xl font-extrabold w-fit 
                shadow-md mx-auto">
                <!-- Button - Get Involved!-->
                <UButton 
                    label="Get Involved!"
                    to="/action" 
                    target="_blank"
                    active
                    color="secondary"
                    variant="solid"
                />   
            </div>

            <ShipPageSignature />

        </div><!-- Vignette, Button and Signature -->
    
    </div><!-- Grid -->

</div></template>
<!--------@/app/components/splash/Join.vue------------------------------------->