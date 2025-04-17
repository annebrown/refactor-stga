<!--------@/pages/blog.vue----------------------------------------------------->
<template><div>

<!-- All Blogs -->
<UContainer class="mb-4 bg-(--ui-color-news) rounded-2xl">

    <!-- Title -->
    <h1 class="!pt-8">Blog Posts</h1>

    <div 
        class="grid gap-x-8 gap-y-10 
            grid-cols-1 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3 
                place-content-stretch">
     
            <BlogCardBlogPost
                v-for="(post, index) in blogData"
                :key="index" 
                :post="post"
                class="flex-1 shadow-md bg-(--ui-bg)"
            />
   
    </div>

   <ShipPageSignature class="py-8 pt-10 text-(--ui-bg)" />>
    
</UContainer><!-- All Blogs -->
   
</div></template>

<script setup lang='ts'>
    import { BlogCardBlogPost } from '#components'
    import { blogData } from '../assets/data/blog/blogData'
</script>
<!--------@/pages/blog.vue----------------------------------------------------->
