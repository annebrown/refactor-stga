<!--------@/components/blog/CardBlogPost.vue----------------------------------->
<template><div>

<!-- Card -->
<div class="card-blog-post">

    <!-- Tags and Image -->
    <ULink
        :to="`${ post.blogURL }`"
        class="relative block aspect-[37/22] w-full"
    >
        <!-- Tags -->

        <UButton 
            class="absolute p-4 right-2 bottom-2 z-20 
            inline-block rounded-xl text-3xl capitalize"
            variant="solid">
            {{ post.tags[0] }}
        </UButton>


        <!-- Image -->
        <img
            :src="`${ post.image }`"
            :alt="`${ post.alt }`"
            :width="`${ post.width }`"
            :height="`${ post.height }`"
            class="rounded-lg"/>

    </ULink> <!-- Tags and Image -->

    <!-- Title, Bi-Line and Date -->
    <div class="p-6">

        <!-- title -->
        <h3>
            <ULink
                :to="`${ post.blogURL }`"
                class="mb-4"
                >
                {{ post.title }}
            </ULink>
        </h3>

        <!-- Bi-Line -->
        <p class="">
            {{ post.paragraph }}
        </p>

        <!-- Date -->
        <div class="flex items-center">
            <p class="">{{ post.publishDate }}</p>
        </div>
        
    </div><!-- Title, Bi-Line and Date -->

</div><!-- Card -->

</div></template>

<script lang="ts" setup>
    const props = defineProps({
        post: {
            type: Object,
            required: true
        }
    }) 
</script>
<!--------@/components/blog/CardBlogPost.vue----------------------------------->