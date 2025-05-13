<template>
  <div v-if="post">
    <h1>{{ post.title }}</h1>
    <p class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString() }}</p>
    <img v-if="post.featured_image" :src="post.featured_image" alt="Featured Image" class="my-4 rounded-md">
    <div v-html="post.content" class="prose"></div>
  </div>
  <div v-else>
    Loading post...
  </div>
</template>

<script setup>
const route = useRoute();
const slug = route.params.slug;
const { data: post } = await useAsyncData(`blog-${slug}`, () =>
  $fetch(`/api/blog`).then((posts) => posts.find((p) => p.slug === slug))
);
</script>

<style scoped>
.prose {
  @apply md:prose-base lg:prose-lg max-w-none; /* Apply Tailwind Typography */
}
</style>