<!--------@/app/layouts/blog.vue----------------------------------------------->
<template><div><!-- Layout (Single Root Element) -->

<!-- Blog Post Layout -->
<UCard 
    variant="link"
    class="mb-4 rounded-4xl shadow-lg bg-(--ui-color-news)"
>

    <!-- Blog Header -->
    <template #header v-if="currentBlogMeta" class="">
    
        <!-- Title -->
        <h1>{{ currentBlogMeta.title }}</h1>

        <!-- Bi-Line -->
        <p class="text-lg font-bold">{{ currentBlogMeta.paragraph }}</p>
        
        <!-- Date & Tag -->
        <div class="w-full py-5 flex flex-row">

                <!-- Publication Date -->
            <div class="">
                {{ formatDate(currentBlogMeta.publishDate) }}
            </div>

                <!-- Spacer -->
            <div class="grow">&nbsp;</div>

                <!-- Tag -->
            <div class="flex-0">
                <UButton 
                    class="z-2 p-2 inline-block rounded-3xl  uppercase shadow-none dark:shadow-none text-white"
                    variant="solid">
                    {{ currentBlogMeta.tags[0] }}
                </UButton>
            </div>

        </div><!-- Date & Tag -->

    </template><!-- Blog Meta -->

    <!-- Blog Content -->
    <div class="bg-(--ui-bg) rounded-xl p-8">
        <div class="m-0 p-0">
            <slot />
        </div>
    </div>

    <!-- Page Signature -->
    <template #footer class="rounded-3xl">
        <ShipPageSignature />
    </template>

</UCard>

</div></template>

<script setup lang="ts">
    import { blogData } from '~/assets/data/blog/blogData';
    import { computed } from 'vue';

    const route = useRoute();

    const currentBlogMeta = computed(() => {
        return blogData.find(post => post.blogURL === route.path);
    });

    // Format date helper function
    const formatDate = (dateString: string) => {
        
        if (!dateString) return '';

        const date = new Date(dateString);

        return new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(date);
    };
</script>
<!--------@/app/layouts/blog.vue----------------------------------------------->