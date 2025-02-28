<!--------@/components/ship/MainMenu.vue--------------------------------------->
<template><div>
    <!-- Main Menu -->
    <nav class="hidden md:flex space-x-4">

        <NuxtLink 
            v-for="item in mainMenuData" 
            :key="item.to" 
            :to="item.to" 
            class="text-gray-600 hover:text-gray-900"
        >
            {{ item.label }}
        </NuxtLink>

    </nav><!-- Main Menu -->

</div></template>

<script setup lang="ts">
    import { mainMenuData } from '@/utils/data/MainMenu'
</script>
<!--------@/components/ship/MainMenu.vue--------------------------------------->
