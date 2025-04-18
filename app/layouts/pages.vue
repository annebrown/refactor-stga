<!--------@/app/layouts/pages.vue---------------------------------------------->
<template><div><!-- Layout (Single Root Element) -->

<!-- Default @/pages Page Layout -->
<UCard 
    variant="subtle"
    class="mb-10 mx-2 rounded-3xl bg-(--color-apple-200)"
>

    <!-- Page Meta -->
    <template #header class="h-fit mx-auto p-0">
    
        <!-- Title -->
        <div
            v-if="route.meta.title"
            class="m-0 p-0 mx-auto"
        >
            <span class="text-4xl font-extrabold text-center">{{ route.meta.title }}</span>
        </div><br />
        <div
            v-if="route.meta.title"
            class="m-0 p-0 text-center"
        >
            <span>{{ route.meta.description }}</span>
    </div>

    </template><!-- Page Meta -->

    <!-- Page Content -->
    <div class="w-full px-0 mx-0">
        <slot />
    </div>

    <!-- Page Signature -->
    <template #footer class="px-2">
        <ShipPageSignature />
    </template>

</UCard>

</div></template>

<script setup lang="ts">
    const route = useRoute()

// Access Page Meta set by definePageMeta
const routeMeta = computed(() => route.meta )
</script>
<!--------@/app/layouts/pages.vue---------------------------------------------->