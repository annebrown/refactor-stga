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
            slots: {

                class: '',

                label: 'font-extrabold',

              },
            variants: {
                active: {
                  false: {
                    base:  '',
                    link: 'text-(--ui-secondary) active:text-(--ui-primary)', // Overrides the default 'text-(--ui-text-muted)'
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
              content: 'bg-(--ui-bg) shadow-lg rounded-[your-desired-radius] ring ring-(--ui-border) data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto'
            }
          },

          separator: {
            slots: {
              root: 'flex items-center align-center text-center',
              border: '',
              container: 'font-medium text-default flex',
              icon: 'shrink-0 size-5',
              avatar: 'shrink-0',
              avatarSize: '2xs',
              label: 'text-sm'
            },
            compoundVariants: [
              {
                orientation: 'horizontal',
                size: 'xs',
                class: {
                  border: 'border-t'
                }
              },
              {
                orientation: 'horizontal',
                size: 'sm',
                class: {
                  border: 'border-t-[2px]'
                }
              },
              {
                orientation: 'horizontal',
                size: 'md',
                class: {
                  border: 'border-t-[3px]'
                }
              },
              {
                orientation: 'horizontal',
                size: 'lg',
                class: {
                  border: 'border-t-[4px]'
                }
              },
              {
                orientation: 'horizontal',
                size: 'xl',
                class: {
                  border: 'border-t-[5px]'
                }
              },
              {
                orientation: 'vertical',
                size: 'xs',
                class: {
                  border: 'border-s'
                }
              },
              {
                orientation: 'vertical',
                size: 'sm',
                class: {
                  border: 'border-s-[2px]'
                }
              },
              {
                orientation: 'vertical',
                size: 'md',
                class: {
                  border: 'border-s-[3px]'
                }
              },
              {
                orientation: 'vertical',
                size: 'lg',
                class: {
                  border: 'border-s-[4px]'
                }
              },
              {
                orientation: 'vertical',
                size: 'xl',
                class: {
                  border: 'border-s-[5px]'
                }
              }
            ],
            defaultVariants: {
              color: 'neutral',
              size: 'xs',
              type: 'solid'
            }
          }, // Separator
      

    } // @nuxt/ui V3

})
//--------@/app/app.config.ts-------------------------------------------------->
// 'bg-(--ui-bg) shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_4px_6px_-1px_rgba(0,0,0,0.1)] rounded-md ring ring-(--ui-border) data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--reka-popover-content-transform-origin) focus:outline-none pointer-events-auto'


      separator: {
        slots: {
          root: 'flex items-center align-center text-center',
          border: '',
          container: 'font-medium text-default flex',
          icon: 'shrink-0 size-5',
          avatar: 'shrink-0',
          avatarSize: '2xs',
          label: 'text-sm'
        },
        variants: {
          color: {
            primary: {
              border: 'border-primary'
            },
            secondary: {
              border: 'border-secondary'
            },
            success: {
              border: 'border-success'
            },
            info: {
              border: 'border-info'
            },
            warning: {
              border: 'border-warning'
            },
            error: {
              border: 'border-error'
            },
            neutral: {
              border: 'border-default'
            }
          },
          orientation: {
            horizontal: {
              root: 'w-full flex-row',
              border: 'w-full',
              container: 'mx-3 whitespace-nowrap'
            },
            vertical: {
              root: 'h-full flex-col',
              border: 'h-full',
              container: 'my-2'
            }
          },
          size: {
            xs: '',
            sm: '',
            md: '',
            lg: '',
            xl: ''
          },
          type: {
            solid: {
              border: 'border-solid'
            },
            dashed: {
              border: 'border-dashed'
            },
            dotted: {
              border: 'border-dotted'
            }
          }
        },
        compoundVariants: [
          {
            orientation: 'horizontal',
            size: 'xs',
            class: {
              border: 'border-t'
            }
          },
          {
            orientation: 'horizontal',
            size: 'sm',
            class: {
              border: 'border-t-[2px]'
            }
          },
          {
            orientation: 'horizontal',
            size: 'md',
            class: {
              border: 'border-t-[3px]'
            }
          },
          {
            orientation: 'horizontal',
            size: 'lg',
            class: {
              border: 'border-t-[4px]'
            }
          },
          {
            orientation: 'horizontal',
            size: 'xl',
            class: {
              border: 'border-t-[5px]'
            }
          },
          {
            orientation: 'vertical',
            size: 'xs',
            class: {
              border: 'border-s'
            }
          },
          {
            orientation: 'vertical',
            size: 'sm',
            class: {
              border: 'border-s-[2px]'
            }
          },
          {
            orientation: 'vertical',
            size: 'md',
            class: {
              border: 'border-s-[3px]'
            }
          },
          {
            orientation: 'vertical',
            size: 'lg',
            class: {
              border: 'border-s-[4px]'
            }
          },
          {
            orientation: 'vertical',
            size: 'xl',
            class: {
              border: 'border-s-[5px]'
            }
          }
        ],
        defaultVariants: {
          color: 'neutral',
          size: 'xs',
          type: 'solid'
        }
      }
