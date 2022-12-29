import { ComponentType, Ref } from 'react';
import { Button as ButtonNextUI, ButtonProps as ButtonPropsNextUI } from '@nextui-org/react';
import { NextUIOverrideCSS } from '../../../utils/override';
import { ButtonProps } from './button-props';
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
      lighter: '$colors$gray900',
      darker: '$colors$dark800'
    }
  }[color];

  return {
    $$buttonColor: text || '$colors$white',
    $$buttonBackgroundColor: defaultColor,
    $$buttonFlatBackgroundColor: lighter,
    $$buttonHoverBackgroundColor: darker,
    $$buttonBorderedColor: color === 'light' ? '$colors$gray900' : defaultColor,
    $$buttonFlatColor:
      { light: '$colors$gray900', dark: '$colors$white' }[color as 'light' | 'dark'] || defaultColor
  };
};

export const StyledButtonGroup = styledTheme('div', {
  display: 'inline-flex',
  backgroundColor: 'transparent',
  width: '$space$fit',
  height: '$space$min',
  margin: '$space$3',

  button: { minWidth: '$space$min' },

  variants: {
    bordered: { true: {} },
    vertical: {
      false: {
        'button:first-child': { borderRadiusRight: 0 },
        'button:last-child': { borderRadiusLeft: 0 },
        'button:not(:first-child):not(:last-child)': { borderRadius: 0 }
      },
      true: {
        flexDirection: 'column',

        button: { width: '$space$full' },
        'button:first-child': { borderRadiusBottom: 0 },
        'button:last-child': { borderRadiusTop: 0 },
        'button:not(:first-child):not(:last-child)': { borderRadius: 0 }
      }
    },
    fullWidth: {
      true: {
        width: '100%',

        button: { width: '100%' }
      }
    }
  },

  compoundVariants: [
    {
      bordered: true,
      vertical: false,
      css: {
        'button + button': { borderLeft: 'none' }
      }
    },
    {
      bordered: true,
      vertical: true,
      css: {
        'button + button': { borderTop: 'none' }
      }
    }
  ]
});

export const StyledButtonIcon = styledTheme('div', {
  display: 'flex',
  scale: 1.5
});

export const StyledButton = styledTheme(
  ButtonNextUI as ComponentType<
    Omit<ButtonPropsNextUI, keyof ButtonProps> & ButtonProps & { ref: Ref<HTMLButtonElement> }
  >,
  {
    boxSizing: 'border-box',
    whiteSpace: 'nowrap',
    borderStyle: 'solid',
    borderColor: '$$backgroundColor',
    color: '$$buttonColor',
    borderRadius: '$$buttonBorderRadius',

    '&[type]': {
      width: '$$buttonWidth',
      backgroundColor: '$$backgroundColor'
    },
    '&[disabled]': {
      opacity: '$opacity$80',
      color: '$colors$disabled',
      $$buttonBackgroundColor: '$colors$input',
      $$borderColor: '$colors$input'
    },

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
      shape: {
        default: { $$buttonBorderRadius: '$radii$xs' },
        round: { $$buttonBorderRadius: '$radii$2xl' },
        square: { $$buttonBorderRadius: 0 }
      },
      solid: {
        true: {
          color: '$$buttonColor',
          $$backgroundColor: '$$buttonBackgroundColor',

          '&:hover': { $$backgroundColor: '$$buttonHoverBackgroundColor' }
        }
      },
      bordered: {
        true: {
          color: '$$buttonBorderedColor',
          borderColor: '$$buttonBorderedColor',
          $$backgroundColor: 'transparent',

          '&:hover': { color: '$$buttonColor', $$backgroundColor: '$$buttonBackgroundColor' }
        }
      },
      flat: {
        true: {
          color: '$$buttonFlatColor',
          $$backgroundColor: '$$buttonFlatBackgroundColor',
          borderColor: '$$buttonFlatBackgroundColor',

          '&:hover': { filter: 'brightness(97.5%)' }
        }
      },
      ghost: {
        true: {
          color: '$$buttonBorderedColor',
          $$backgroundColor: 'transparent',
          borderColor: 'transparent',

          '&:hover': {
            color: '$$buttonFlatColor',
            $$backgroundColor: '$$buttonFlatBackgroundColor'
          }
        }
      },
      light: {
        true: {
          color: '$$buttonBorderedColor',
          $$backgroundColor: 'transparent',
          borderColor: 'transparent',

          '&:hover': { color: '$$buttonHoverBackgroundColor', fontWeight: '$fontWeights$semibold' }
        }
      },
      iconOnly: {
        true: {
          aspectRatio: '1 / 1',
          padding: '$space$4',
          minWidth: 'auto'
        }
      },
      fullWidth: {
        true: { $$buttonWidth: '$space$full', minWidth: 'auto' },
        false: { $$buttonWidth: '$space$fit' }
      }
    },

    compoundVariants: [
      {
        iconOnly: true,
        shape: 'round',
        css: {
          borderRadius: '$radii$rounded'
        }
      }
    ]
  },
  NextUIOverrideCSS
);
