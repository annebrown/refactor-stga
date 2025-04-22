<!--------@/components/blog/OnlyLatest.vue------------------------------------->
<template><div>

<!-- Latest News -->
<div class="mx-1 sm:mx-2 pb-10">

    <!-- Title -->
    <h1>Latest News</h1>

    <!-- Last 3 Posts -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-8
        mx-1 sm:mx-2">


        <BlogCardBlogPost
            v-for="post in latestPosts" 
            :key="post.id"
            :post="post"
            class="flex-1 shadow-lg dark:shadow-sm shadow-black/25 dark:shadow-white/50 shadow-md rounded-2xl bg-(--ui-bg)"
        />
        <!-- stga-button shadow-lg dark:shadow-sm -->
        <!-- shadow-black/25 dark:shadow-white/50 shadow-md rounded-2xl bg-(--ui-bg)" -->

    </div>

</div><!-- Latest News -->

</div></template>

<script lang="ts" setup>
    import { BlogCardBlogPost } from '#components'
    import { blogData } from '../../assets/data/blog/blogData'
    const latestPosts = computed(() => {
        return [...blogData]
        .sort((a, b) => b.id - a.id)
        .slice(0, 3)
    })
</script>
<!--------@/components/blog/OnlyLatest.vue------------------------------------->