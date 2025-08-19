<!--------@/pages/committee/index.vue------------------------------------------>
<script setup lang='ts'>
const props = defineProps(['menuData'])
</script>
<!----------------------------------------------------------------------------->
<template><div>
    <div class="w-fit py-2 px-4 mx-auto mb-8 bg-(--ui-bg) rounded-sm ring-3 ring-(--ui-secondary-4) dark:ring-(--ui-primary-2) shadow-black/25 shadow-lg">
        <UNavigationMenu
            :items="props.menuData"
            ui="{
                root: '',

            }"
            variant="link"
            color="primary"
            orientation="vertical" 
            class="mainmenu m-0 p-0"
            root=""
            active
                :ui="{
                link: 'active:text-(--color-primary-800) hover:text-(--ui-primary-600) m-0 px-2',
                label: 'text-lg',
                // linkLeadingIcon: 'size-8'

            }"
        />
    </div>
</div></template>
<!----------------------------------------------------------------------------->
