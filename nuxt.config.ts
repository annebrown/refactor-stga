//<--------@/nuxt.config.ts---------------------------------------------------->
export default defineNuxtConfig({

    telemetry: false,   // F Telemetry

    srcDir: 'app/',

    css: ['~/assets/css/ship.css'],

    modules: [
        "@nuxt/ui",
        "@nuxt/image",
        "@nuxt/fonts",
        "nuxt-gtag",
        "@nuxt/content"
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
        host: '192.168.4.45',
        https: {
            key: '../../../../certs/192.168.5.555.key',
            cert: '../../../../certs/192.168.5.555.crt'
        }
    }, // build

    content: {

        // toc: {
        //     depth: 2
        // },

        build: {

            markdown: {

                highlight: {

                    theme: {
                        default: 'github-light',
                        dark: 'github-dark'
                    },

                    langs: [
                        'console',
                        'css',
                        'diff',
                        'properties',
                        'go',
                        'html',
                        'ini',
                        'java',
                        'json',
                        'js',
                        'log',
                        'md',
                        'mdc',
                        'mermaid',
                        'perl',
                        'regexp',
                        'shell',
                        'ts',
                        'tsx',
                        'vue',
                        'yaml'
                    ],

                } // highlight

            } // markdown
            
        }, // build

        // components: [
            // ~/calendar-module/components/event/Update.vue => <EventUpdate />
            // { path: '~/calendar-module/components' },
        
            // ~/user-module/components/account/UserDeleteDialog.vue => <UserDeleteDialog />
            // { path: '~/user-module/components/', pathPrefix: false },
        
            // ~/components/special-components/Btn.vue => <SpecialBtn />
            // { path: '~/components/special-components', prefix: 'Special' },
        
            // It's important that this comes last if you have overrides you wish to apply
            // to sub-directories of `~/components`.
            //
            // ~/components/Btn.vue => <Btn />
            // ~/components/base/Btn.vue => <BaseBtn />
        //     '~/components'
        // ],

        watch: {
            enabled: true,
            port: 3000,
            showURL: false
        },

        preview: {
            api: 'https://api.nuxt.studio',
        },

        experimental: { nativeSqlite: true },

    }, // content
    
    devtools: { enabled: true },
    
    compatibilityDate: '2025-04-05',
})
//<--------@/nuxt.config.ts---------------------------------------------------->