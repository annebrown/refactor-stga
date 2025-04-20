//--------@/app/app.config.ts-------------------------------------------------->
export default defineAppConfig({
    // @nuxt/ui V3
    ui: {
        colors: {
            primary:    'sky',
            secondary:  'apple',
            tertiary:   'amber',
            neutral:    'gray',
            success:    'green',
            warning:    'yellow',
            error:      'red',
        },
        button: {
            
            slots: {
                color: '',
                variant: '',
                class: '',
                base: 'stga-button',
                label: '',
                link: ''
              },
        }, // Button

        navigationMenu: {
            variants: {
                active: {
                  false: {
                    base:  'bg-(--ui-secondary) dark:bg-(--ui-bg-2)',
                    link: 'text-(--ui-secondary) active:text', // This overrides the default 'text-(--ui-text-muted)'
                  }
                }
              }
        }, // NavigationMenu

        link: {
            base: 'transition-colors',
            variants: {
                active: {
                  true: 'text-(--ui-primary)',
                  false: 
                    'text-(--ui-secondary) hover:text-(--ui-primary)'
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
              header: 'w-full m-0 p-0 flex items-start',
              body: 'm-0 p-0',
              footer: 'w-full m-0 p-0 flex items-end'
            }
        }

    } // @nuxt/ui V3

})
//--------@/app/app.config.ts-------------------------------------------------->