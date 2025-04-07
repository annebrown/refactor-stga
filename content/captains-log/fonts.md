---
title: Fonts
description: STGA Fonts
lastModified:: 2025-02-25
---

## @Nuxt/Fonts Module

Install the `@Nuxt/Fonts` module for custom font config and optimization:

```bash
pnpm i @nuxt/fonts
```

Add module to `nuxt.config.ts`:

```ts
  modules: [
    // ...
    '@nuxt/fonts',
  ]
```

Ensure that `.data` is present in `.gitignore`.

## Usage

### CSS

```css
font-family: 'Some Font Name', some-variation ... ;
``` 

### TailwindCSS

`tailwind.config.ts`:

```ts
export default {
  theme: {
    extend: {
      fontFamily: {
        custom: ['Roboto'],
      },
    },
  },
}
```

Tailwind classes:

```css
sm:font-(family-name: --font-main-menu-mobile)  
font-['Some_Font_Name']
```

Tailwind theme:

```css
@theme {
  --font-main-menu-mobile: "Roboto", "sans-serif"; 
}
```

then Tailwind classes:

```css
sm:font-main-menu-mobile
```

## Providers

### Config

Explicitly listing required providers improves efficiency by disabling all other providers.  In `nuxt.config.ts`:

```ts
export default defineNuxtConfig({
    ...
    fonts: {
        google: {},
        local: {},
    }
})
```

### Local

`local` deeply scans `public/` dirs in project and layers, for `.tff`, `.woff`, `.woff2`, `.eot` and `.otf` files.

Stored fonts in the `public/fonts/` dir.

Configured fonts in `typography.css`:

```css
/*--------@/app/assets/css/typography.css-------------------------------------->
/******************************************************************************/
/*
/* Typography
/* 
/******************************************************************************/
@font-face {
    font-family: 'Bebas Neue';
    src: url('/fonts/BebasNeue-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}
@font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-VariableFont_opsz,wght.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

@theme {
    --font-sans: 'Inter-VariableFont_opsz', sans-serif;
}
/******************************************************************************/
/* Bow
/******************************************************************************/
.stga-mainmenu { @apply text-2xl font-extrabold;
    font-family: 'Bebas Neue', sans-serif;
}
/******************************************************************************/
/* Transom
/******************************************************************************/
/*--------@/app/assets/css/typography.css-------------------------------------->
```
