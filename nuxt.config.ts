//<--------@/nuxt.config.ts---------------------------------------------------->
export default defineNuxtConfig({

    telemetry: false,   // F Telemetry

    srcDir: 'app/',

    css: ['~/assets/css/ship.css'],

    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxt/fonts",
        "nuxt-gtag"
    ],

    app: {
        head: {
            title: 'Save the Grove, Again',
            htmlAttrs: {
                lang: 'en',
            },
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            ],
            viewport: 'width=device-width, initial-scale=1, maximum-scale=1',

        }
    },

    ui: {
        theme: {
            colors: ['primary', 'secondary', 'neutral', 'tertiary', 'success', 'warning', 'error']
        }
    },

    gtag: {
        id: 'G-7X8MSSZ6DE'
    },

    devServer: {
        host: '192.168.4.45:3000',
        https: {
            key: '../../../../certs/192.168.5.555.key',
            cert: '../../../../certs/192.168.5.555.crt'
        }
    },

    devtools: { enabled: true },
    compatibilityDate: '2025-04-05',
})
//<--------@/nuxt.config.ts---------------------------------------------------->