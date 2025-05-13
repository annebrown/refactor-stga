<!--------@/components/committee/committeeMenu.vue----------------------------->
<template><div>

   <UButtonGroup>
        <UButton to="/committee"> Home </UButton>
        <UButton to="/committee/analytics"> Analytics </UButton>
        <UButton to="/admin"> Admin </UButton>
        <UButton to="/posts"> Authors </UButton>
    </UButtonGroup>

</div></template>
<script setup lang="ts">
// import type { DropdownMenuItem } from '@nuxt/ui'

const items: DropdownMenuItem[] = [
  {
    label: 'Team',
    icon: 'i-lucide-users'
  },
  {
    label: 'Invite users',
    icon: 'i-lucide-user-plus',
    children: [
      {
        label: 'Invite by email',
        icon: 'i-lucide-send-horizontal'
      },
      {
        label: 'Invite by link',
        icon: 'i-lucide-link'
      }
    ]
  },
  {
    label: 'New team',
    icon: 'i-lucide-plus'
  }
]
</script>
<!--------@/components/committee/committeeMenu.vue----------------------------->
