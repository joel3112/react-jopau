import { ComponentType } from 'react';
import { Button as ButtonNextUI } from '@nextui-org/react';
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
      lighter: '$colors$gray800',
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
  display: 'flex',
  scale: 1.5
});

export const ButtonWrapper = styledTheme(ButtonNextUI, {
  boxSizing: 'border-box',
  whiteSpace: 'nowrap',
  border: '1px solid',
  borderColor: '$$currentColor',
  borderRadius: '$radii$xs',
  color: '$$textColor',

  variants: {
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
    solid: {
      true: {
        color: '$$textColor',
        backgroundColor: '$$currentColor',

        '&:hover': {
          backgroundColor: '$$currentColorDarker'
        }
      }
    },
    bordered: {
      true: {
        color: '$$outlineColor',
        backgroundColor: 'transparent',

        '&:hover': {
          color: '$$textColor',
          backgroundColor: '$$currentColor'
        }
      }
    },
    flat: {
      true: {
        color: '$$ghostColor',
        backgroundColor: '$$currentColorLighter',
        borderColor: '$$currentColorLighter',

        '&:hover': {
          filter: 'brightness(97.5%)'
        }
      }
    },
    ghost: {
      true: {
        color: '$$outlineColor',
        backgroundColor: 'transparent',
        borderColor: 'transparent !important',

        '&:hover': {
          color: '$$ghostColor',
          backgroundColor: '$$currentColorLighter'
        }
      }
    },
    light: {
      true: {
        color: '$$outlineColor',
        backgroundColor: 'transparent !important',
        borderColor: 'transparent !important',

        '&:hover': {
          color: '$$currentColorDarker',
          fontWeight: '$fontWeights$semibold'
        }
      }
    },
    iconOnly: {
      true: {
        aspectRatio: '1 / 1',
        padding: '$space$4',
        minWidth: 'auto'
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
    auto: {
      true: { width: '$space$full' },
      false: { width: '$space$fit' }
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
