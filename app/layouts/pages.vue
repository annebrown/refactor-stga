<!--------@/app/layouts/pages.vue---------------------------------------------->
<template><div><!-- Layout (Single Root Element) -->

<!-- Default @/pages Page Layout -->
<UCard 
    variant="link"
    :ui="{ 
        header: 'm-0 p-0 flex items-start', 
        footer: 'm-0 p-0 flex items-end',
        body: 'm-0 p-0' 
    }"
    class="mb-4 rounded-4xl bg-(--ui-secondary-3) dark:bg-(--ui-primary-2)"
>

    <!-- CARD HEADER -->
    <template #header >


        <!-- Blog Meta - Title? -->
        <div
            v-if="route.meta.title"
            class="mt-4 mx-auto"
        >

            <!-- Title -->
            <div class="text-4xl font-extrabold text-center">
                {{ route.meta.title }}
            </div>

            <!-- Description? -->
            <div v-if="route.meta.title" class="m-0 mt-2 p-0 text-lg font-bold text-center">
                {{ route.meta.description }}
            </div>

        </div><!-- Title? -->

    </template> <!-- CARD HEADER -->

    <!-- CARD BODY -->
    <div class="bg-(--ui-bg) rounded-xl p-6">
        <div class="w-full px-0 mx-0">
            <slot />
        </div>
    </div>

    <!-- CARD FOOTER -->
    <template #footer class=""">
        <!-- Page Signature -->
        <ShipPageSignature class="m-0 mx-auto p-0 pb-4" />
    </template>

</UCard>

</div></template>

<script setup lang="ts">
    const route = useRoute()

// Access Page Meta set by definePageMeta
const routeMeta = computed(() => route.meta )
</script>
<!--------@/app/layouts/pages.vue---------------------------------------------->