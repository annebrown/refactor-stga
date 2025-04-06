<!--------@/components/ship/MainMenu.vue--------------------------------------->
<template>

    <!-- Horizontal Main Menu -->
    <nav class="hidden sm:inline-block group-hover:no-underline">
        
        <UNavigationMenu 
            :items="mainMenuData" 
            variant="link"
            :ui="{
                link: 'stga-mainmenu'
        }"
        />

    </nav><!-- Main Menu -->
  
</template>

<script setup lang="ts">
    // Main Menu Array
    import { mainMenuData } from "@/utils/data/MainMenu";
</script>
<!--------@/components/ship/MainMenu.vue--------------------------------------->
