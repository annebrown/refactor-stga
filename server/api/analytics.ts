// server/api/analytics.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {

  const vercelToken = process.env.NUXT_VERCEL_TOKEN;
  const projectId = process.env.NUXT_VERCEL_PROJECT_ID; // You'll need to find this in your project settings

  if (!vercelToken || !projectId) {
    return { error: 'Authentication details not configured.' };
  }

  try {
    const response = await $fetch(
      `https://api.vercel.com/v1/analytics/events?projectId=${projectId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${vercelToken}`,
        },
      }
    );
    // You'll need to parse or transform the data here to fit your needs
    return response;
  } catch (error) {
    // Handle API errors gracefully
    return { error: 'Failed to retrieve analytics data.' };
  }
});