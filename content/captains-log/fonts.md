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

Store local fonts in the project's or base layer's `public/fonts/` dir.

`local` deeply scans `public/` dirs in project and layers, for `.tff`, `.woff`, `.woff2`, `.eot` and `.otf` files.
