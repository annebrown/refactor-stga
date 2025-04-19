<!--------@/app/layouts/blog.vue----------------------------------------------->
<template><div><!-- Layout (Single Root Element) -->

<!-- Blog Post Layout -->
<UCard 
variant="link"
    :ui="{ 
        header: 'm-0 p-0 flex items-start', 
        footer: 'm-0 p-0 flex items-end',
        body: 'm-0 p-0' 
    }"
    class="mb-4 rounded-4xl bg-(--ui-secondary-3) dark:bg-(--ui-primary-2)"
>

    <!-- CARD HEADER -->
    <template #header v-if="currentBlogMeta">
    
        <!-- Blog Meta -->
        <div class="mt-4 mx-auto">

            <!-- Title -->
            <p class="pt-8 text-4xl font-extrabold !text-center">
                {{ currentBlogMeta.title }}
            </p>

            <!-- Bi-Line -->
            <p class="my-5 text-xl font-bold !text-center">
                {{ currentBlogMeta.paragraph }}
            </p>
            
            <!-- Date & Tag -->
            <p class="w-full py-5 flex flex-row">

                <!-- Publication Date -->
                <span class="font-bold">
                    {{ formatDate(currentBlogMeta.publishDate) }}
                </span>

                    <!-- Spacer -->
                <span class="grow">&nbsp;</span>

                    <!-- Tag -->
                <span class="flex-0">
                    <UButton 
                        class="z-2 p-2 inline-block rounded-3xl  uppercase shadow-none dark:shadow-none text-white"
                        variant="solid">
                        {{ currentBlogMeta.tags[0] }}
                    </UButton>
                </span>

            </p><!-- Date & Tag -->

        </div> <!-- Blog Meta -->

    </template> <!-- CARD HEADER -->

    <!-- CARD BODY -->
    <div class="bg-(--ui-bg) rounded-xl p-8">
        <div class="m-0 p-0">
            <slot />
        </div>
    </div>

    <!-- CARD FOOTER -->
    <template #footer class="">
        <!-- Page Signature -->
        <ShipPageSignature class="m-0 mx-auto p-0 pb-4" />
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