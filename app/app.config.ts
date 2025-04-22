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
                    base:  '',
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
        },

        popover: {
            slots: {
              content: 'bg-(--ui-bg) shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-md ring ring-(--ui-border) data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto'
            }
          }

    } // @nuxt/ui V3

})
//--------@/app/app.config.ts-------------------------------------------------->