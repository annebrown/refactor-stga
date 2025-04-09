<!--------@/app/components/splash/Answer.vue----------------------------------->
<template><div>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 content-center
        w-full mt-5 mx-4">

        <!-- Answer & Buttons -->
        <div class="content-center h-full">

            <!-- Answer -->
            <p class="pl-6 text-justify font-bold text-(--ui-primary) text-3xl"
            >
                The last remaining undeveloped area of land that borders the Gillies Grove Old-Growth Forest is being sold to a developer.
            </p>

            <!-- Buttons -->
            <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 
                w-full mt-10 ml-6 text-center text-2xl"
            >
                <!-- Button - Subscribe -->
                <UButton 
                    label="Subscribe"
                    to="https://forms.gle/Dbw6qFcWi66gW7CA8" 
                    target="_blank"
                    active
                    color="secondary"
                    variant="solid"
                />
                <!-- Button - Sign the Petition -->
                <UButton 
                    label="Sign the Petition"
                    to="https://www.change.org/p/save-the-grove-again-7292e6ca-eb8e-426a-8809-0bb608f24120" 
                    target="_blank"
                    active
                    color="secondary"
                    variant="solid"
                />
                <!-- Button - Donate Today! -->
                <UButton 
                    label="Donate Today!"
                    to="/donations" 
                    target="_blank"
                    active
                    color="secondary"
                    variant="solid"
                />
            </div><!-- Buttons -->
            
        </div><!-- Answer & Buttons -->

        <!-- Map -->
        <div class="h-full m-5 p-5 mr-2">
            <NuxtImg 
                src="/images/answer/map.svg" 
                alt="Map showing outline of proposed development area, a strip of wooded property bordering the Ottawa River" 
                loading="eager" 
                priority 
                width={1301} 
                height={1148} 
                class="rounded-lg"
            />
        </div>

    </div><!-- Grid -->
 
</div></template>
<!--------@/app/components/splash/Answer.vue----------------------------------->