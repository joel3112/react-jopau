import { ComponentType, Ref } from 'react';
import { Input as InputNextUI, InputProps as InputPropsNextUI } from '@nextui-org/react';
import { SimpleColor } from '../../../../types';
import { NextUIOverrideCSS } from '../../../utils/override';
import { InputProps } from './input-props';
import { styledTheme } from '../../../index';

const colorTokens = (color: SimpleColor) => {
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

const statusTokens = (status: SimpleColor) => {
  return {
    default: {
      $$inputLabelColor: '$colors$text',
      $$inputContentLabelColor: '$colors$black',
      $$inputControlColor: '$colors$text',
      $$inputBorderedControlColor: '$colors$text',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$text',
      $$inputControlBackgroundColor: '$colors$input',
      $$inputControlBackgroundColorOpacity: 0,
      $$inputHotkeyBackgroundColor: '$colors$background'
    },
    primary: {
      $$inputLabelColor: '$colors$primary500',
      $$inputContentLabelColor: '$colors$primary700',
      $$inputControlColor: '$colors$primary700',
      $$inputBorderedControlColor: '$colors$primary700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$primary500',
      $$inputControlBackgroundColor: '$colors$primary200',
      $$inputControlBackgroundColorOpacity: 0.7,
      $$inputHotkeyBackgroundColor: '$colors$primary200'
    },
    secondary: {
      $$inputLabelColor: '$colors$secondary500',
      $$inputContentLabelColor: '$colors$secondary700',
      $$inputControlColor: '$colors$secondary700',
      $$inputBorderedControlColor: '$colors$secondary700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$secondary500',
      $$inputControlBackgroundColor: '$colors$secondary200',
      $$inputControlBackgroundColorOpacity: 0.7,
      $$inputHotkeyBackgroundColor: '$colors$secondary200'
    },
    tertiary: {
      $$inputLabelColor: '$colors$tertiary500',
      $$inputContentLabelColor: '$colors$tertiary700',
      $$inputControlColor: '$colors$tertiary700',
      $$inputBorderedControlColor: '$colors$tertiary700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$tertiary500',
      $$inputControlBackgroundColor: '$colors$tertiary200',
      $$inputControlBackgroundColorOpacity: 0.7,
      $$inputHotkeyBackgroundColor: '$colors$tertiary200'
    },
    info: {
      $$inputLabelColor: '$colors$blue500',
      $$inputContentLabelColor: '$colors$blue700',
      $$inputControlColor: '$colors$blue700',
      $$inputBorderedControlColor: '$colors$blue700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$blue500',
      $$inputControlBackgroundColor: '$colors$blue200',
      $$inputControlBackgroundColorOpacity: 0.7,
      $$inputHotkeyBackgroundColor: '$colors$blue200'
    },
    error: {
      $$inputLabelColor: '$colors$red500',
      $$inputContentLabelColor: '$colors$red700',
      $$inputControlColor: '$colors$red700',
      $$inputBorderedControlColor: '$colors$red700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$red500',
      $$inputControlBackgroundColor: '$colors$red200',
      $$inputControlBackgroundColorOpacity: 0.7,
      $$inputHotkeyBackgroundColor: '$colors$red200'
    },
    success: {
      $$inputLabelColor: '$colors$green500',
      $$inputContentLabelColor: '$colors$green700',
      $$inputControlColor: '$colors$green700',
      $$inputBorderedControlColor: '$colors$green700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$green500',
      $$inputControlBackgroundColor: '$colors$green200',
      $$inputControlBackgroundColorOpacity: 0.7,
      $$inputHotkeyBackgroundColor: '$colors$green200'
    },
    warning: {
      $$inputLabelColor: '$colors$yellow500',
      $$inputContentLabelColor: '$colors$yellow700',
      $$inputControlColor: '$colors$yellow700',
      $$inputBorderedControlColor: '$colors$yellow700',
      $$inputControlBorderColor: '$colors$border',
      $$inputControlFocusBorderColor: '$colors$yellow500',
      $$inputControlBackgroundColor: '$colors$yellow200',
      $$inputControlBackgroundColorOpacity: 0.7,
      $$inputHotkeyBackgroundColor: '$colors$yellow200'
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
  TEXTAREA = '.nextui-input-textarea',
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

export const StyledHotKey = styledTheme('div', {
  cursor: 'pointer',
  height: 'auto',
  maxHeight: '65%',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  boxShadow: '0 0 2px 0 rgb(0 0 0 / 40%)',
  transition: 'border 0.12s ease 0s',
  p: '$space$3',
  marginLeft: '$space$4',
  marginRight: '$space$4',
  opacity: '$opacity$80',
  borderRadius: '$radii$xs',
  background: '$colors$input',

  kbd: {
    boxShadow: 'none',
    scale: 0.9,
    fontSize: '$$inputLabelFontSize',
    color: '$$inputControlColor'
  },

  variants: {
    default: {
      true: { background: '$$inputHotkeyBackgroundColor' }
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
  },
  NextUIOverrideCSS
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
  [`${NextUIEl.HELPER_TEXT_CONTAINER}`]: { mb: '$space$2' },
  [`${NextUIEl.HELPER_TEXT}`]: {
    fontSize: '$fontSizes$xs',
    color: '$$inputLabelColor',
    height: '$space$6'
  },
  [`${NextUIEl.INPUT_CONTENT}`]: { pointerEvents: 'auto', cursor: 'pointer' },
  [`${NextUIEl.LABEL_LEFT}`]: {
    color: '$$inputContentLabelColor',
    borderTopLeftRadius: '$$inputControlBorderRadius',
    borderBottomLeftRadius: '$$inputControlBorderRadius'
  },
  [`${NextUIEl.LABEL_RIGHT}`]: {
    color: '$$inputContentLabelColor',
    borderTopRightRadius: '$$inputControlBorderRadius',
    borderBottomRightRadius: '$$inputControlBorderRadius'
  },

  [`${NextUIEl.TEXTAREA}`]: { color: 'inherit' },
  [`${NextUIEl.TEXTAREA}::placeholder`]: { color: '$colors$placeholder' },

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
      },
      round: {
        $$inputControlBorderRadius: '$radii$2xl'
      },
      square: {
        $$inputControlBorderRadius: 0
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
        $$inputHotkeyBackgroundColor: '$colors$input',

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
        [`${NextUIEl.INPUT_CONTENT}--right`]: {
          height: '100%',
          display: 'flex',
          alignItems: 'center'
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
