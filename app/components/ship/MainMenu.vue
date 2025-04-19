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
            link: 'mainmenu  active:text-(--ui-primary)  dark:active:text-(--ui-tertiary) hover:text-(--ui-primary) dark:hover:text-(--ui-tertiary)',
          }"
        />
      </nav>

</div></template>

<script setup lang="ts">
// Main Menu Array
    import { mainMenuData } from "~/assets/data/ship/MainMenu";
</script>
<!--------@/components/ship/MainMenu.vue--------------------------------------->
