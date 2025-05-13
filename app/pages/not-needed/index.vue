<script setup>
const { data: posts } = await useAsyncData('blog', () => $fetch('/api/blog'));
</script>

<template>
  <div>
    <h1>Blot Posts</h1>
    <div v-if="posts">
      <div v-for="post in posts" :key="post.slug">
        <NuxtLink :to="`/blog/${post.slug}`">
          <h2>{{ post.title }}</h2>
          <p class="text-sm text-gray-500">{{ new Date(post.date).toLocaleDateString() }}</p>
          <img v-if="post.featured_image" :src="post.featured_image" alt="Featured Image" class="mt-2 rounded-md">
          <p class="mt-2">{{ post.content.substring(0, 150) }}...</p>
        </NuxtLink>
        <hr class="my-4">
      </div>
    </div>
    <div v-else>
      Loading posts...
    </div>
  </div>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>