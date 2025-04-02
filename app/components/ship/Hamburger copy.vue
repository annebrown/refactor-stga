<!--------@/app/components/ship/Hamburger.vue---------------------------------->
<template><div>

    <!-- Hamburger Icon & Dropdown -->
    <div

        class="z-80 relative">



        
        <UDropdown 
            :items="items" 
            :popper="{ placement: 'bottom-start' }"
            class="z-2000"
        >

            <!-- Hamburger Icon -->
            <UIcon name="i-heroicons-bars-3" class="text-3xl font-bold" />

        </UDropdown>

    </div><!-- Hamburger Icon & Dropdown -->

</div></template>

<script setup lang="ts">
    // Main Menu Array
    import { mainMenuData } from '@/utils/data/MainMenu'

    const items = [
        
        [
            { type: 'logo', src: '/logo.svg', label: 'STGA', alt: 'Logo - Trees and water inside a circle, with text: Save the Grove Again' }
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
                label: 'About',
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