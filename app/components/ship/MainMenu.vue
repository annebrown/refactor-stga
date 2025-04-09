<!--------@/components/ship/MainMenu.vue--------------------------------------->
<template><div>

    <!-- Horizontal Main Menu -->
    <div class="inactive-text-temporary-color-override">

        <nav class="hidden sm:inline-block group-hover:no-underline">
            
            <UNavigationMenu 
                :items='mainMenuData'
                variant='link'
                color='primary'
                :ui="{
                    link: 'text-(--ui-secondary) active:text-(--ui-primary) stga-mainmenu  hover:text-(--ui-primary)'
                }"
            />

        </nav><!-- Main Menu -->
        
    </div>
</div></template>

<script setup lang="ts">
    // Main Menu Array
    import { mainMenuData } from "@/utils/data/MainMenu";
</script>

<style scoped>
.inactive-text-temporary-color-override {
  --ui-text-muted: black; /* Override inactive text color for light mode */
  
  .dark & {
    --ui-text-muted: white; /* Override inactive text color for dark mode */
  }
}
</style>
<!--------@/components/ship/MainMenu.vue--------------------------------------->
