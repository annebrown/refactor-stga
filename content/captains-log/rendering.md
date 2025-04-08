---
title: 'Rendering'
description: 'Rendering Strategy'
lastModified:: 2025-02-25
---

## Description

Notes and decisions on rendering strategies, including client-server code separation client-side, server-side, universal, incremental and edge rendering and static site generation.

## Client/Server Code Separation

Nuxt is a full stack framework that provides tools to control when code is executed on the server, the browser, or the edge server.  However Nuxt seamlessly handles much of the complexity of client/server code separation.  In most cases, special config is not required for this site.  

## Server-Side and Client-Side Renderiong

By default, Nuxt deploys routes with SSR. On client request, Nuxt executes the code on the server and sends the fully rendered page to the client. 

After loading the server-rendered page, the browser runs the same code on the client-side, `hydration`, thus enabling interactivity.

## Edge-Side Rendering and Static Site Generation

Vercel's ESR mechanism caches the app's static assets, like CSS, HTML and JavaScript and renders the app on the server physicaly nearest to the client.

Nuxt can be configured to leverage Versel's ESR and statically generate Nuxt routes at build time (thus providing SSG).

To statically generate a route at build time, then cache it permanently at the Edge until next build time, add  `prerender` to `routeRules` in `nuxt.config.ts`:

```ts
  routeRules: {
    '/blog/**': { prerender: true },
  },
```

Home page, `/`, is automatically prerendered at build time, by default.

## Incremental Static Regeneration

With ISR, after a Nuxt site is deployed, pages are rendered on-demand, then cached until the next deployment, or after a configured timeframe.  This means content changes are made available, without redeploying.    

ISR is enabled and configured by adding `routeRules` to `nuxt.config.tx`.

This site doesn't need ISR because it doesn't change often enough to require real-time updates and is currently being rebuilt and redeployed after each update.
