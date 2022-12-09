import { ComponentType, Ref } from 'react';
import { Input as InputNextUI, InputProps as InputPropsNextUI } from '@nextui-org/react';
import { InputProps } from './input-props';
import { styledTheme } from '../../../index';

const colorTokens = (color: NonNullable<InputProps['color']>) => {
  return {
    default: {
      $$inputLabelColor: '$colors$text',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$text'
    },
    primary: {
      $$inputLabelColor: '$colors$primary500',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$primary500'
    },
    secondary: {
      $$inputLabelColor: '$colors$secondary500',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$secondary500'
    },
    tertiary: {
      $$inputLabelColor: '$colors$tertiary500',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$tertiary500'
    },
    info: {
      $$inputLabelColor: '$colors$blue500',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$blue500'
    },
    error: {
      $$inputLabelColor: '$colors$red500',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$red500'
    },
    success: {
      $$inputLabelColor: '$colors$green500',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$green500'
    },
    warning: {
      $$inputLabelColor: '$colors$yellow500',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$yellow500'
    }
  }[color];
};

const statusTokens = (status: NonNullable<InputProps['status']>) => {
  return {
    default: {
      $$inputLabelColor: '$colors$text',
      $$inputControlColor: '$colors$black',
      $$inputBorderedControlColor: '$colors$text',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$text',
      $$inputControlBackgroundColor: '$colors$input',
      $$inputControlBackgroundColorOpacity: 0
    },
    primary: {
      $$inputLabelColor: '$colors$primary500',
      $$inputControlColor: '$colors$primary700',
      $$inputBorderedControlColor: '$colors$primary700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$primary500',
      $$inputControlBackgroundColor: '$colors$primary200',
      $$inputControlBackgroundColorOpacity: 0.7
    },
    secondary: {
      $$inputLabelColor: '$colors$secondary500',
      $$inputControlColor: '$colors$secondary700',
      $$inputBorderedControlColor: '$colors$secondary700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$secondary500',
      $$inputControlBackgroundColor: '$colors$secondary200',
      $$inputControlBackgroundColorOpacity: 0.7
    },
    tertiary: {
      $$inputLabelColor: '$colors$tertiary500',
      $$inputControlColor: '$colors$tertiary700',
      $$inputBorderedControlColor: '$colors$tertiary700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$tertiary500',
      $$inputControlBackgroundColor: '$colors$tertiary200',
      $$inputControlBackgroundColorOpacity: 0.7
    },
    info: {
      $$inputLabelColor: '$colors$blue500',
      $$inputControlColor: '$colors$blue700',
      $$inputBorderedControlColor: '$colors$blue700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$blue500',
      $$inputControlBackgroundColor: '$colors$blue200',
      $$inputControlBackgroundColorOpacity: 0.7
    },
    error: {
      $$inputLabelColor: '$colors$red500',
      $$inputControlColor: '$colors$red700',
      $$inputBorderedControlColor: '$colors$red700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$red500',
      $$inputControlBackgroundColor: '$colors$red200',
      $$inputControlBackgroundColorOpacity: 0.7
    },
    success: {
      $$inputLabelColor: '$colors$green500',
      $$inputControlColor: '$colors$green700',
      $$inputBorderedControlColor: '$colors$green700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$green500',
      $$inputControlBackgroundColor: '$colors$green200',
      $$inputControlBackgroundColorOpacity: 0.7
    },
    warning: {
      $$inputLabelColor: '$colors$yellow500',
      $$inputControlColor: '$colors$yellow700',
      $$inputBorderedControlColor: '$colors$yellow700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$yellow500',
      $$inputControlBackgroundColor: '$colors$yellow200',
      $$inputControlBackgroundColorOpacity: 0.7
    }
  }[status];
};

