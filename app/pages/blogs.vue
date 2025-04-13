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
                class="flex-1 shadow-md bg-(--ui-bg) rounded-3xl"
            />
   
    </div>

   <ShipPageSignature class="py-8 pt-10 text-(--ui-primary)" />>
    
</UContainer><!-- All Blogs -->
   
</div></template>

<script setup lang='ts'>
    import { BlogCardBlogPost } from '#components'
    import { blogData } from '../utils/data/blogData'
</script>
<!--------@/pages/blog.vue----------------------------------------------------->
