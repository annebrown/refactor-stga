<!--------@/components/ship/ColorMode.vue-------------------------------------->
<template>
  <ClientOnly>

        <UButton
            @click="onClick"
            variant="link"
            class="bg-(--ui-bg) shadow-md text-white dark:text-white"
            :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            :ui="{
                leadingIcon: 'text-(--ui-secondary) size-6'
            }"
        />

    </ClientOnly>
</template>

<script setup lang="ts">
    const colorMode = useColorMode()
    const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>
<!--------@/components/ship/ColorMode.vue-------------------------------------->
