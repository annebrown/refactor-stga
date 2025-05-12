import { createBackend } from 'decap-cms-server';

export default defineEventHandler(async (event) => {
  const backend = await createBackend({
    rootFolder: 'content', 
  });
  return backend(event.req, event.res);
});