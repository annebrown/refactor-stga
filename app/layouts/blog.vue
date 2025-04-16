<!--------@/app/layouts/blog.vue----------------------------------------------->
<template><div><!-- Layout (Single Root Element) -->

<!-- Blog Post -->
<UCard 
    variant="subtle"
    class="mx-auto my-8 p-6 rounded-3xl shadow-lg max-w-2xl"
>

    <!-- Blog Meta -->
    <template #header v-if="currentBlogMeta" class="rounded-3xl">
    
        <!-- Title -->
        <h1 class="!text-left">{{ currentBlogMeta.title }}</h1>

        <!-- Bi-Line -->
        <p class="text-2xl">{{ currentBlogMeta.paragraph }}</p>
        
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
                    class="z-2 p-2 inline-block rounded-3xl  uppercase"
                    variant="solid">
                    {{ currentBlogMeta.tags[0] }}
                </UButton>
            </div>

        </div><!-- Date & Tag -->

    </template><!-- Blog Meta -->

    <!-- Blog Content -->
    <div class="pt-8">
        <slot />
    </div>

    <ShipPageSignature class="py-8 text-(--ui-secondary)"/>

</UCard>

</div></template>

<script setup lang="ts">
    import { blogData } from '@/utils/data/blogData';
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