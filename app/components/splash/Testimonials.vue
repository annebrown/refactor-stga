<!--------@/app/components/splash/Testimonials.vue----------------------------->
<template><div>

<div class="relative z-10 pb-2 rounded-lg">

    <!-- Title -->
    <h1 class="p-7 pt-8 text-3xl font-bold text-center pb-5 text-black">
        Local Voices
    </h1>

    <p class="text-center pb-7 text-black">
        What members of the community are saying about the proposed development:
    </p>

    <!-- Grid -->
    <div class="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3 
        mt-0 pt-0 px-5 pb-7"
    >
        <!-- Testimonials -->
        <div 
            v-for="(quote, index) in testimonialData"
            :key="index"
            :quote="quote"
        >
            <!-- Testimonial -->
            <div class="w-full bg-green-600 rounded-lg">

                <!-- Quote -->
                <p class="
                    text-base leading-relaxed p-5 ">
                    {{ quote.content }}
                </p>

                <!-- Initials -->
                <div class="flex items-center">
                    <div class="w-full p-5 pt-0">
                        <p class="text-sm">
                            {{ quote.initials }}
                        </p>
                    </div>
                </div>

            </div><!-- Testimonial -->

        </div><!-- Testimonials -->

    </div><!-- Grid -->

</div>

</div></template>

<script lang="ts" setup>
    const testimonialData  = [
        {
            id: 1,
            initials: "- P.D",
            content:
                "The Galilee Centre Land is a treasure in our community - one that we cannot lose. It is a habitat for insects, birds and wildlife and a healing space for many. It is important that we protect our green space when planning for development in our town.",
        },
        {
            id: 2,
            initials: "- P.M",
            content:
                "Another impact that will be felt will be huge traffic implications around the area that is home to three schools and the hospital.  It will become a very dangerous area to navigate, especially for children.",
        },
        {
            id: 3,
            initials: "- K.P",
            content:
                "I use the Galilee Centre grounds for lessons including: hiking, snowshoeing, xc skiing, fitness runs, cycling, scavenger hunts, tree identification, milkweed studies, soil studies, orienteering, etc. I rely heavily on this land to deliver my lessons.",
        },
    ];
</script>
<!--------@/app/components/splash/Testimonials.vue----------------------------->