<!--------@/pages/[...slug].vue------------------------------------------------>
<template>
  <!-- No div -> breaks route -->
  <NuxtLayout>
    <div>
      <ContentRenderer :value="page" />
    </div>
  </NuxtLayout>
</template>

<script lang="ts" setup>
    definePageMeta({
        layout: "default",
    });

    const route = useRoute();

    const { data: page } = await useAsyncData(route.path, () => {
        return queryCollection('content').path(route.path).first()
    })
</script>
<!--------@/pages/[...slug].vue------------------------------------------------>
