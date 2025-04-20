<!--------@/app/components/splash/Testimonials.vue----------------------------->
<template><div>

<div class="relative z-10 px-8 pb-8 rounded-lg">

    <!-- Title -->
    <h1>
        Local Voices
    </h1>

    <p class="mb-4">
        What members of the community are saying about the proposed development:
    </p>

    <!-- Grid -->
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
    >
        <!-- Testimonials -->
        <div 
            v-for="(quote, index) in testimonialData"
            :key="index"
            :quote="quote"
        >
            <!-- Testimonial -->
            <div class="w-full bg-(--ui-bg) rounded-lg">

                <!-- Quote -->
                <p class="p-5 !pt-8">
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