<!--------@/pages/blog/index.vue----------------------------------------------->
<template><div>
<NuxtLayout name="pages">

<!-- All Blogs -->
   <!-- All Posts -->
   <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  w-full 
        gap-x-4 gap-y-8 p-4 
        rounded-4xl bg-(--ui-secondary-4) dark:bg-(--ui-primary-2)
        place-content-stretch">

        <BlogCardBlogPost
            v-for="(post, index) in blogData"
            :key="index" 
            :post="post"
            class="flex-1 shadow-black/25 dark:shadow-black/50 shadow-lg rounded-lg bg-(--ui-bg)"
        />

    </div>

</NuxtLayout> 
</div></template>

<script setup lang='ts'>
    import { BlogCardBlogPost } from '#components'
    import { blogData } from '../../assets/data/blog/blogData'

    definePageMeta({ 
        title: 'Blog Posts',
        description: 'News and Events'
    })
</script>
<!--------@/pages/blog/index.vue----------------------------------------------->