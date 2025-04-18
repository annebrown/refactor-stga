<!--------@/pages/blog/index.vue----------------------------------------------->
<template><div>
<NuxtLayout name="pages">

<!-- All Blogs -->
<div 
    class="w-full grid gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 
        place-content-stretch"
>
    
    <BlogCardBlogPost
        v-for="(post, index) in blogData"
        :key="index" 
        :post="post"
        class="flex-1 shadow-lg bg-(--ui-bg) rounded-md"
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