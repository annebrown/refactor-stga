// server/api/analytics.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const token = process.env.NUXT_VERCEL_TOKEN;
  const projectId = process.env.NUXT_VERCEL_PROJECT_ID;
  const teamId = process.env.NUXT_VERCEL_TEAM_ID; // Your team ID here

  if (!token || !projectId) {
    return { error: 'Vercel token or project ID not set in environment.' };
  }

  // Add the teamId parameter
  const res = await fetch(
    `https://api.vercel.com/v1/analytics/events/top-pages?projectId=${projectId}&teamId=${teamId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!res.ok) {
    return { error: `Vercel API error: ${res.statusText}` };
  }

  const data = await res.json();
  return { pages: data.pages || [] };
});