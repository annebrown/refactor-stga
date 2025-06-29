//--------@/app/app.config.ts-------------------------------------------------->
export default defineAppConfig({

    title: 'refactor-stga',

    
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
                class: 'rounded-sm',
                base: 'button-default',
                label: '',
                link: ''
              },
        }, // Button

        navigationMenu: {
            slots: {

                class: '',

                label: 'font-extrabold',

              },
            variants: {
                active: {
                  false: {
                    label:  'text-(--ui-secondary)',
                    link: 'text-(--ui-secondary) active:text-(--ui-primary)', // Overrides the default 'text-(--ui-text-muted)'
                    }
                }
            }
        }, // NavigationMenu

        card: {
            slots: {
              header: 'w-full m-0 p-0 flex items-start',
              body: 'm-0 p-0',
              footer: 'w-full m-0 p-0 flex items-end'
            }
        },

        popover: {
            slots: {
                content: 'bg-(--ui-bg) shadow-lg rounded-lg ring ring-(--ui-border) data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto'
            }
        },

        separator: {
            slots: {
                root: 'border-[--ui-secondary-2] border-t-[8px] border-t-solid'
            }
        } // Separator
      
    } // @nuxt/ui V3

})

     