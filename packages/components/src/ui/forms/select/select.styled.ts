import { SimpleColor } from '../../../../types';
import { Input } from '../input/input';
import { styledTheme } from '../../../index';

const colorTokens = (color: SimpleColor) => {
  return {
    default: { $$selectControlColor: '$colors$text' },
    primary: { $$selectControlColor: '$colors$primary500' },
    secondary: { $$selectControlColor: '$colors$secondary500' },
    tertiary: { $$selectControlColor: '$colors$tertiary500' },
    info: { $$selectControlColor: '$colors$blue500' },
    error: { $$selectControlColor: '$colors$red500' },
    success: { $$selectControlColor: '$colors$green500' },
    warning: { $$selectControlColor: '$colors$yellow500' }
  }[color];
};

export const StyledSelectWrapper = styledTheme('div', {
  display: 'block',
  position: 'relative',

  variants: {
    fullWidth: {
      false: { width: '$space$fit' }
    }
  }
});

export const StyledSelect = styledTheme('select', {
  position: 'absolute',
  bottom: 0,
  left: 0,
  zIndex: 1,
  background: 'transparent',
  webkitAppearance: 'none',
  appearance: 'none',
  border: 'none',
  lineHeight: 'initial',
  width: '$space$full',
  borderRadius: '$$selectControlBorderRadius',
  fontSize: '$$selectControlFontSize',

  '&:focus': {
    outline: 'none',
    boxShadow: 'none'
  },
  '&[disabled]': {
    opacity: '$opacity$60',
    color: '$colors$disabled'
  },

  variants: {
    status: {
      default: colorTokens('default'),
      primary: colorTokens('primary'),
      secondary: colorTokens('secondary'),
      tertiary: colorTokens('tertiary'),
      info: colorTokens('info'),
      error: colorTokens('error'),
      success: colorTokens('success'),
      warning: colorTokens('warning')
    },
    size: {
      xs: {
        $$selectControlFontSize: '$fontSizes$xs',
        $$selectControlHeight: '24px'
      },
      sm: {
        $$selectControlFontSize: '$fontSizes$xs',
        $$selectControlHeight: '32px'
      },
      md: {
        $$selectControlFontSize: '$fontSizes$sm',
        $$selectControlHeight: '40px'
      },
      lg: {
        $$selectControlFontSize: '$fontSizes$md',
        $$selectControlHeight: '44px'
      },
      xl: {
        $$selectControlFontSize: '$fontSizes$lg',
        $$selectControlHeight: '52px'
      }
    },
    variant: {
      default: { height: '$$selectControlHeight', padding: '$space$2 $space$5' },
      bordered: { height: '$$selectControlHeight', padding: '0 calc($space$5 + $space$3)' },
      underlined: {
        height: '$$selectControlHeight',
        padding: '$space$2 $space$3',
        $$selectControlBorderRadius: 0
      }
    },
    shape: {
      default: { $$selectControlBorderRadius: '$radii$xs' },
      round: { $$selectControlBorderRadius: '$radii$2xl' },
      square: { $$selectControlBorderRadius: 0 }
    },
    isPlaceholderVisible: {
      true: { color: '$colors$placeholder' },
      false: { color: '$$selectControlColor' }
    },
    isHelperTextVisible: { true: {} },
    isFocusVisible: {
      true: {
        outline: 'transparent solid $borderWidths$normal !important',
        outlineOffset: '$borderWidths$normal !important',
        boxShadow: '0 0 0 2px $colors$background, 0 0 0 4px $colors$accent !important'
      }
    }
  },

  compoundVariants: [
    {
      variant: 'underlined',
      isHelperTextVisible: true,
      css: {
        bottom: '$space$3'
      }
    }
  ]
});

export const StyledSelectArrow = styledTheme('div', {
  variants: {
    size: {
      xs: { fontSize: '$fontSizes$xs' },
      sm: { fontSize: '$fontSizes$sm' },
      md: { fontSize: '$fontSizes$md' },
      lg: { fontSize: '$fontSizes$lg' },
      xl: { fontSize: '$fontSizes$xl' }
    }
  }
});

export const StyledSelectInput = styledTheme(Input, {
  input: { color: 'transparent !important' }
});
