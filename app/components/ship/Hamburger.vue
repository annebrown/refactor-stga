<!--------@/app/components/ship/Hamburger.vue---------------------------------->
<template><div>

    <!-- Hamburger Icon & Dropdown -->
    <div class="z-80 relative">

        <UPopover>

            <!-- Hamburger Icon -->
            <UButton variant="link" size="xl" icon="i-heroicons-bars-3" class="text-link text-3xl font-medium"/>                
               
            <template #content>

                <UNavigationMenu 
                    :items="mainMenuData" 
                    class="*:text-link w-full justify-center" 
                    orientation="vertical"
                    variant="link"
                    highlight
                    highlight-color="secondary"
                />
            </template>
        </UPopover>

    </div><!-- Hamburger Icon & Dropdown -->

</div></template>

<script setup lang="ts">

    // Main Menu Array
    import { mainMenuData } from '@/utils/data/MainMenu'


</script>