enum NextUIEl {
  LABEL = '.nextui-input-block-label',
  LABEL_PLACEHOLDER = '.nextui-input-main-container > label',
  LABEL_PLACEHOLDER_HOVER = '.nextui-input-main-container[class$="hover"] > label',
  LABEL_PLACEHOLDER_WITH_VALUE = '.nextui-input-main-container[class$="with-value"] > label',
  INPUT_CONTAINER = '.nextui-input-container',
  INPUT_WRAPPER = '.nextui-input-wrapper',
  INPUT = '.nextui-input',
  INPUT_CONTENT = '.nextui-input-content',
  HELPER_TEXT_CONTAINER = '.nextui-input-helper-text-container',
  HELPER_TEXT = '.nextui-input-helper-text',
  LABEL_LEFT = '.nextui-input-label--left',
  LABEL_RIGHT = '.nextui-input-label--right'
}

export const StyledContent = styledTheme('div', {
  display: 'flex',
  scale: 1.35,

  variants: {
    variant: {
      default: { color: '$$inputControlColor' },
      bordered: { color: '$$inputLabelColor' },
      underlined: { color: '$$inputLabelColor' }
    }
  }
});

export const StyledInput = styledTheme(
  InputNextUI as ComponentType<
    Partial<
      Omit<InputPropsNextUI, keyof InputProps | 'ref'> & InputProps & { ref: Ref<HTMLInputElement> }
    >
  >,
  {
    boxSizing: 'content-box',
    width: '$space$fit'
  }
);

export const StyledLabelGap = styledTheme('div', {
  width: '$space$full',
  marginBottom: '$$inputLabelGap',
  lineHeight: '$lineHeights$md',
  fontSize: '$$inputLabelFontSize'
});

