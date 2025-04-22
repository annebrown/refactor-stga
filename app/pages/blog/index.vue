<!--------@/pages/blog/index.vue----------------------------------------------->
<template><div>
<NuxtLayout name="pages">

<!-- All Blogs -->
   <!-- All Posts -->
   <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8 p-4 rounded-4xl
        w-full bg-(--ui-bg) dark:bg-(--ui-primary)
        place-content-stretch">

  <!-- Rounded bottom with thicker primary-colored top border -->

    <BlogCardBlogPost
        v-for="(post, index) in blogData"
        :key="index" 
        :post="post"
        class="flex-1 rounded-2xl  shadow-xl
            
            shadow-black/25 dark:shadow-black/50 shadow-lg rounded-3xl bg-(--ui-bg) 
            "
    />

</div>
<!-- 
 border-t-(--ui-secondary-2) dark:border-t-(--ui-primary)

rounded-2xl bg-(--ui-bg) shadow-xl
    shadow-black/25 dark:shadow-black/50 shadow-lg rounded-3xl bg-(--ui-bg) -->

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