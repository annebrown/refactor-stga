<!--------@/app/components/ship/Hamburger.vue---------------------------------->
<template>

    <!-- Hamburger Icon & Dropdown -->
    <span class="inline-block bg-transparent">

        <UPopover 
            :ui="{ 
                content: 'ring-transparent bg-transparent'
            }"
            mode="hover"
            class=""
        >

            <!-- Hamburger Icon -->
            <UButton 
                class="md:hidden"
                icon="i-heroicons-bars-3"
                aria-label="Hamburber Menu"
                :ui="{ base: 'stga-button', leadingIcon: 'size-6' }"
            />              

            <!-- Vertical Menu -->
            <template #content class="override-text-muted">

                <UNavigationMenu 
                    slots: {
                        :items="mainMenuData" 
                        active
                        orientation="vertical"
                        variant="link"
                        class="w-fit h-fit p-4 
                            rounded-4xl 
                            border-7 border-(--ui-secondary-2)
                            dark:border-(--ui-primary-2) 
                            bg-(--ui-bg) opacity-90"
                        root=""
                        label="w-full justify-center items-center rounded-4xl !font-extrabold"
                    }
                />

            </template>

        </UPopover><!-- Render above everything else -->

    </span><!-- Hamburger Icon & Dropdown -->

</template>

<script setup lang="ts">
    import type { NavigationMenuItem } from '@nuxt/ui'
    import { mainMenuData } from '~/assets/data/ship/MainMenu'  // Main Menu Array
</script>
<!--------@/app/components/ship/Hamburger.vue---------------------------------->