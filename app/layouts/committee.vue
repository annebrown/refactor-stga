<!--------@/pages/committee/index.vue------------------------------------------>
<script setup lang='ts'>
    import type { NavigationMenuItem } from '@nuxt/ui'

    const menuData = ref<NavigationMenuItem[]>([
    {
        label: 'Committee',
        icon: 'i-streamline-ultimate:team-meeting',
        to: '/committee',
        defaultOpen: true,
        children: [
            {
                label: 'Analytics',
                icon: 'i-uil-analytics',
                to: '/committee/analytics',
                children: [
                    {
                        label: 'Dashboard',
                        icon: 'i-mingcute:dashboard-fill',
                        to: '/committee/analytics/dash'
                    },
                    {
                        label: 'Table',
                        icon: 'i-streamline:send-email-remix',
                        to: '/committee/analytics/display-table'
                    },
                    {
                        label: 'Last Ditch',
                        icon: 'i-proicons:beaker',
                        to: '/committee/analytics/last-ditch'
                    },
                ]
            },
            {
                label: 'Flyer',
                icon: 'i-streamline:send-email-remix',
                to: '/committee/flyer'
            },
            {
                label: 'Test Page',
                icon: 'i-proicons:beaker',
                to: '/committee/test-page'
            },

        ]
    },
    {
        label: 'Code',
        icon: 'i-simple-icons-github',
        to: 'https://github.com/annebrown/refactor-stga',
        target: '_blank'
    }
    ])    
    const route = useRoute()
    const routeMeta = computed(() => route.meta )
</script>
<!----------------------------------------------------------------------------->
<template><div>
    <div  class="flex flex-row">
        <div class="w-fit">
            <PagesMenu :menuData="menuData" class="mt-12 -ml-7 "/>
        </div>
        <div class="grow px-8">
            <!-- Title -->
            <div class="mt-5 text-5xl font-extrabold text-center text-(--ui-primary)">
                Committee
            </div>
            <h2>
                {{ routeMeta.title }}
            </h2>
            <slot />
        </div>
    </div>
</div></template>
<!----------------------------------------------------------------------------->