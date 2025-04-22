<!--------@/components/ship/MainMenu.vue--------------------------------------->
<template><div>

    <!-- Horizontal Main Menu -->
      <nav class="group-hover:no-underline">

        <UNavigationMenu
            :items="mainMenuData"
            variant="link"
            color="primary"
            class="mainmenu m-0 p-0"
            root=""
            active
            :ui="{
            link: 'mainmenu active:text-(--color-primary-800) hover:text-(--ui-primary-600) m-0 px-2'
            }"
        />
      </nav>

</div></template>

<script setup lang="ts">
// Main Menu Array
    import { mainMenuData } from "~/assets/data/ship/MainMenu";
</script>
<!--------@/components/ship/MainMenu.vue--------------------------------------->
