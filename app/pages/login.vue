<!--------@/pages/login.vue---------------------------------------------------->
<template><div>
<NuxtLayout name="pages">

<h2>Login</h2>

  <form @submit.prevent="login">
    <input v-model="credentials.email" type="email" placeholder="Email" />
    <input v-model="credentials.password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
  </form>

</NuxtLayout>
</div></template>

<script setup lang='ts'>
    definePageMeta({ 
        title: 'Login', 
    })

    const { loggedIn, user, fetch: refreshSession } = useUserSession()

    const credentials = reactive({
        email: '',
        password: '',
    })

    async function login() {
        $fetch('/api/login', {
            method: 'POST',
            body: credentials
        })
        .then(async () => {
            // Refresh the session on client-side and redirect to the home page
            await refreshSession()
            await navigateTo('/')
        })
        .catch(() => alert('Bad credentials'))
    }
</script>
<!--------@/pages/login.vue---------------------------------------------------->