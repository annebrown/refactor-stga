<!--------@/app/components/splash/Answer.vue----------------------------------->
<template><div>

    <!-- w-full -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full my-10 px-2">

        <!-- Answer & Buttons -->
        <div class="my-auto mx-auto pl-2">
            <!-- Answer -->
            <p class="!text-justify font-bold 
                text-(--ui-primary) text-2xl"
            >
                The last remaining undeveloped area of land that borders the Gillies Grove Old-Growth Forest is being sold to a developer.
            </p>

           <!-- Buttons -->
            <div class="w-1/2 sm:w-full grid grid-cols-1 sm:grid-cols-3 align-middle my-4 mx-auto gap-4">
                <!-- Button - Subscribe -->
                <UButton 
                    label="Subscribe"
                    to="https://forms.gle/Dbw6qFcWi66gW7CA8" 
                    target="_blank"
                    active
                    class="flex"
                    :ui="{ base: 'justify-center text-center text-lg  dark:bg-(--ui-bg-2) shadow-lg' }"
                />
                <!-- Button - Sign the Petition -->
                <UButton 
                    label="Sign the Petition"
                    to="https://www.change.org/p/save-the-grove-again-7292e6ca-eb8e-426a-8809-0bb608f24120" 
                    target="_blank"
                    active
                    class="flex"
                    :ui="{ base: 'justify-center text-center text-lg dark:text-(--ui-secondary) dark:bg-(--ui-bg-2) shadow-lg' }"
                />
                <!-- Button - Donate Today! -->
                <UButton 
                    label="Donate Today!"
                    to="/donations" 
                    target="_blank"
                    active
                    class="flex"
                    :ui="{ base: 'justify-center text-center text-lg dark:bg-(--ui-bg-2) shadow-lg' }"
                />
            </div><!-- Buttons -->
            
        </div><!-- Answer & Buttons -->

        <!-- Map -->
        <div class="mx-auto my-auto">
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