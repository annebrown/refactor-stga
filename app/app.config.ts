//--------@/app/app.config.ts-------------------------------------------------->
export default defineAppConfig({
    // @nuxt/ui V3
    ui: {
        colors: {
            primary: 'sky',
            secondary: 'apple',
            tertiary: 'amber',
            neutral: 'gray',
            success: 'green',
            warning: 'yellow',
            error: 'red',
        },
        button: {
            
            slots: {
                base: 'bg-(--ui-bg) dark:bg-(--ui-bg) shadow-md dark:shadow-sm shadow-black dark:shadow-white font-extrabold',
                label: 'text-white dark:text-white break-words whitespace-normal overflow-visible', // Overrides the default 'truncate'
              },
        }, // Button

        navigationMenu: {
            variants: {
                active: {
                  false: {
                    link: 'text-(--ui-secondary)', // This overrides the default 'text-(--ui-text-muted)'
                  }
                }
              }
        }, // NavigationMenu

        link: {
            base: 'transition-colors',
            variants: {
                active: {
                  true: 'text-(--ui-primary)',
                  false: [
                    'text-(--ui-secondary) hover:text-(--ui-primary)'
                  ]
                },
                disabled: {
                  true: 'cursor-not-allowed opacity-75'
                }
              },
            compoundVariants: [
                {
                    active: false,
                    class: {
                        base: 'hover:text-(--ui-primary)'
                    }
                }
            ]
        },
        card: {
            slots: {
              header: '',
              body: 'm-0 px-1',
              footer: 'px-2'
            }
        }

    } // @nuxt/ui V3

})
//--------@/app/app.config.ts-------------------------------------------------->