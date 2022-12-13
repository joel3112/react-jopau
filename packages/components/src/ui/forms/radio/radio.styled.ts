import { ComponentType, Ref } from 'react';
import { Radio as RadioNextUI } from '@nextui-org/react';
import type { RadioProps as RadioPropsNextUI } from '@nextui-org/react/types/radio/radio';
import { RadioGroupProps as RadioGroupPropsNextUI } from '@nextui-org/react/types/radio/radio-group';
import { RadioProps } from './radio-props';
import { RadioGroupProps } from './group/radio-group-props';
import { styledTheme } from '../../../index';

enum NextUIEl {
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
    display: 'block',
    width: '$space$fit',

    variants: {
      color: {
        primary: {
          $$radioControlColor: '$colors$primary500',
          $$radioHoverControlColor: '$colors$primary700'
        },
        secondary: {
          $$radioControlColor: '$colors$secondary500',
          $$radioHoverControlColor: '$colors$secondary700'
        },
        tertiary: {
          $$radioControlColor: '$colors$tertiary500',
          $$radioHoverControlColor: '$colors$tertiary700'
        },
        info: {
          $$radioControlColor: '$colors$blue500',
          $$radioHoverControlColor: '$colors$blue700'
        },
        success: {
          $$radioControlColor: '$colors$green500',
          $$radioHoverControlColor: '$colors$green700'
        },
        error: {
          $$radioControlColor: '$colors$red500',
          $$radioHoverControlColor: '$colors$red700'
        },
        warning: {
          $$radioControlColor: '$colors$yellow500',
          $$radioHoverControlColor: '$colors$yellow700'
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
    display: 'block',

    [`&${NextUIEl.RADIO}--checked ${NextUIEl.RADIO_POINT}::after`]: {
      borderColor: '$$radioControlColor'
    },
    [`${NextUIEl.RADIO_LABEL}`]: { color: '$$radioLabelColor' },
    [`&${NextUIEl.RADIO}--is-hovered[class*="isChecked-true"] ${NextUIEl.RADIO_POINT}::after`]: {
      borderColor: '$$radioHoverControlColor'
    },
    [`&[class*="isDisabled-true"] ${NextUIEl.RADIO_LABEL}`]: { opacity: '$opacity$40' },

    variants: {
      color: {
        primary: {
          $$radioControlColor: '$colors$primary500',
          $$radioHoverControlColor: '$colors$primary700'
        },
        secondary: {
          $$radioControlColor: '$colors$secondary500',
          $$radioHoverControlColor: '$colors$secondary700'
        },
        tertiary: {
          $$radioControlColor: '$colors$tertiary500',
          $$radioHoverControlColor: '$colors$tertiary700'
        },
        info: {
          $$radioControlColor: '$colors$blue500',
          $$radioHoverControlColor: '$colors$blue700'
        },
        success: {
          $$radioControlColor: '$colors$green500',
          $$radioHoverControlColor: '$colors$green700'
        },
        error: {
          $$radioControlColor: '$colors$red500',
          $$radioHoverControlColor: '$colors$red700'
        },
        warning: {
          $$radioControlColor: '$colors$yellow500',
          $$radioHoverControlColor: '$colors$yellow700'
        }
      },
      status: {
        default: {
          $$radioControlColor: '$colors$primary500',
          $$radioHoverControlColor: '$colors$primary700',
          $$radioLabelColor: '$colors$text'
        },
        primary: {
          $$radioControlColor: '$colors$primary500',
          $$radioHoverControlColor: '$colors$primary700',
          $$radioLabelColor: '$colors$primary500'
        },
        secondary: {
          $$radioControlColor: '$colors$secondary500',
          $$radioHoverControlColor: '$colors$secondary700',
          $$radioLabelColor: '$colors$secondary500'
        },
        tertiary: {
          $$radioControlColor: '$colors$tertiary500',
          $$radioHoverControlColor: '$colors$tertiary700',
          $$radioLabelColor: '$colors$tertiary500'
        },
        info: {
          $$radioControlColor: '$colors$blue500',
          $$radioHoverControlColor: '$colors$blue700',
          $$radioLabelColor: '$colors$blue500'
        },
        success: {
          $$radioControlColor: '$colors$green500',
          $$radioHoverControlColor: '$colors$green700',
          $$radioLabelColor: '$colors$green500'
        },
        error: {
          $$radioControlColor: '$colors$red500',
          $$radioHoverControlColor: '$colors$red700',
          $$radioLabelColor: '$colors$red500'
        },
        warning: {
          $$radioControlColor: '$colors$yellow500',
          $$radioHoverControlColor: '$colors$yellow700',
          $$radioLabelColor: '$colors$yellow500'
        }
      }
    }
  }
);
