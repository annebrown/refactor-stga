<!--------@/pages/committee/index.vue------------------------------------------>
<template><div>

<div class="text-center px-20">

    <h1>Welcome {{ user.name }}</h1>
    <button @click="logout">Logout</button>

    

</div>

</div></template>
<script setup lang='ts'>
    definePageMeta({ 
        title: 'Committee', 
        middleware: ['authenticated'],
    })  
  
    const { user, clear: clearSession } = useUserSession()

    async function logout() {
        await clearSession()
        await navigateTo('/login')
    }
    </script>
<!--------@/pages/committee/index.vue------------------------------------------>