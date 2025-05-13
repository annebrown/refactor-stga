<!--------@/app/layouts/blog.vue----------------------------------------------->
<template><div><!-- Layout (Single Root Element) -->

<!-- Blog Post Layout -->
<UCard 
    variant="soft"
    class="w-full rounded-4xl bg-(--ui-bg) ring-transparent divide-transparent"
    :ui="{ 
        header: 'w-full m-0 mx-auto pt-4 px-0 flex items-start', 
        footer: 'm-0 p pt-4 flex items-end',
        body: '' 
    }"
>

    <!-- CARD HEADER -->
    <template #header v-if="currentBlogMeta">
    
        <!-- Blog Meta -->
        <div class="mt-4 mx-auto">

            <!-- Image -->
            <img
                :src="`${ currentBlogMeta.image }`"
                :alt="`${ currentBlogMeta.alt }`"
                :width="`${ currentBlogMeta.width }`"
                :height="`${ currentBlogMeta.height }`"
                class="my-10 w-full h-full object-cover object-top
                    rounded-md ring-3 ring-(--ui-secondary-2) dark:ring-(--ui-primary-2) shadow-black shadow-md"
            />

            <!-- Title -->
            <p class="mt-10 mb-2 text-4xl font-extrabold text-(--ui-primary)">
                {{ currentBlogMeta.title }}
            </p>

            <!-- Bi-Line -->
            <p class="mb-10 text-xl font-bold">
                {{ currentBlogMeta.paragraph }}
            </p>
            
            <!-- Date & Tag -->
            <p class="w-full flex flex-row">

                <!-- Publication Date -->
                <span class="font-bold text-(--ui-primary)">
                    {{ formatDate(currentBlogMeta.publishDate) }}
                </span>

                <!-- Spacer -->
                <span class="grow">&nbsp;</span>

                <!-- Tag -->
                <span class="flex-0">

                    <UButton 
                        class="stga-button-tag -mt-5">
                        {{ currentBlogMeta.tags[0] }}
                    </UButton>
                    
                </span>

            </p><!-- Date & Tag -->

        </div> <!-- Blog Meta -->

    </template> <!-- CARD HEADER -->

    <!-- <USeparator 
        class="w-full mt-4 mb-10 mx-auto border-t-[--ui-secondary-2] rounded shadow-black shadow-sm" 
        size="xl"

    /> -->

    <!-- CARD BODY -->
    <div class="bg-(--ui-bg)">

        <div class="m-0 p-0">
            <slot />
        </div>

    </div>

    <!-- CARD FOOTER -->
    <template #footer class="">
        
        <!-- Page Signature -->
        <ShipPageSignature class="mx-auto pb-2 text-center" />

    </template>

</UCard><!-- Blog Post Layout -->

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