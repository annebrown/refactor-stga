<!--------@/components/blog/CardBlogPost.vue----------------------------------->
<template><div>

<ULink :to="`${ post.blogURL }`" class="">

    <!-- Card -->
    <div class="">

        <!-- Header - Image & Tags-->
        <div class="relative">

            <!-- Image -->
            <img
                :src="`${ post.image }`"
                :alt="`${ post.alt }`"
                :width="`${ post.width }`"
                :height="`${ post.height }`"
                class="w-full h-full pt-4 object-cover object-top"
            />
     
            <!-- Tags -->
             <div class="">
                <UButton 
                    class="z-2 absolute -mr-3 p-2 right-2 bottom-2 uppercase"
                    :ui="{ base: 'rounded-3xl text-white shadow-none dark:shadow-none' }"
                    >
                    {{ post.tags[0] }}
                </UButton>
            </div>
        </div>

        <!-- Title & Bi-LIne-->
        <div class="">

            <!-- title -->
            <h3 class="p-6 pb-2 text-center text-2xl/6 font-extrabold text-(--ui-text)">
                {{ post.title }}
            </h3>

            <!-- Bi-Line -->
            <p class="p-6 pt-2 leading-6 text-left text-(--ui-text)">
                {{ post.paragraph }}
            </p>

        </div>

        <!-- Publish Date -->
        <div class="p-4 text-(--ui-text)">
            <p class="">{{ post.publishDate }}</p>
        </div>

    </div><!-- Card -->

</ULink>

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