//<--------@/nuxt.config.ts---------------------------------------------------->
export default defineNuxtConfig({
  // F Telemetry
  telemetry: false,

  srcDir: 'app/',

  css: ['assets/css/ship.css'],

  modules: [
      "@nuxt/ui", 
      "@nuxt/image",
      "@nuxt/fonts"
  ],

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'neutral', 'tertiary', 'success', 'warning', 'error']
    }
  },

  devtools: { enabled: false },
  compatibilityDate: '2025-04-05',
})
//<--------@/nuxt.config.ts---------------------------------------------------->