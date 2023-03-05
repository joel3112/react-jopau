import { sharedFocus, sharedVisuallyHidden, styledTheme } from '@/components/shared';

export const StyledSwitchWrapper = styledTheme('label', {
  WebkitTapHighlightColor: 'transparent',
  display: 'inline-flex',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  userSelect: 'none',
  position: 'relative',
  cursor: 'pointer',
  padding: '$space$1 0',
  transition: '$transitions$default',
  width: '$space$fit',
  height: '$$switchControlHeight',

  variants: {
    size: {
      xs: {
        $$switchLabelFontSize: '$space$7',
        $$switchControlWidth: '$space$12',
        $$switchControlHeight: '$space$9'
      },
      sm: {
        $$switchLabelFontSize: '$space$8',
        $$switchControlWidth: '$space$14',
        $$switchControlHeight: '$space$10'
      },
      md: {
        $$switchLabelFontSize: '$space$9',
        $$switchControlWidth: '$space$15',
        $$switchControlHeight: '$space$11'
      },
      lg: {
        $$switchLabelFontSize: '$space$10',
        $$switchControlWidth: '$space$17',
        $$switchControlHeight: '$space$12'
      },
      xl: {
        $$switchLabelFontSize: '$space$11',
        $$switchControlWidth: '$space$18',
        $$switchControlHeight: '$space$13'
      }
    },
    color: {
      primary: {
        $$switchControlColor: '$colors$primary500',
        $$switchHoverControlColor: '$colors$primary700'
      },
      secondary: {
        $$switchControlColor: '$colors$secondary500',
        $$switchHoverControlColor: '$colors$secondary700'
      },
      tertiary: {
        $$switchControlColor: '$colors$tertiary500',
        $$switchHoverControlColor: '$colors$tertiary700'
      },
      info: {
        $$switchControlColor: '$colors$blue500',
        $$switchHoverControlColor: '$colors$blue700'
      },
      success: {
        $$switchControlColor: '$colors$green500',
        $$switchHoverControlColor: '$colors$green700'
      },
      error: {
        $$switchControlColor: '$colors$red500',
        $$switchHoverControlColor: '$colors$red700'
      },
      warning: {
        $$switchControlColor: '$colors$yellow500',
        $$switchHoverControlColor: '$colors$yellow700'
      }
    },
    status: {
      default: {
        $$switchControlColor: '$colors$primary500',
        $$switchHoverControlColor: '$colors$primary700',
        $$switchLabelColor: '$colors$text'
      },
      primary: {
        $$switchControlColor: '$colors$primary500',
        $$switchHoverControlColor: '$colors$primary700',
        $$switchLabelColor: '$colors$primary500'
      },
      secondary: {
        $$switchControlColor: '$colors$secondary500',
        $$switchHoverControlColor: '$colors$secondary700',
        $$switchLabelColor: '$colors$secondary500'
      },
      tertiary: {
        $$switchControlColor: '$colors$tertiary500',
        $$switchHoverControlColor: '$colors$tertiary700',
        $$switchLabelColor: '$colors$tertiary500'
      },
      info: {
        $$switchControlColor: '$colors$blue500',
        $$switchHoverControlColor: '$colors$blue700',
        $$switchLabelColor: '$colors$blue500'
      },
      success: {
        $$switchControlColor: '$colors$green500',
        $$switchHoverControlColor: '$colors$green700',
        $$switchLabelColor: '$colors$green500'
      },
      error: {
        $$switchControlColor: '$colors$red500',
        $$switchHoverControlColor: '$colors$red700',
        $$switchLabelColor: '$colors$red500'
      },
      warning: {
        $$switchControlColor: '$colors$yellow500',
        $$switchHoverControlColor: '$colors$yellow700',
        $$switchLabelColor: '$colors$yellow500'
      }
    },
    disabled: {
      true: {
        cursor: 'not-allowed'
      }
    }
  }
});

export const StyledSwitchCircle = styledTheme('span', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  transition: 'transform 0.25s ease, width 0.2s ease',
  position: 'absolute',
  left: '0',
  background: '$colors$background',
  top: 'calc(50% - $$switchControlHeight * 0.35)',
  size: 'calc($$switchControlHeight * 0.7)',
  borderRadius: '$radii$pill',

  '& svg': {
    background: 'transparent',
    size: 'calc($$switchControlHeight * 0.44)'
  }
});

