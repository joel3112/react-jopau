import { ComponentType, ForwardedRef } from 'react';
import { Textarea as TextareaNextUI } from '@nextui-org/react';
import { TextareaProps as TextareaPropsNextUI } from '@nextui-org/react/types/textarea';
import { NextUIOverrideCSS, styledTheme } from '@/components/shared';
import { TextareaProps } from './textarea.props';
import { StyledInputWrapper } from '../input/input.styled';

enum NextUIEl {
  LABEL = '.nextui-input-block-label'
}

export const StyledTextarea = styledTheme(
  TextareaNextUI as ComponentType<
    Partial<
      Omit<TextareaPropsNextUI, keyof TextareaProps | 'ref'> &
        TextareaProps & { ref: ForwardedRef<HTMLTextAreaElement> }
    >
  >,
  {
    boxSizing: 'content-box',
    width: '$space$fit'
  },
  NextUIOverrideCSS
);

export const StyledTextareaWrapper = styledTheme(StyledInputWrapper, {
  variants: {
    required: {
      true: {
        [`${NextUIEl.LABEL}::after`]: {
          content: '*',
          position: 'absolute',
          top: 2,
          transformOrigin: 'top left',
          color: '$colors$red500',
          marginLeft: '$space$1',
          fontSize: 'calc($$inputLabelFontSize * 1.5)',
          lineHeight: '$lineHeights$xs'
        }
      }
    }
  }
});
