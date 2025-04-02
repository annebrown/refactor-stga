//-------@/tailwind.config.ts-------------------------------------------------->
import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
    theme: {
        extend: {
            colors: {
                'primary': 'venice', /* venice-blue-500 */
                'venice-blue': {
                    '50': '#f2f8fd',
                    '100': '#e4f0fa',
                    '200': '#c2e0f5',
                    '300': '#8cc8ed',
                    '400': '#4fabe1',
                    '500': '#2891cf',
                    '600': '#1a73af',
                    '700': '#165d8f',
                    '800': '#164e76',
                    '900': '#184362',
                    '950': '#102a41',
                },
                'accent': 'apple', /* apple-400 */
                'apple': {
                    '50': '#f3fbf2',
                    '100': '#e2f8e0',
                    '200': '#c4f0c2',
                    '300': '#95e392',
                    '400': '#5fcd5b',
                    '500': '#38af34',
                    '600': '#2a9326',
                    '700': '#237421',
                    '800': '#205c1f',
                    '900': '#1b4c1b',
                    '950': '#0a290b',
                },
            } // colors
        } // extend
    } // theme
} 
//-------@/tailwind.config.ts-------------------------------------------------->