//<--------@/nuxt.config.ts---------------------------------------------------->
export default defineNuxtConfig({
  // F Telemetry
  telemetry: false,

  devtools: { enabled: true },

  modules: [
      "@nuxt/ui", 
      "@nuxt/image",
      "@nuxt/fonts"
  ],

  srcDir: 'app/',

  css: ['assets/css/ship.css'],

  ui: {
    theme: {
      colors: ['primary', 'secondary', 'neutral', 'success', 'warning', 'error']
    }
  },

  compatibilityDate: '2025-04-05',
})
//<--------@/nuxt.config.ts---------------------------------------------------->