<!--------@/components/blog/CardBlogPost.vue----------------------------------->
<template><div>

<!-- Card -->
<div class="card-blog-post">

    <!-- Tags and Image -->
    <ULink
        to='${ post.blogURL }'
        class="relative block aspect-[37/22] w-full"
    >
        <!-- Tags -->
        <!-- <span 
            class="absolute px-4 py-2 right-1 bottom-1 z-20 
            inline-block  items-center justify-center 
            rounded-full bg-primary/80 text-sm font-semibold 
            capitalize text-black"
        >
            {{ post.tags[0] }}
        </span> -->

        <!-- Image -->
        <NuxtImage 
            src='${ post.image }'
            alt='${ post.alt }'
            width='${ post.width }'
            height='${ post.height }'
            class="w-full"/>

    </ULink> <!-- Tags and Image -->

    <!-- Title, Bi-Line and Date -->
    <div class="p-6 sm:p-8 md:px-6 md:py-8 lg:p-8 xl:px-5 xl:py-8 2xl:p-8">

        <!-- title -->
        <h3>
            <ULink
                to='${ post.blogURL }'
                class="mb-4 block text-xl font-bold text-black 
                    hover:text-primary sm:text-2xl"
                >
                {{ post.title }}
            </ULink>
        </h3>

        <!-- Bi-Line -->
        <p class="mb-6 border-b border-body-color border-opacity-10 pb-6 
            text-base font-medium text-black">
            {{ post.paragraph }}
        </p>

        <!-- Date -->
        <div class="flex items-center">
            <p class="text-xs text-black">{{ post.publishDate }}</p>
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
