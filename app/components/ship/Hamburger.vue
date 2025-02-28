<!--------@/app/components/ship/Hamburger.vue---------------------------------->
<template><div>

    <!-- Hamburger Dropdown -->
    <div class="">

        <UDropdown 
            :items="items" 
            :popper="{ placement: 'bottom-start' }"
        >
            <!-- Hamburger Dropdown -->
            <UButton icon="i-heroicons-bars-3" color="gray" variant="ghost" aria-label="Menu" />
        </UDropdown>

    </div><!-- Dropdown -->

</div></template>

<script setup lang="ts">
    import { mainMenuData } from '@/utils/data/MainMenu'


    const items = [
        
        [
            { type: 'logo', src: '/logo.svg', label: 'XXXXXXXXXX', alt: 'Logo' }
        ],

        [
            {
                label: 'ProfileFFFFFF',
                avatar: {
                    src: 'https://avatars.githubusercontent.com/u/739984?v=4'
                }
            },
        ], 
        
        [
            {
                label: 'Edit',
                icon: 'i-heroicons-pencil-square-20-solid',
                shortcuts: ['E'],
                click: () => {
                    console.log('Edit')
                }
            }, 
            
            {
                label: 'Duplicate',
                icon: 'i-heroicons-document-duplicate-20-solid',
                shortcuts: ['D'],
                disabled: true
            }
        ],

        [
            {
                label: 'Archive',
                icon: 'i-heroicons-archive-box-20-solid'
            }, 
            {
                label: 'Move',
                icon: 'i-heroicons-arrow-right-circle-20-solid'
            }
        ], 
        
        [
            {
                label: 'Delete',
                icon: 'i-heroicons-trash-20-solid',
                shortcuts: ['⌘', 'D']
            }
        ]
    ]

    const menuItems = [
        [
            { type: 'logo', src: '/path/to/your/logo.png', alt: 'Logo' }
        ],
        [
            { type: 'link', label: 'Home', icon: 'i-heroicons-home', to: '/' },
            { type: 'link', label: 'About', icon: 'i-heroicons-information-circle', to: '/about' },
            { type: 'link', label: 'Services', icon: 'i-heroicons-briefcase', to: '/services' },
            { type: 'link', label: 'Contact', icon: 'i-heroicons-envelope', to: '/contact' }
        ],
        [
            { type: 'divider' }
        ],
        [
            { type: 'link', label: 'Blog', icon: 'i-heroicons-newspaper', to: '/blog' },
            { type: 'link', label: 'FAQ', icon: 'i-heroicons-question-mark-circle', to: '/faq' }
        ],
        [
            { type: 'image', src: '/path/to/your/image.jpg', alt: 'Featured Image' }
        ]
    ]

</script>
<!--------@/app/components/ship/Hamburger.vue---------------------------------->

<!-- Original Dropdown from Nuxt AI ------------------------------------------->
    <!-- <div class="md:hidden">
        <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
            <UButton color="white" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
        </UDropdown>
    </div> -->

<!-- Original Dropdown from Nuxt AI-------------------------------------------->

    <!-- <div class="sm:hidden">

        <UDropdown :items="menuItems" mode="click">
            
            <UButton icon="i-heroicons-bars-3" color="gray" variant="ghost" aria-label="Menu" />

            <template #item="{ item }">

                <div v-if="item.type === 'logo'" class="p-2">
                    <img :src="item.src" :alt="item.alt" class="h-8 w-auto" />
                </div>

                <UVerticalNavigationItem v-else-if="item.type === 'link'" v-bind="item" />

                <div v-else-if="item.type === 'divider'" class="my-2 border-t border-gray-200 dark:border-gray-700" />

                <div v-else-if="item.type === 'image'" class="p-2">
                    <img :src="item.src" :alt="item.alt" class="w-full h-auto rounded" />
                </div>

            </template>

        </UDropdown>

    </div> -->