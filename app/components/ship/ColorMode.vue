<!--------@/components/ship/ColorMode.vue-------------------------------------->
<template>
  <ClientOnly>
    <UButton
        class="h-fit mr-1 align-top"
        :icon="isDark ? 'i-heroicons-sun-20-solid' : 'i-heroicons-moon-20-solid'"
        variant="link"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="isDark = !isDark"
        :ui="{
            leadingIcon: 'text-(--ui-secondary) size-7'
         }"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const isDark = computed({
  get () {
    return colorMode.value === 'dark'
  },
  set () {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  }
})
</script>
<!--------@/components/ship/ColorMode.vue-------------------------------------->
