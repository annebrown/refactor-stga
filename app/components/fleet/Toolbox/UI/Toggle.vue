<!--------@@/base/components/drawingBoard/Board0001.vue------------------------>
<template><div>
<!--Show/Hide Toggle-->
<UButton
    :icon="isElementVisible ? 'solar:eye-linear' : 'solar:eye-closed-linear'"
    variant="ghost"
    @click="toggleElementVisibility"
    class=""
/>

<!-- v-if ElementVisible -->
<div v-if="isElementVisible">
    <p>Visible Stuff</p>
</div><!-- v-if ElementVisible -->

</div></template>

<script setup lang="ts">
    // Show/Hide Element
    import { ref } from 'vue'

    const isElementVisible = ref(true)

    const toggleElementVisibility = () => {
        isElementVisible.value = !isElementVisible.value
    }
</script>
<!--------@@/base/components/drawingBoard/Board0001.vue------------------------>