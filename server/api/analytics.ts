// server/api/analytics.ts
import { defineEventHandler } from 'h3';
import { Analytics } from "@vercel/analytics/react";


export default defineEventHandler(async (event) => {
  const vercelToken = process.env.NUXT_VERCEL_TOKEN;
  const projectId = process.env.NUXT_VERCEL_PROJECT_ID;

  console.log('Fetching analytics for Project ID:', projectId); // <-- Add this
  
  if (!vercelToken || !projectId) {
    console.error('Vercel token or project ID is missing!');
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
    console.log('Successfully fetched analytics data!'); // <-- Add this
    return response;
  } catch (error) {
    console.error('Failed to retrieve analytics data from Vercel:', error); // <-- Add this
    return { error: 'Failed to retrieve analytics data.' };
  }
});