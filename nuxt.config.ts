//<--------@/nuxt.config.ts---------------------------------------------------->

export default defineNuxtConfig({

    telemetry: false, // F Telemetry

    devtools: { enabled: true },

    modules: ["@nuxt/ui", "@nuxt/image"],

    ui: { // Expose UI components globally
     global: true
    },

    srcDir: 'app/',




    compatibilityDate: "2025-02-25",
})
//<--------@/nuxt.config.ts---------------------------------------------------->