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
                base: 'font-extrabold' ,
                label: 'break-words whitespace-normal overflow-visible', // Overrides the default 'truncate'
                // link: '',
              },
            // block: {
            //     base: 'w-full justify-center text-center',
            // },
            // variants: {
            //   color: {
            //     secondary: '' // Color variant called "secondary"
            //   }
            // },
            compoundVariants: [
              {
                color: 'secondary',
                variant: 'solid',
                class: 'p-4 bg-(--ui-secondary) text-(--ui-bg) text-xl hover:bg-(--ui-primary)'
              },
            ]
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
                    true: {
                        base: 'text-(--ui-primary)'
                    }
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
        }

    } // @nuxt/ui V3

})
//--------@/app/app.config.ts-------------------------------------------------->