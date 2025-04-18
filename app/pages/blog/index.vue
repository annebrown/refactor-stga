<!--------@/pages/blog/index.vue----------------------------------------------->
<template><div>
<NuxtLayout name="pages">

<!-- All Blogs -->
<div 
    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8
        w-full
        place-content-stretch"
>
    
    <BlogCardBlogPost
        v-for="(post, index) in blogData"
        :key="index" 
        :post="post"
        class="flex-1 
            shadow-2xl rounded-md bg-(--ui-bg-1)"
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