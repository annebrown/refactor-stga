// server/api/analytics.ts
import { defineEventHandler } from 'h3';

export default defineEventHandler(async (event) => {
  const vercelToken = process.env.NUXT_VERCEL_TOKEN;
  const projectId = process.env.NUXT_VERCEL_PROJECT_ID;
  const teamId = process.env.NUXT_VERCEL_TEAM_ID; // Optional, only if your project is in a team

  // Check for required environment variables
  if (!vercelToken || !projectId) {
    return { error: 'Authentication details not configured.' };
  }

  try {
    const response = await $fetch(
      `https://api.vercel.com/v1/analytics/events/top-pages?projectId=${projectId}&teamId=${teamId}`,
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${vercelToken}`,
        },
      }
    );
    // Vercel returns a data object with a 'pages' array. You can return the entire object
    // or just the part you need.
    return response;
  } catch (error) {
    // Log the error to Vercel's console for debugging
    console.error('Failed to retrieve Vercel analytics:', error);
    // Return a user-friendly error to the client
    return { error: 'Failed to retrieve analytics data.' };
  }
});