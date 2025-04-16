<!--------@/app/components/ship/Hamburger.vue---------------------------------->
<template><div>

    <!-- Hamburger Icon & Dropdown -->
    <div class="z-80">

        <!-- Render above everything else -->
        <UPopover>

            <!-- Hamburger Icon -->
            <UButton 
                variant="link" 
                class="sm:hidden"
                icon="i-heroicons-bars-3"
                :ui="{
                    leadingIcon: 'text-(--ui-secondary) size-9'
                }"
            />              

            <!-- Hamburger Vertical Menu -->
            <template #content class="override-text-muted">

                <UNavigationMenu 
                    :items="mainMenuData" 
                    class="w-full justify-center" 
                    orientation="vertical"
                    variant="link"
                    color='primary'
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
    import { mainMenuData } from '@/utils/data/MainMenu'  // Main Menu Array
</script>
<!--------@/app/components/ship/Hamburger.vue---------------------------------->