export const StyledSwitch = styledTheme(
  'div',
  {
    position: 'relative',
    overflow: 'hidden',
    padding: 0,
    opacity: '$opacity$80',
    borderRadius: '$radii$pill',
    background: '$colors$border',
    width: '$$switchControlWidth',
    minWidth: '$$switchControlWidth',
    height: '$$switchControlHeight',
    transition: '$transition$sdefault',

    '&:active': {
      [`& ${StyledSwitchCircle}`]: {
        width: 'calc($$switchControlHeight * 0.7 + ($$switchControlWidth / 10))'
      }
    },

    variants: {
      checked: {
        true: {
          opacity: '$opacity$100',
          background: '$$switchControlColor',

          '&:hover:not(&:active)': { background: '$$switchHoverControlColor' }
        }
      },
      bordered: {
        true: {
          border: '$borderWidths$normal solid $$switchControlColor',

          '&:hover': { borderColor: '$$switchControlColor' },
          [`& ${StyledSwitchCircle}`]: { background: '$colors$background' }
        }
      },
      squared: {
        true: {
          borderRadius: '2px',

          [`& ${StyledSwitchCircle}`]: { borderRadius: '2px' }
        }
      },
      disabled: {
        true: {
          borderColor: '$colors$border',
          background: '$colors$border',
          opacity: '$opacity$40'
        }
      }
    },
    compoundVariants: [
      {
        checked: true,
        disabled: true,
        css: {
          background: '$$switchControlColor'
        }
      },
      {
        checked: true,
        bordered: true,
        css: {
          background: '$$switchControlColor',
          border: '$borderWidths$normal solid transparent',

          '&:hover:not(&:active)': { borderColor: 'transparent' },
          [`& ${StyledSwitchCircle}`]: { background: '$colors$background' }
        }
      }
    ]
  },
  sharedFocus
);

export const StyledSwitchInput = styledTheme(
  'input',
  {
    [`& + ${StyledSwitch} > ${StyledSwitchCircle}`]: {
      transform: 'translateX(calc($$switchControlWidth / 15))'
    },
    [`&:checked + ${StyledSwitch} > ${StyledSwitchCircle}`]: {
      transform:
        'translateX(calc($$switchControlWidth - $$switchControlWidth / 15 - $$switchControlHeight * 0.7))'
    },
    [`& + ${StyledSwitch}:active > ${StyledSwitchCircle}`]: {
      transform: 'translateX(calc($$switchControlWidth / 7.5))'
    },
    [`&:checked + ${StyledSwitch}:active > ${StyledSwitchCircle}`]: {
      transform:
        'translateX(calc($$switchControlWidth - $$switchControlWidth / 7.5 - $$switchControlWidth / 10 - $$switchControlHeight * 0.7))'
    },
    variants: {
      bordered: {
        true: {
          [`& + ${StyledSwitch} > ${StyledSwitchCircle}`]: {
            transform: 'translateX(calc($$switchControlWidth / 15 - $borderWidths$normal / 2))'
          },
          [`&:checked + ${StyledSwitch} > ${StyledSwitchCircle}`]: {
            transform:
              'translateX(calc($$switchControlWidth - $$switchControlWidth / 15 - $borderWidths$normal * 1.5 - $$switchControlHeight * 0.7))'
          },
          [`& + ${StyledSwitch}:active > ${StyledSwitchCircle}`]: {
            transform: 'translateX(calc($$switchControlWidth / 7.5 - $borderWidths$normal / 2))'
          },
          [`&:checked + ${StyledSwitch}:active > ${StyledSwitchCircle}`]: {
            transform:
              'translateX(calc($$switchControlWidth - $$switchControlWidth / 7.5 - $$switchControlWidth / 10 - $borderWidths$normal * 1.5 - $$switchControlHeight * 0.7))'
          }
        }
      }
    }
  },
  sharedVisuallyHidden
);

export const StyledSwitchLabel = styledTheme('label', {
  cursor: 'pointer',
  whiteSpace: 'normal',
  fontSize: '$$switchLabelFontSize',
  pl: 'calc($$switchLabelFontSize * 0.57)',
  color: '$$switchLabelColor'
});
