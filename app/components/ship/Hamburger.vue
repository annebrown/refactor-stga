<!--------@/app/components/ship/Hamburger.vue---------------------------------->
<template><div>

    <!-- Hamburger Icon & Dropdown -->
    <div class="z-80">

        <!-- Render above everything else -->
        <UPopover>

            <!-- Hamburger Icon -->
            <UButton 
                variant="link" 
                icon="i-heroicons-bars-3"
                :ui="{
                        leadingIcon: 'text-(--ui-text) size-10'
                }"
            />              

            <!-- Hamburger Vertical Menu -->
            <template #content>
                <UNavigationMenu 
                    :items="mainMenuData" 
                    class="w-full justify-center" 
                    orientation="vertical"
                    variant="link"
                    :ui="{
                        link:   'stga-mainmenu'
                    }"
                />
            </template>

        </UPopover><!-- Render above everything else -->

    </div><!-- Hamburger Icon & Dropdown -->

</div></template>

<script setup lang="ts">
    import { mainMenuData } from '@/utils/data/MainMenu'  // Main Menu Array
</script>
<style scoped>
.custom-nav-container {
  --ui-text-muted: black; /* Override inactive text color for light mode */
  
  .dark & {
    --ui-text-muted: white; /* Override inactive text color for dark mode */
  }
}
</style>
<!--------@/app/components/ship/Hamburger.vue---------------------------------->