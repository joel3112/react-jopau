import { ComponentType } from 'react';
import { Input as InputNextUI } from '@nextui-org/react';
import { styledTheme } from '../../../index';

export const InputContentWrapper = styledTheme('div', {
  display: 'flex',
  scale: 1.35
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const InputControl = styledTheme(InputNextUI as ComponentType<any>, {
  boxSizing: 'content-box',
  transform: 'none !important',
  width: '$space$fit'
});

export const InputLabelGap = styledTheme('div', {
  width: '$space$full',
  marginBottom: '$$labelGap',
  lineHeight: '$lineHeights$md',
  fontSize: '$$inputLabelFontSize'
});

export const InputWrapper = styledTheme('div', {
  boxSizing: 'border-box',
  display: 'grid',
  width: '$space$fit',

  '.nextui-input-wrapper': { borderRadius: '$radii$xs !important' },
  input: { color: '$$inputCurrentColorDarker !important' },
  '.nextui-input-helper-text-container': { mb: '$space$2', scale: 1.2 },
  '.nextui-input-helper-text': {
    transformOrigin: 'top left',
    scale: 1,
    color: '$$inputCurrentColor'
  },
  '.nextui-input-block-label': { color: '$$inputCurrentColor' },

  variants: {
    size: {
      xs: {
        $$inputLabelFontSize: '$fontSizes$xs',
        $$inputLabelMarginTop: 'calc(-1 * $space$3)'
      },
      sm: {
        $$inputLabelFontSize: '$fontSizes$xs',
        $$inputLabelMarginTop: 'calc(-1 * $space$px)'
      },
      md: {
        $$inputLabelFontSize: '$fontSizes$sm',
        $$inputLabelMarginTop: '$space$1'
      },
      lg: {
        $$inputLabelFontSize: '$fontSizes$md',
        $$inputLabelMarginTop: '$space$px'
      },
      xl: {
        $$inputLabelFontSize: '$fontSizes$lg',
        $$inputLabelMarginTop: '$space$3'
      }
    },
    variant: {
      default: {
        $$labelGap: '$space$3',

        '.nextui-input-wrapper': {
          backgroundColor: '$$inputCurrentColorLighter',
          backgroundColorLighter: 0.7
        }
      },
      bordered: {
        $$labelGap: '$space$3',
        $$inputCurrentColorLighter: 'transparent'
      },
      underlined: {
        $$labelGap: '$space$0',
        $$inputCurrentColorLighter: 'transparent',

        '.nextui-input-block-label': { marginBottom: '$space$0' },
        '.nextui-input-wrapper::before': { background: '$$inputCurrentColor' }
      }
    },
    color: {
      default: {},
      primary: { $$inputCurrentColor: '$colors$primary500' },
      secondary: { $$inputCurrentColor: '$colors$secondary500' },
      tertiary: { $$inputCurrentColor: '$colors$tertiary500' },
      info: { $$inputCurrentColor: '$colors$blue500' },
      error: { $$inputCurrentColor: '$colors$red500' },
      success: { $$inputCurrentColor: '$colors$green500' },
      warning: { $$inputCurrentColor: '$colors$yellow500' }
    },
    status: {
      default: {},
      primary: {
        $$inputCurrentColor: '$colors$primary500',
        $$inputCurrentColorLighter: '$colors$primary200',
        $$inputCurrentColorDarker: '$colors$primary700'
      },
      secondary: {
        $$inputCurrentColor: '$colors$secondary500',
        $$inputCurrentColorLighter: '$colors$secondary200',
        $$inputCurrentColorDarker: '$colors$secondary700'
      },
      tertiary: {
        $$inputCurrentColor: '$colors$tertiary500',
        $$inputCurrentColorLighter: '$colors$tertiary200',
        $$inputCurrentColorDarker: '$colors$tertiary700'
      },
      info: {
        $$inputCurrentColor: '$colors$blue500',
        $$inputCurrentColorLighter: '$colors$blue200',
        $$inputCurrentColorDarker: '$colors$blue700'
      },
      error: {
        $$inputCurrentColor: '$colors$red500',
        $$inputCurrentColorLighter: '$colors$red200',
        $$inputCurrentColorDarker: '$colors$red700'
      },
      success: {
        $$inputCurrentColor: '$colors$green500',
        $$inputCurrentColorLighter: '$colors$green200',
        $$inputCurrentColorDarker: '$colors$green700'
      },
      warning: {
        $$inputCurrentColor: '$colors$yellow500',
        $$inputCurrentColorLighter: '$colors$yellow200',
        $$inputCurrentColorDarker: '$colors$yellow700'
      }
    },
    labelPlaceholder: {
      true: {
        '.nextui-input-main-container[class$="hover"] > label, .nextui-input-main-container[class$="with-value"] > label':
          { mt: '$$inputLabelMarginTop' }
      }
    },
    hotKey: {
      true: {
        '.nextui-input-label--right': {
          height: 'auto',
          border: '1px solid $colors$gray500',
          color: '$colors$gray800',
          borderRadius: '$radii$xs',
          opacity: '$opacity$80',
          p: '$space$3',
          marginLeft: '$space$4',
          marginRight: '$space$4',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'transparent',
          fontSize: '$fontSizes$xs',
          boxShadow: 'none',
          transition: 'border 0.12s ease 0s'
        }
      }
    },
    rounded: {
      true: {
        '.nextui-input-wrapper': { borderRadius: '$radii$2xl !important' }
      }
    },
    fullWidth: {
      true: {
        width: '$space$full',

        '.nextui-input-container': { width: '$space$full' }
      }
    }
  },

  compoundVariants: [
    {
      variant: 'default',
      status: 'default',
      css: {
        '.nextui-input-wrapper': { backgroundColor: '$$inputColor', backgroundColorLighter: 0 },
        input: { color: '$$inputTextColor' }
      }
    },
    {
      variant: 'default',
      hotKey: true,
      css: {
        '.nextui-input-label--right': {
          borderColor: '$$inputCurrentColor',
          color: '$$inputCurrentColor'
        }
      }
    },
    {
      variant: 'default',
      status: 'default',
      hotKey: true,
      css: {
        '.nextui-input-label--right': {
          borderColor: '$colors$gray500',
          color: '$colors$gray800'
        }
      }
    },
    {
      variant: 'underlined',
      labelPlaceholder: true,
      css: {
        '.nextui-input-main-container[class$="hover"] > label, .nextui-input-main-container[class$="with-value"] > label':
          { mt: 'calc($$inputLabelMarginTop + $space$3)', pl: '$space$2' }
      }
    }
  ]
});
