<!--------@/app/components/ship/Hamburger.vue---------------------------------->
<template>

    <!-- Hamburger Icon & Dropdown -->
    <span class="inline-block">

        <!-- Render above everything else -->
        <UPopover class="">

            <!-- Hamburger Icon -->
            <UButton 
                class="sm:hidden"
                icon="i-heroicons-bars-3"
                aria-label="Hamburber Menu"
                :ui="{ base: 'stga-button-icon', leadingIcon: 'size-6' }"
            />              

            <!-- Vertical Menu -->
            <template #content class="override-text-muted">

                <UNavigationMenu 
                    slots: {
                        :items="mainMenuData" 
                        active
                        orientation="vertical"
                        variant="link"
                        class=""
                        root=""
                        label="w-full justify-center items-center"
                    }
                />
            </template>

        </UPopover><!-- Render above everything else -->

    </span><!-- Hamburger Icon & Dropdown -->

</template>

<script setup lang="ts">
    import type { NavigationMenuItem } from '@nuxt/ui'
    import { mainMenuData } from '~/assets/data/ship/MainMenu'  // Main Menu Array
</script>
<!--------@/app/components/ship/Hamburger.vue---------------------------------->