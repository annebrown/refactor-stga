//<--------@/nuxt.config.ts---------------------------------------------------->

export default defineNuxtConfig({

    telemetry: false, // F Telemetry

    devtools: { enabled: true },

    modules: [
        "@nuxt/ui", 
        "@nuxt/image",
        '@nuxt/fonts',
    
    ],


    fonts: {
        provider: 'google'
    },



    ui: { // Expose UI components globally
     global: true
    },

    srcDir: 'app/',

    css: ['assets/css/ship.css'],


    compatibilityDate: "2025-02-25",
})
//<--------@/nuxt.config.ts---------------------------------------------------->