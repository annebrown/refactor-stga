<!--------@/app/layouts/default.vue-------------------------------------------->
<template><div><!-- Layout (Single Root Element) -->

    <!-- Cargo -->
    <div id="cargo" class="">

        <main><slot class="" /></main>

    </div><!-- Cargo -->

</div></template><!-- Layout (Single Root Element) -->

<script setup>
    const route = useRoute()

    // Access Page Meta set by definePageMeta
    const title = computed(() => route.meta.title || 'Error')
</script>
<!--------@/app/layouts/default.vue-------------------------------------------->