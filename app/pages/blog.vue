<!--------@/pages/blog.vue----------------------------------------------------->
<template><div>

    <!-- All Blogs -->
    <div class="w-full container m-0 p-0 object-center  mx-auto bg-(--ui-primary)">

        <!-- Title -->
        <h1>Blog Posts</h1>

        <div class="flex flex-row flex-wrap gap-2 justify-normal content-center">
            <BlogCardBlogPost
                v-for="(post, index) in blogData"
                :key="index" 
                :post="post"
                class="flex-1"
            />
        </div>
   
    </div><!-- All Blogs -->

    <ShipPageSignature />
   
</div></template>

<script setup lang='ts'>
    import { BlogCardBlogPost } from '#components'
    import { blogData } from '../utils/data/blogData'
</script>
<!--------@/pages/blog.vue----------------------------------------------------->
