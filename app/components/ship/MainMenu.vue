<!--------@/components/ship/MainMenu.vue--------------------------------------->
<template>

    <!-- Horizontal Main Menu -->
     <div class="custom-nav-container">
    <nav class="hidden sm:inline-block group-hover:no-underline">
        
        <UNavigationMenu 
            :items='mainMenuData'
      
            variant='link'
            color='primary'
            class=""

            :ui="{
                link: 'stga-mainmenu  hover:text-(--ui-primary)'
            }"
        />

    </nav><!-- Main Menu -->
</div>
</template>

<script setup lang="ts">
    // Main Menu Array
    import { mainMenuData } from "@/utils/data/MainMenu";
</script>

<style scoped>
.custom-nav-container {
  --ui-text-muted: black; /* Override inactive text color for light mode */
  
  .dark & {
    --ui-text-muted: white; /* Override inactive text color for dark mode */
  }
}
</style>
<!--------@/components/ship/MainMenu.vue--------------------------------------->
