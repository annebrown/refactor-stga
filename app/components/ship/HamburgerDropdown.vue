<template>
    <UDropdown :items="menuItems" mode="click">
      <UButton icon="i-heroicons-bars-3" color="gray" variant="link" aria-label="Menu" />
    </UDropdown>
  </template>
  
  <script setup>
  const menuItems = [
    [
      {
        label: 'Logo',
        slot: 'logo',
        avatar: { src: 'logo.svg', alt: 'Logo' }
      }
    ],
    [
      { label: 'Home', icon: 'i-heroicons-home', to: '/' },
      { label: 'About', icon: 'i-heroicons-information-circle', to: '/about' },
      { label: 'Services', icon: 'i-heroicons-briefcase', to: '/services' },
      { label: 'Contact', icon: 'i-heroicons-envelope', to: '/contact' }
    ],
    [
      { label: 'Blog', icon: 'i-heroicons-newspaper', to: '/blog' },
      { label: 'FAQ', icon: 'i-heroicons-question-mark-circle', to: '/faq' }
    ],
    [
      {
        label: 'Featured Image',
        slot: 'featured-image',
        avatar: { src: '/path/to/your/image.jpg', alt: 'Featured Image' }
      }
    ]
  ]
  </script>