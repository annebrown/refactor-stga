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

  // compatibilityDate: "2025-02-25",
  css: ['assets/css/ship.css'],

  compatibilityDate: '2025-04-05',
})
//<--------@/nuxt.config.ts---------------------------------------------------->