<!--------@/app/layouts/pages.vue---------------------------------------------->
<template><div><!-- Layout (Single Root Element) -->

<!-- Default @/pages Page Layout -->
<UCard 
    variant="soft"
    :ui="{ 
        header: 'm-0 p-0 flex items-start', 
        footer: 'm-0 p-0 flex items-end',
        body: 'm-0 p-0' 
    }"
    class="m-0 mt-2 mb-1 p-0 rounded-4xl bg-transparent divide-transparent"
>

    <!-- CARD HEADER -->
    <template #header >

        <!-- Blog Meta ? Title -->
        <div
            v-if="route.meta.title"
            class="mt-4 mx-auto"
        >

            <!-- Title -->
            <div class="mt-5 text-5xl font-extrabold text-center text-(--ui-primary)">
                {{ route.meta.title }}
            </div>

            <!-- Description ? Description -->
            <div v-if="route.meta.title" class="m-0 mt-2 p-0 text-lg font-bold text-center">
                {{ route.meta.description }}
            </div>

        </div><!-- Blog Meta ? Title -->

    </template><!-- CARD HEADER -->

    <!-- CARD BODY -->
    <div class="bg-(--ui-bg) rounded-xl m-0 p-0 pb-2">
        <div class="w-full px-0 mx-0">
            <slot />
        </div>
    </div>

    <!-- CARD FOOTER -->
    <template #footer class="">
        <!-- Page Signature -->
        <ShipPageSignature class="mx-auto p-0 py-4 md:my-0 text-center" />
    </template>

</UCard>

</div></template>

<script setup lang="ts">
    const route = useRoute()
        const title = computed(() => route.meta.title || 'Error')


// Access Page Meta set by definePageMeta
const routeMeta = computed(() => route.meta )
</script>
<!--------@/app/layouts/pages.vue---------------------------------------------->