<!--------@/app/components/ship/Logo.vue--------------------------------------->
<template><div>

<!-- Logo -->
<NuxtLink to="/">
    <img 
        :src="logoSrc" 
        alt="Logo - Trees and water inside a circle, with text: Save the 
                Grove Again" 
        width="1479"
        height="419"
    />
</NuxtLink>

</div></template>

<script setup>
    import { computed } from 'vue'

    const colorMode = useColorMode()

    const logoSrc = computed(() => 
        colorMode.value === 'light' ? '/logo-rect-light.png' : '/logo-rect-dark.svg'
    )
</script>
<!--------@/app/components/ship/Logo.vue--------------------------------------->
