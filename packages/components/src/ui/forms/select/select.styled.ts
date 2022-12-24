import { Input } from '../input/input';
import { styledTheme } from '../../../index';

export const StyledSelectWrapper = styledTheme('div', {
  display: 'block',
  position: 'relative',

  variants: {
    autoWidth: {
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
  color: 'transparent',
  width: '$space$full',
  borderRadius: '$$selectControlBorderRadius',

  variants: {
    size: {
      xs: { $$selectControlHeight: '24px' },
      sm: { $$selectControlHeight: '32px' },
      md: { $$selectControlHeight: '40px' },
      lg: { $$selectControlHeight: '44px' },
      xl: { $$selectControlHeight: '52px' }
    },
    variant: {
      default: { height: '$$selectControlHeight' },
      bordered: { height: '$$selectControlHeight' },
      underlined: { height: 'calc($$selectControlHeight - 4px)', $$selectControlBorderRadius: 0 }
    },
    shape: {
      default: { $$selectControlBorderRadius: '$radii$xs' },
      round: { $$selectControlBorderRadius: '$radii$2xl' },
      square: { $$selectControlBorderRadius: 0 }
    },
    isFocusVisible: {
      true: {
        outline: 'transparent solid 2px',
        outlineOffset: '2px',
        boxShadow: '0 0 0 2px $colors$background, 0 0 0 4px $colors$accent'
      }
    }
  }
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

export const StyledSelectInput = styledTheme(Input, {});
