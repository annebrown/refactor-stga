---
title: 'SPs'
description: 'Service Providers'
lastModified:: 2025-02-25
---

## Description

Rationale behind selection of SPs for the refactored site.  

## Version Control

GitHub is the version control SP of choice, because of its extensive array of available dev and collab tools and services. It provides enterprise-grade security and collab, even on its free plan.  GitHub is the dominant platform for version contol and as a result, has seamless integrations with most web hosting providers. It has custom automation workflows, simplifying Continuous Integration/Continuous Delivery.  GitHub is the central hub for open-source development and is an ideal choice for this project.  Oh, and it also provides version control.

## Web Host Provider

When choosing a web host, Vercel and Netlify were considered for their well-established support for server-side rendering and serverless functions.  

AWS was rejected because of its overly complicated hosting experience.  

`NuxtHub` was not a candidate because of its framework jail.  

CloudFlare, while it has great edge network capabilities (not needed for a small community site anyway), it has some contraints so does not offer as straightforward DX as Vercel and Netlify.  

While Netlify has superior support for fixing problem deployments, Vercel has a slight edge over Netlify for SSG and complex serverless functions.  