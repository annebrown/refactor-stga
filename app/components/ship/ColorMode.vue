<!--------@/components/ship/ColorMode.vue-------------------------------------->
<template>
  <ClientOnly>

        <UButton
            @click="onClick"
            variant="link"
            :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
            :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
            :ui="{
                leadingIcon: ' size-6',
                base: 'stga-button stga-button-label radius-(--ui-radius-round)',
                label: 'stga-button-label stga-button-round'
            }"
        />

    </ClientOnly>
</template>

<script setup lang="ts">
    const colorMode = useColorMode()
    const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>
<!--------@/components/ship/ColorMode.vue-------------------------------------->
