<!--------@/app/components/splash/Answer.vue----------------------------------->
<template><div>

    <!-- w-full -->
    <div class="w-full p-4">

        <!-- Answer & Buttons -->
        <div class="inline-block w-1/2 py-auto pr-4 align-middle">
            <!-- Answer -->
            <p class="px-4text-justify font-bold 
                text-(--ui-primary) text-2xl"
            >
                The last remaining undeveloped area of land that borders the Gillies Grove Old-Growth Forest is being sold to a developer.
            </p>

           <!-- Buttons -->
            <div class="w-full flex flex-row flex-none align-middle my-10 mx-auto gap-4">
                <!-- Button - Subscribe -->
                <UButton 
                    label="Subscribe"
                    to="https://forms.gle/Dbw6qFcWi66gW7CA8" 
                    target="_blank"
                    active
                    class=""
                    :ui="{ base: 'flex p-4 justify-center' }"
                />
                <!-- Button - Sign the Petition -->
                <UButton 
                    label="Sign the Petition"
                    to="https://www.change.org/p/save-the-grove-again-7292e6ca-eb8e-426a-8809-0bb608f24120" 
                    target="_blank"
                    active
                    class="shrink"
                    :ui="{ base: 'flex p-4 justify-center text-white' }"
                />
                <!-- Button - Donate Today! -->
                <UButton 
                    label="Donate Today!"
                    to="/donations" 
                    target="_blank"
                    active
                    class="shrink"
                    :ui="{ base: 'flex p-4 justify-center text-white dark:text-(--ui-primary)' }"
                />
            </div><!-- Buttons -->
            
        </div><!-- Answer & Buttons -->

        <!-- Map -->
        <div class="inline-block w-1/2 my-auto align-middle">
            <img 
                src="/images/answer/map.svg" 
                alt="Map showing outline of proposed development area, a strip of wooded property bordering the Ottawa River" 
                loading="eager" 
                priority 
                width=1301 
                height=1148 
                class="rounded-2xl"
            />
        </div>

    </div><!-- w-full -->
 
</div></template>
<!--------@/app/components/splash/Answer.vue----------------------------------->