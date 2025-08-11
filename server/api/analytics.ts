// server/api/analytics.ts
import { defineEventHandler } from 'h3';
import { Analytics } from "@vercel/analytics/react";


export default defineEventHandler(async (event) => {
  const vercelToken = process.env.NUXT_VERCEL_TOKEN;
  const projectId = process.env.NUXT_VERCEL_PROJECT_ID;

  console.log('Fetching analytics for Project ID:', projectId); // <-- Add this
  
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

    // 💡 Add a log here to see what the Vercel API actually returns
    console.log('Vercel API Response:', response);

    // Ensure the response has the data you expect before returning
    if (response && response.pages) {
      return response.pages; // Return the 'pages' array directly
    }

    return []; // Return an empty array if no data is found
  } catch (error) {
    console.error('API call failed:', error);
    return { error: 'Failed to retrieve analytics data.' };
  }
});