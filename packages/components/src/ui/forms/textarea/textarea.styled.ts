import { ComponentType, Ref } from 'react';
import { Textarea as TextareaNextUI } from '@nextui-org/react';
import { TextareaProps as TextareaPropsNextUI } from '@nextui-org/react/types/textarea';
import { TextareaProps } from './textarea-props';
import { StyledInputWrapper } from '../input/input.styled';
import { styledTheme } from '../../../index';

export const StyledTextarea = styledTheme(
  TextareaNextUI as ComponentType<
    Partial<
      Omit<TextareaPropsNextUI, keyof TextareaProps | 'ref'> &
        TextareaProps & { ref: Ref<HTMLTextAreaElement> }
    >
  >,
  {
    boxSizing: 'content-box',
    width: '$space$fit'
  }
);

export const StyledTextareaWrapper = styledTheme(StyledInputWrapper, {});
