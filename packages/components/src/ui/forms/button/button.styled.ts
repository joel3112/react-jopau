import { ComponentType } from 'react';
import { Text, TextProps } from '../../typography';
import { ButtonProps } from './button';
import { styledTheme } from '../../../index';

const colorTokens = (color: NonNullable<ButtonProps['color']>) => {
  const {
    default: defaultColor,
    lighter,
    darker,
    text
  }: { default: string; lighter: string; darker: string; text?: string } = {
    primary: {
      default: '$colors$primary500',
      lighter: '$colors$primary100',
      darker: '$colors$primary600',
      text: '$colors$primaryText'
    },
    secondary: {
      default: '$colors$secondary500',
      lighter: '$colors$secondary100',
      darker: '$colors$secondary600',
      text: '$colors$secondaryText'
    },
    tertiary: {
      default: '$colors$tertiary500',
      lighter: '$colors$tertiary100',
      darker: '$colors$tertiary600',
      text: '$colors$tertiaryText'
    },
    success: {
      default: '$colors$green500',
      lighter: '$colors$green100',
      darker: '$colors$green600'
    },
    warning: {
      default: '$colors$yellow500',
      lighter: '$colors$yellow100',
      darker: '$colors$yellow600'
    },
    error: {
      default: '$colors$red500',
      lighter: '$colors$red100',
      darker: '$colors$red600'
    },
    info: {
      default: '$colors$blue500',
      lighter: '$colors$blue100',
      darker: '$colors$blue600'
    },
    light: {
      default: '$colors$gray200',
      lighter: '$colors$gray100',
      darker: '$colors$gray400',
      text: '$colors$gray900'
    },
    dark: {
      default: '$colors$dark500',
      lighter: '$colors$dark100',
      darker: '$colors$dark800'
    }
  }[color];

  return {
    $$currentColor: defaultColor,
    $$currentColorLighter: lighter,
    $$currentColorDarker: darker,
    $$textColor: text || '$colors$white',
    $$outlineColor: color === 'light' ? '$colors$gray900' : defaultColor,
    $$ghostColor:
      { light: '$colors$gray900', dark: '$colors$white' }[color as 'light' | 'dark'] || defaultColor
  };
};

export const ButtonText = styledTheme(Text as ComponentType<Partial<TextProps>>, {
  pointerEvents: 'none'
});

export const ButtonIcon = styledTheme('div', {
  variants: {
    size: {
      xs: { fontSize: '$fontSizes$xl' },
      sm: { fontSize: '$fontSizes$xl' },
      md: { fontSize: '$fontSizes$2xl' },
      lg: { fontSize: '$fontSizes$3xl' }
    }
  }
});

export const ButtonWrapper = styledTheme('button', {
  boxSizing: 'border-box',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
  border: '1px solid',
  transition:
    'background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
  alignCenterX: 'row',
  justifyContent: 'center',
  size: '$space$fit',
  color: '$$currentColor',
  borderColor: '$$currentColor',
  borderRadius: '$radii$xs',

  variants: {
    size: {
      xs: {
        $$currentHeight: '$space$12',
        height: '$$currentHeight',
        padding: '0 $space$6',
        gap: '$space$2'
      },
      sm: {
        $$currentHeight: '$space$14',
        height: '$$currentHeight',
        padding: '0 $space$8',
        gap: '$space$3'
      },
      md: {
        $$currentHeight: '$space$15',
        height: '$$currentHeight',
        padding: '0 $space$9',
        gap: '$space$4'
      },
      lg: {
        $$currentHeight: '$space$16',
        height: '$$currentHeight',
        padding: '0 $space$10',
        gap: '$space$4'
      }
    },
    color: {
      primary: colorTokens('primary'),
      secondary: colorTokens('secondary'),
      tertiary: colorTokens('tertiary'),
      info: colorTokens('info'),
      error: colorTokens('error'),
      success: colorTokens('success'),
      warning: colorTokens('warning'),
      light: colorTokens('light'),
      dark: colorTokens('dark')
    },
    variant: {
      solid: {
        color: '$$textColor',
        backgroundColor: '$$currentColor',

        '&:hover': {
          backgroundColor: '$$currentColorDarker'
        }
      },
      outline: {
        color: '$$outlineColor',
        backgroundColor: 'transparent',

        '&:hover': {
          color: '$$textColor',
          backgroundColor: '$$currentColor'
        }
      },
      flat: {
        color: '$$ghostColor',
        backgroundColor: '$$currentColorLighter',
        borderColor: '$$currentColorLighter',

        '&:hover': {
          filter: 'brightness(97.5%)'
        }
      },
      ghost: {
        color: '$$outlineColor',
        backgroundColor: 'transparent',
        borderColor: 'transparent !important',

        '&:hover': {
          color: '$$ghostColor',
          backgroundColor: '$$currentColorLighter'
        }
      },
      link: {
        backgroundColor: 'transparent !important',
        borderColor: 'transparent !important',

        '&:hover': {
          color: '$$currentColorDarker',
          textDecorationLine: 'underline',
          fontWeight: '$fontWeights$semibold'
        }
      }
    },
    iconOnly: {
      true: {
        aspectRatio: '1 / 1',
        padding: '$space$4',

        '& > *': { scale: 1.3 }
      }
    },
    rounded: {
      true: { borderRadius: '$radii$2xl' }
    },
    disabled: {
      true: {
        pointerEvents: 'none',
        color: '$colors$gray700',
        $$currentColor: '$colors$gray500',
        $$borderColor: '$colors$gray500'
      }
    },
    autoWidth: {
      true: { width: '$space$full' }
    }
  },

  compoundVariants: [
    {
      iconOnly: true,
      rounded: true,
      css: {
        borderRadius: '$radii$rounded !important'
      }
    }
  ]
});
