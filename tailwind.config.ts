//--------@@/apps/ab-apex/tailwind.config.ts----------------------------------->
import type { Config } from 'tailwindcss'
import tailwindTypography from '@tailwindcss/typography'

export default {

    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './composables/**/*.{vue,js,ts}',
        './plugins/**/*.{js,ts}',
        './nuxt.config.{js,ts}',
        './public/**/*.html',
        './app/**/*.{js,ts,vue}',
        './assets/css/**/*.{css,scss}',
        './error.{vue,js,ts}',
        './content/**/*.md',
        '../../base/components/**/*.{vue,js,ts}',
        '../../base/layouts/**/*.vue',
        '../../base/pages/**/*.vue',
        // './node_modules/@annebrown.ca/nuxt3-fleet-pub/src/**/*.{vue,js,ts}'
        
    ],

    plugins: [tailwindTypography()],

} satisfies Config
//--------@@/apps/ab-apex/tailwind.config.ts----------------------------------->