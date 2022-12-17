import { ComponentType, Ref } from 'react';
import { Checkbox as CheckboxNextUI } from '@nextui-org/react';
import { CheckboxProps as CheckboxPropsNextUI } from '@nextui-org/react/types/checkbox/checkbox';
import { CheckboxProps } from './checkbox-props';
import { CheckboxGroupProps } from './group/checkbox-group-props';
import { styledTheme } from '../../../index';

enum NextUIEl {
  CHECKBOX = '.nextui-checkbox',
  CHECKBOX_MASK = '.nextui-checkbox-mask',
  CHECKBOX_TEXT = '.nextui-checkbox-text'
}

export const StyledCheckboxGroup = styledTheme(
  CheckboxNextUI.Group as ComponentType<
    Partial<
      Omit<unknown, keyof CheckboxGroupProps | 'ref'> &
        CheckboxGroupProps & {
          ref: Ref<HTMLDivElement>;
          isDisabled?: boolean;
          isReadOnly?: boolean;
        }
    >
  >,
  {
    display: 'inline-block',
    width: '$space$fit'
  }
);

export const StyledCheckbox = styledTheme(
  CheckboxNextUI as ComponentType<
    Partial<
      Omit<CheckboxPropsNextUI, keyof CheckboxProps | 'ref'> &
        CheckboxProps & { ref: Ref<HTMLInputElement> }
    >
  >,
  {
    boxSizing: 'border-box',
    width: '$space$fit',

    [`&${NextUIEl.CHECKBOX}--checked ${NextUIEl.CHECKBOX_MASK}::after, ${NextUIEl.CHECKBOX_MASK}[class*="isIndeterminate-true"]::after`]:
      {
        backgroundColor: '$$checkboxControlColor'
      },
    [`&${NextUIEl.CHECKBOX}--hovered ${NextUIEl.CHECKBOX_MASK}::after, &${NextUIEl.CHECKBOX}--hovered ${NextUIEl.CHECKBOX_MASK}[class*="isIndeterminate-true"]::after`]:
      {
        backgroundColor: '$$checkboxHoverControlColor'
      },
    [`${NextUIEl.CHECKBOX_TEXT}`]: { color: '$$checkboxTextColor' },
    [`&[class*="isDisabled-true"] ${NextUIEl.CHECKBOX_TEXT}`]: { opacity: '$opacity$40' },

    variants: {
      color: {
        primary: {
          $$checkboxControlColor: '$colors$primary500',
          $$checkboxHoverControlColor: '$colors$primary700'
        },
        secondary: {
          $$checkboxControlColor: '$colors$secondary500',
          $$checkboxHoverControlColor: '$colors$secondary700'
        },
        tertiary: {
          $$checkboxControlColor: '$colors$tertiary500',
          $$checkboxHoverControlColor: '$colors$tertiary700'
        },
        info: {
          $$checkboxControlColor: '$colors$blue500',
          $$checkboxHoverControlColor: '$colors$blue700'
        },
        success: {
          $$checkboxControlColor: '$colors$green500',
          $$checkboxHoverControlColor: '$colors$green700'
        },
        error: {
          $$checkboxControlColor: '$colors$red500',
          $$checkboxHoverControlColor: '$colors$red700'
        },
        warning: {
          $$checkboxControlColor: '$colors$yellow500',
          $$checkboxHoverControlColor: '$colors$yellow700'
        }
      },
      status: {
        default: {
          $$checkboxControlColor: '$colors$primary500',
          $$checkboxHoverControlColor: '$colors$primary700',
          $$checkboxTextColor: '$colors$text'
        },
        primary: {
          $$checkboxControlColor: '$colors$primary500',
          $$checkboxHoverControlColor: '$colors$primary700',
          $$checkboxTextColor: '$colors$primary500'
        },
        secondary: {
          $$checkboxControlColor: '$colors$secondary500',
          $$checkboxHoverControlColor: '$colors$secondary700',
          $$checkboxTextColor: '$colors$secondary500'
        },
        tertiary: {
          $$checkboxControlColor: '$colors$tertiary500',
          $$checkboxHoverControlColor: '$colors$tertiary700',
          $$checkboxTextColor: '$colors$tertiary500'
        },
        info: {
          $$checkboxControlColor: '$colors$blue500',
          $$checkboxHoverControlColor: '$colors$blue700',
          $$checkboxTextColor: '$colors$blue500'
        },
        success: {
          $$checkboxControlColor: '$colors$green500',
          $$checkboxHoverControlColor: '$colors$green700',
          $$checkboxTextColor: '$colors$green500'
        },
        error: {
          $$checkboxControlColor: '$colors$red500',
          $$checkboxHoverControlColor: '$colors$red700',
          $$checkboxTextColor: '$colors$red500'
        },
        warning: {
          $$checkboxControlColor: '$colors$yellow500',
          $$checkboxHoverControlColor: '$colors$yellow700',
          $$checkboxTextColor: '$colors$yellow500'
        }
      }
    }
  }
);
