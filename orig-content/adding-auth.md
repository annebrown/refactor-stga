---
title: "Auth0"
description: "Adding Authn"
lastModified: "2025-02-25"
---

## Install nuxt-auth-utils

```bash
npx nuxi@latest module add auth-utils
```

## .env

```env
NUXT_OAUTH_GITHUB_CLIENT_ID=...
NUXT_OAUTH_GITHUB_CLIENT_SECRET=...
NUXT_SESSION_PASSWORD=a-random-password-with-at-least-32-characters
```

## zod

```bash
pnpm i zod
```

## Login API Route

`/server/api/login`:

```ts
import { z } from 'zod'

const bodySchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
})

export default defineEventHandler(async (event) => {
  const { email, password } = await readValidatedBody(event, bodySchema.parse)

  if (email === 'admin@admin.com' && password === 'iamtheadmin') {
    // set the user session in the cookie
    // this server util is auto-imported by the auth-utils module
    await setUserSession(event, {
      user: {
        name: 'John Doe'
      }
    })
    return {}
  }
  throw createError({
    statusCode: 401,
    message: 'Bad credentials'
  })
})

```

## Login Page

`/pages/login.vue`:

```vue
<template>
    <form @submit.prevent="login">
        <input v-model="credentials.email" type="email" placeholder="Email" />
        <input v-model="credentials.password" type="password" placeholder="Password" />
        <button type="submit">Login</button>
    </form>
</template>

<script setup lang="ts">
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
```

## Protected Routes

`/server/api/committee.get.ts`:

```ts
export default defineEventHandler(async (event) => {
  // 401 if not authenticated
  const { user } = await requireUserSession(event)

  return {}
})
```

## Usage

```vue
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
```
