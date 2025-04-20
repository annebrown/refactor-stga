<!--------@/components/fleet/ColorModeToggle.vue------------------------------->
<template>
<ClientOnly>

    <UButton
        @click="onClick"
        :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        :ui="{ leadingIcon: 'size-6', base: 'stga-button-icon', label: '' }"
        
    />

</ClientOnly>
</template>

<script setup lang="ts">
    const colorMode = useColorMode()
    const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>
<!--------@/components/fleet/ColorModeToggle.vue------------------------------->