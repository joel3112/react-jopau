import type { ElementHTML, FormControl } from '../../../../types';
import { InputProps } from '../input/input-props';
import { ChangeEvent, FocusEvent } from 'react';

export type TextareaProps = ElementHTML &
  FormControl &
  Pick<
    InputProps,
    | 'value'
    | 'defaultValue'
    | 'labelPlaceholder'
    | 'placeholder'
    | 'size'
    | 'color'
    | 'variant'
    | 'shape'
    | 'helperText'
    | 'autoComplete'
    | 'fullWidth'
  > & {
    /**
     * Defines the number of rows of the textarea element.
     */
    rows?: number;
    /**
     * Defines the minimum number of rows of the textarea element.
     */
    minRows?: number;
    /**
     * Defines the maximum number of rows of the textarea element.
     */
    maxRows?: number;
    /**
     * Function to be called when the element value is changed.
     */
    onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * Function to be called when the element is focused.
     */
    onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Function to be called when the element is blurred.
     */
    onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * Function to be called when the height of the textarea changes.
     */
    onHeightChange?: (height: number) => void;
  } & Partial<typeof defaultProps>;

export const defaultProps = {
  defaultValue: '',
  size: 'md',
  variant: 'default',
  shape: 'default',
  color: 'default',
  status: 'default',
  autoComplete: 'off',
  minRows: 3,
  maxRows: 6
};
