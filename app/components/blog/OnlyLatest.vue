<!--------@/components/blog/OnlyLatest.vue------------------------------------->
<template><div>

<!-- Latest News -->
<div class="w-full container object-center">

    <!-- Title -->
    <h2 class="p-5 pt-14 pb-10 text-4xl text-center font-bold">
        Latest News
    </h2>

    <h2>Cards</h2>

    <!-- <BlogCardPost
        v-for="(post, index) in blogData.slice(-3)"
        :key="index" 
        :post="post"
        class="flex-1"
    /> -->


    <h2>Default</h2>
    <!-- Last 3 Posts -->
    <BlogCardBlogPost
        v-for="(post, index) in blogData.slice(-3)"
        :key="index" 
        :post="post"
        class="flex-1"
    />




</div><!-- Latest News -->

</div></template>

<script lang="ts" setup>
    import { BlogCardBlogPost } from '#components'
    // import { BlogCardPost } from '#components'
    import { blogData } from '../../utils/data/blogData'
</script>
<!--------@/components/blog/OnlyLatest.vue------------------------------------->