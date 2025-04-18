<!--------@/components/blog/OnlyLatest.vue------------------------------------->
<template><div>

<!-- Latest News -->
<UContainer>

    <!-- Title -->
    <h1>Latest News</h1>

    <!-- Last 3 Posts -->
    <div class="grid gap-x-8 gap-y-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3
        pb-10 place-content-stretch">

        <BlogCardBlogPost
            v-for="post in latestPosts" 
            :key="post.id"
            :post="post"
            class="flex-1 shadow-xl bg-white dark:bg-(--color-primary-900) rounded-lg"
        />
    </div>

</UContainer><!-- Latest News -->

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