export const StyledInputWrapper = styledTheme('div', {
  boxSizing: 'border-box',
  display: 'grid',
  width: '$space$fit',

  [`${NextUIEl.INPUT_CONTAINER}--hover`]: { transform: 'none' },
  [`${NextUIEl.INPUT_WRAPPER}`]: { borderRadius: '$$inputControlBorderRadius' },
  [`${NextUIEl.INPUT}`]: { color: 'inherit' },
  [`${NextUIEl.INPUT}::placeholder`]: { color: '$colors$placeholder' },
  [`${NextUIEl.HELPER_TEXT_CONTAINER}`]: { mb: '$space$2', scale: 1.2 },
  [`${NextUIEl.HELPER_TEXT}`]: { color: '$$inputLabelColor' },
  [`${NextUIEl.INPUT_CONTENT}`]: { pointerEvents: 'auto', cursor: 'pointer' },
  [`${NextUIEl.LABEL_LEFT}`]: {
    color: '$$inputControlColor',
    borderTopLeftRadius: '$$inputControlBorderRadius',
    borderBottomLeftRadius: '$$inputControlBorderRadius'
  },
  [`${NextUIEl.LABEL_RIGHT}`]: {
    color: '$$inputControlColor',
    borderTopRightRadius: '$$inputControlBorderRadius',
    borderBottomRightRadius: '$$inputControlBorderRadius'
  },

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
    shape: {
      default: {
        $$inputControlBorderRadius: '$radii$xs'
        // [`${NextUIEl.INPUT_WRAPPER}`]: { borderRadius: '$radii$xs' }
      },
      round: {
        $$inputControlBorderRadius: '$radii$2xl'
        // [`${NextUIEl.INPUT_WRAPPER}`]: { borderRadius: '$radii$2xl' }
      },
      square: {
        $$inputControlBorderRadius: 0
        // [`${NextUIEl.INPUT_WRAPPER}`]: { borderRadius: 0 }
      }
    },
    variant: {
      default: {
        $$inputLabelGap: '$space$3',

        [`${NextUIEl.LABEL}`]: { color: '$$inputLabelColor' },
        [`${NextUIEl.INPUT_WRAPPER}`]: {
          color: '$$inputControlColor',
          backgroundColor: '$$inputControlBackgroundColor',
          backgroundColorLighter: '$$inputControlBackgroundColorOpacity'
        }
      },
      bordered: {
        $$inputLabelGap: '$space$3',

        [`${NextUIEl.LABEL}`]: { color: '$$inputLabelColor' },
        [`${NextUIEl.INPUT_WRAPPER}`]: {
          color: '$$inputBorderedControlColor',
          boxShadow: '0 0 0 1px $$inputControlBorderColor'
        },
        [`${NextUIEl.INPUT_WRAPPER}:hover, ${NextUIEl.INPUT_WRAPPER}--hover`]: {
          boxShadow: '0 0 0 1px $$inputControlFocusBorderColor'
        },
        [`${NextUIEl.LABEL_LEFT}`]: {
          backgroundColor: '$$inputControlBackgroundColor',
          backgroundColorLighter: '$$inputControlBackgroundColorOpacity'
        },
        [`${NextUIEl.LABEL_RIGHT}`]: {
          backgroundColor: '$$inputControlBackgroundColor',
          backgroundColorLighter: '$$inputControlBackgroundColorOpacity'
        }
      },
      underlined: {
        $$inputLabelGap: '$space$0',

        [`${NextUIEl.LABEL}`]: { color: '$$inputLabelColor', marginBottom: '$space$0' },
        [`${NextUIEl.INPUT_WRAPPER}`]: { color: '$$inputBorderedControlColor' },
        [`${NextUIEl.INPUT_WRAPPER}::before`]: { background: '$$inputLabelColor' },
        [`${NextUIEl.INPUT_WRAPPER}::after`]: { background: '$colors$border' },
        [`${NextUIEl.LABEL_LEFT}`]: {
          color: '$$inputLabelColor',
          borderRightColor: '$$inputLabelColor'
        },
        [`${NextUIEl.LABEL_RIGHT}`]: {
          color: '$$inputLabelColor',
          borderLeftColor: '$$inputLabelColor'
        }
      }
    },
    color: {
      default: colorTokens('default'),
      primary: colorTokens('primary'),
      secondary: colorTokens('secondary'),
      tertiary: colorTokens('tertiary'),
      info: colorTokens('info'),
      error: colorTokens('error'),
      success: colorTokens('success'),
      warning: colorTokens('warning')
    },
    status: {
      default: statusTokens('default'),
      primary: statusTokens('primary'),
      secondary: statusTokens('secondary'),
      tertiary: statusTokens('tertiary'),
      info: statusTokens('info'),
      error: statusTokens('error'),
      success: statusTokens('success'),
      warning: statusTokens('warning')
    },
    labelPlaceholder: {
      true: {
        [`${NextUIEl.LABEL_PLACEHOLDER}`]: { color: '$colors$placeholder' },
        [`${NextUIEl.LABEL_PLACEHOLDER_HOVER}, ${NextUIEl.LABEL_PLACEHOLDER_WITH_VALUE}`]: {
          mt: '$$inputLabelMarginTop',
          color: '$$inputLabelColor'
        }
      }
    },
    hotKey: {
      true: {
        [`${NextUIEl.LABEL_RIGHT}`]: {
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
    disabled: {
      true: {
        $$inputControlColor: '$colors$gray400'
      }
    },
    fullWidth: {
      true: {
        width: '$space$full',

        [`${NextUIEl.INPUT_CONTAINER}`]: { width: '$space$full' }
      }
    }
  },

  compoundVariants: [
    {
      variant: 'default',
      hotKey: true,
      css: {
        [`${NextUIEl.LABEL_RIGHT}`]: {
          borderColor: '$$inputLabelColor',
          color: '$$inputLabelColor'
        }
      }
    },
    {
      variant: 'default',
      status: 'default',
      hotKey: true,
      css: {
        [`${NextUIEl.LABEL_RIGHT}`]: {
          borderColor: '$colors$gray500',
          color: '$colors$gray800'
        }
      }
    },
    {
      variant: 'underlined',
      labelPlaceholder: true,
      css: {
        [`${NextUIEl.LABEL_PLACEHOLDER_HOVER}, ${NextUIEl.LABEL_PLACEHOLDER_WITH_VALUE}`]: {
          mt: 'calc($$inputLabelMarginTop + $space$3)',
          pl: '$space$2'
        }
      }
    }
  ]
});
