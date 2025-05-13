<!--------@/pages/[...slug].vue------------------------------------------------>
<template>
  <!-- No div - breaks route-->
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

    if (!page.value) {
        throw createError({
            statusCode: 404,
            statusMessage: "Page Not Found",
            fatal: true,
        });
    }
</script>
<!--------@/pages/[...slug].vue------------------------------------------------>
