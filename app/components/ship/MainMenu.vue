<!--------@/components/ship/MainMenu.vue--------------------------------------->
<template><div>

    <!-- Horizontal Main Menu -->
      <nav class="hidden sm:inline-block group-hover:no-underline">

        <UNavigationMenu
          :items="mainMenuData"
          variant="link"
          color="primary"
          active
          :ui="{
            link: 'stga-mainmenu  active:text-(--ui-primary)  hover:text-(--ui-primary)',
          }"
        />
      </nav>

</div></template>

<script setup lang="ts">
// Main Menu Array
    import { mainMenuData } from "@/utils/data/MainMenu";
</script>
<!--------@/components/ship/MainMenu.vue--------------------------------------->
