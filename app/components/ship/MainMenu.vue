<!--------@/components/ship/MainMenu.vue--------------------------------------->
<template>

<UButtonGroup class="">

    <!-- Main Menu -->
    <nav class="hidden sm:inline-block">

        <!-- Menu Item -->
        <ULink
            v-for="item in mainMenuData"
            :key="item.to"
            :to="item.to"
            class="navi-item"
        >
            <UButton
                class="main-menu text-lg"
                variant="link">   
                {{ item.label }}
            </UButton>
        </ULink>

    </nav><!-- Main Menu -->
   
</UButtonGroup>

</template>

<script setup lang="ts">
    // Main Menu Array
    import { mainMenuData } from "@/utils/data/MainMenu";
</script>
<!--------@/components/ship/MainMenu.vue--------------------------------------->
