<!--------@/components/ship/ColorMode.vue-------------------------------------->
<template>
  <ClientOnly>
    <UButton
        class="h-fit mt-1 ml-2 mr-2 text-3xl"
        :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'"
        variant="link"
        :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
        @click="isDark = !isDark"
        :ui="{
            leadingIcon: 'text-(--ui-text) size-8'
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
