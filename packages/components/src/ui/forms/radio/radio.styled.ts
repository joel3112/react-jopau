import { ComponentType, Ref } from 'react';
import { Radio as RadioNextUI } from '@nextui-org/react';
import { RadioProps as RadioPropsNextUI } from '@nextui-org/react/types/radio/radio';
import { RadioGroupProps as RadioGroupPropsNextUI } from '@nextui-org/react/types/radio/radio-group';
import { NextUIOverrideCSS, styledTheme } from '@/components/shared';
import { RadioProps } from './radio-props';
import { RadioGroupProps } from './group/radio-group-props';

enum NextUIEl {
  RADIO_GROUP = '.nextui-radio-group',
  RADIO_GROUP_LABEL = '.nextui-radio-group-label',
  RADIO = '.nextui-radio',
  RADIO_POINT = '.nextui-radio-point',
  RADIO_LABEL = '.nextui-radio-label'
}

export const StyledRadioGroup = styledTheme(
  RadioNextUI.Group as ComponentType<
    Partial<
      Omit<RadioGroupPropsNextUI, keyof RadioGroupProps | 'ref'> &
        RadioGroupProps & { ref: Ref<HTMLDivElement> }
    >
  >,
  {
    display: 'inline-block',
    width: '$space$fit',

    [`${NextUIEl.RADIO_GROUP_LABEL}`]: { fontSize: 'calc($$radioLabelFontSize * 0.8)' },
    [`&[aria-orientation="horizontal"] ${NextUIEl.RADIO_GROUP}-items`]: {
      flexWrap: 'wrap',
      gap: '$space$4 0'
    },

    variants: {
      size: {
        xs: { $$radioLabelFontSize: '$space$7', $$radioAsterikFontSize: '$fontSizes$xs' },
        sm: { $$radioLabelFontSize: '$space$8', $$radioAsterikFontSize: '$fontSizes$xs' },
        md: { $$radioLabelFontSize: '$space$9', $$radioAsterikFontSize: '$fontSizes$sm' },
        lg: { $$radioLabelFontSize: '$space$10', $$radioAsterikFontSize: '$fontSizes$md' },
        xl: { $$radioLabelFontSize: '$space$11', $$radioAsterikFontSize: '$fontSizes$lg' }
      },
      isRequired: {
        true: {
          [`${NextUIEl.RADIO_GROUP_LABEL}`]: { position: 'relative' },
          [`${NextUIEl.RADIO_GROUP_LABEL}::after`]: {
            content: '*',
            position: 'absolute',
            top: 3,
            transformOrigin: 'top left',
            color: '$colors$red500',
            marginLeft: '$space$1',
            fontSize: 'calc($$radioAsterikFontSize * 1.5)',
            lineHeight: '$lineHeights$xs'
          }
        }
      }
    }
  }
);

export const StyledRadio = styledTheme(
  RadioNextUI as ComponentType<
    Partial<
      Omit<RadioPropsNextUI, keyof RadioProps | 'ref'> & RadioProps & { ref: Ref<HTMLInputElement> }
    >
  >,
  {
    boxSizing: 'border-box',
    display: 'inline-block',

    [`&${NextUIEl.RADIO}--is-hovered:not([class*="isChecked-true"]) ${NextUIEl.RADIO_POINT}`]: {
      backgroundColor: '$colors$input',
      backgroundColorDarker: 0.2
    },
    [`&${NextUIEl.RADIO}--is-hovered ${NextUIEl.RADIO_POINT}::after`]: {
      borderColor: '$colors$border'
    },
    [`${NextUIEl.RADIO_POINT}::after`]: { borderColor: '$colors$border' },
    [`&${NextUIEl.RADIO}--checked ${NextUIEl.RADIO_POINT}::after`]: {
      borderColor: '$$radioControlColor'
    },
    [`${NextUIEl.RADIO_LABEL}`]: { color: '$$radioLabelColor' },
    [`&${NextUIEl.RADIO}--is-hovered[class*="isChecked-true"] ${NextUIEl.RADIO_POINT}`]: {
      backgroundColor: 'transparent'
    },
    [`&${NextUIEl.RADIO}--is-hovered[class*="isChecked-true"] ${NextUIEl.RADIO_POINT}::after`]: {
      borderColor: '$$radioHoverControlColor',
      backgroundColor: 'transparent'
    },
    [`&[class*="isDisabled-true"] ${NextUIEl.RADIO_LABEL}`]: { opacity: '$opacity$40' },

    variants: {
      color: {
        primary: {
          $$radioControlColor: '$colors$primary500',
          $$radioHoverControlColor: '$colors$primary600'
        },
        secondary: {
          $$radioControlColor: '$colors$secondary500',
          $$radioHoverControlColor: '$colors$secondary600'
        },
        tertiary: {
          $$radioControlColor: '$colors$tertiary500',
          $$radioHoverControlColor: '$colors$tertiary600'
        },
        info: {
          $$radioControlColor: '$colors$blue500',
          $$radioHoverControlColor: '$colors$blue600'
        },
        success: {
          $$radioControlColor: '$colors$green500',
          $$radioHoverControlColor: '$colors$green600'
        },
        error: {
          $$radioControlColor: '$colors$red500',
          $$radioHoverControlColor: '$colors$red600'
        },
        warning: {
          $$radioControlColor: '$colors$yellow500',
          $$radioHoverControlColor: '$colors$yellow600'
        }
      },
      status: {
        default: {
          $$radioControlColor: '$colors$primary500',
          $$radioHoverControlColor: '$colors$primary600',
          $$radioLabelColor: '$colors$text'
        },
        primary: {
          $$radioControlColor: '$colors$primary500',
          $$radioHoverControlColor: '$colors$primary600',
          $$radioLabelColor: '$colors$primary500'
        },
        secondary: {
          $$radioControlColor: '$colors$secondary500',
          $$radioHoverControlColor: '$colors$secondary600',
          $$radioLabelColor: '$colors$secondary500'
        },
        tertiary: {
          $$radioControlColor: '$colors$tertiary500',
          $$radioHoverControlColor: '$colors$tertiary600',
          $$radioLabelColor: '$colors$tertiary500'
        },
        info: {
          $$radioControlColor: '$colors$blue500',
          $$radioHoverControlColor: '$colors$blue600',
          $$radioLabelColor: '$colors$blue500'
        },
        success: {
          $$radioControlColor: '$colors$green500',
          $$radioHoverControlColor: '$colors$green600',
          $$radioLabelColor: '$colors$green500'
        },
        error: {
          $$radioControlColor: '$colors$red500',
          $$radioHoverControlColor: '$colors$red600',
          $$radioLabelColor: '$colors$red500'
        },
        warning: {
          $$radioControlColor: '$colors$yellow500',
          $$radioHoverControlColor: '$colors$yellow600',
          $$radioLabelColor: '$colors$yellow500'
        }
      }
    }
  },
  NextUIOverrideCSS
);
