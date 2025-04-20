<!--------@/app/components/ship/Hamburger.vue---------------------------------->
<template><div>

    <!-- Hamburger Icon & Dropdown -->
    <div class="z-80">

        <!-- Render above everything else -->
        <UPopover class="">

            <!-- Hamburger Icon -->
            <UButton 
                class="sm:hidden -mt-0.5"
                icon="i-heroicons-bars-3"
                aria-label="Hamburber Menu"
                :ui="{
                    base: 'stga-button-icon',
                    leadingIcon: 'size-6'
                }"
            />              

            <!-- Hamburger Vertical Menu -->
            <template #content class="override-text-muted">

                <UNavigationMenu 
                    :items="mainMenuData" 
                    class="w-full justify-center shadow-md" 
                    orientation="vertical"
                    variant="link"
                    active
                    :ui="{
                        link: 'stga-mainmenu active:text-(--ui-primary) hover:text-(--ui-primary)'
                    }"
                />
            </template>

        </UPopover><!-- Render above everything else -->

    </div><!-- Hamburger Icon & Dropdown -->

</div></template>

<script setup lang="ts">
    import { mainMenuData } from '~/assets/data/ship/MainMenu'  // Main Menu Array
</script>
<!--------@/app/components/ship/Hamburger.vue---------------------------------->