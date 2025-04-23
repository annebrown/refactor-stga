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

  modules: ['nuxt-gtag'],

  gtag: {
    id: 'G-7X8MSSZ6DE'
  },

  devServer: {
    host: '192.168.4.21:3000',
    https: {
      key: '/devy/certs/192.168.4.21.key',
      cert: '/devy/certs/192.168.4.21.crt'
    }
  },

  devtools: { enabled: false },
  compatibilityDate: '2025-04-05',
})
//<--------@/nuxt.config.ts---------------------------------------------------->