<!--------@/components/ship/MainMenu.vue--------------------------------------->
<template>

<UButtonGroup class="">

    <!-- Main Menu -->
    <nav class="hidden sm:inline-block group-hover:no-underline *:navi-item">
        
    <UNavigationMenu 
        :items="mainMenuData" 
        class="w-full justify-center p-0 m-0 align-top" 
        variant="link"
    />


    </nav><!-- Main Menu -->
   
</UButtonGroup>

</template>

<script setup lang="ts">
    // Main Menu Array
    import { mainMenuData } from "@/utils/data/MainMenu";
</script>
<!--------@/components/ship/MainMenu.vue--------------------------------------->
