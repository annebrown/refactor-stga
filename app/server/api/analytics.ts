import { defineEventHandler } from 'h3'

export default defineEventHandler(async (event) => {
  const token = process.env.NUXT_VERCEL_TOKEN
  const projectId = process.env.NUXT_VERCEL_PROJECT_ID

  if (!token || !projectId) {
    return { error: 'Vercel token or project ID not set in environment.' }
  }

  const res = await fetch(
    `https://api.vercel.com/v6/analytics/pages?projectId=${projectId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  )

  if (!res.ok) {
    return { error: `Vercel API error: ${res.statusText}` }
  }

  const data = await res.json()
  // data.pages is an array of { path, visitors, ... }
  return { pages: data.pages || [] }
})