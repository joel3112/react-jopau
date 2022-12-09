import {
  ContentPosition,
  ElementHTML,
  FormControl,
  NormalSize,
  Shape,
  SimpleColor,
  WithIcon
} from '../../../../types';
import { ChangeEvent, FocusEvent, MouseEvent } from 'react';

export type InputProps = ElementHTML &
  FormControl &
  WithIcon & {
    /**
     * Changes which tag component outputs
     */
    as?: 'input' | 'textarea';
    /**
     * Defines the value (controlled) of the current element, used when submitting a form.
     */
    value?: string;
    /**
     * Defines the default value (uncontrolled) of the current element, used when submitting a form.
     */
    defaultValue?: string;
    /**
     * Defines the type of the input element.
     */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    /**
     * Defines the placeholder, it becomes a label element when the input is focused.
     */
    labelPlaceholder?: string;
    /**
     * Defines the placeholder of the input element.
     */
    placeholder?: string;
    /**
     * Defines the size of the component.
     */
    size?: NormalSize;
    /**
     * Defines the color of input text, border and label.
     */
    color?: SimpleColor;
    /**
     * Defines the variant of the component.
     */
    variant?: 'default' | 'bordered' | 'underlined';
    /**
     * Defines the shape of the component.
     */
    shape?: Shape;
    /**
     * Defines the helper text of the input element.
     */
    helperText?: string;
    /**
     * Defines if the input element can be cleared by clicking the clear button.
     */
    clearable?: boolean;
    /**
     * Defines if the input has autocomplete enabled.
     */
    autoComplete?: 'on' | 'off';
    /**
     * Defines if the button takes the fit width of its parent.
     */
    autoWidth?: boolean;
    /**
     * Defines the hot keybinding to focus the input element.
     */
    hotKey?: string;
    /**
     * Defines the text label at left of the input
     */
    labelLeft?: string;
    /**
     * Defines the text label at right of the input
     */
    labelRight?: string;
    /**
     * Function to be called when the element value is changed.
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Function to be called when the element is focused.
     */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * Function to be called when the element is blurred.
     */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * Function to be called when the content is clicked.
     */
    onIconClick?: (key: ContentPosition, e: MouseEvent) => void;
    /**
     * Function to be called when the clear button is clicked.
     */
    onClearClick?: (e: MouseEvent) => void;
  } & Partial<typeof defaultProps>;

export const defaultProps = {
  as: 'input',
  defaultValue: '',
  type: 'text',
  size: 'md',
  variant: 'default',
  shape: 'default',
  color: 'default',
  status: 'default',
  autoComplete: 'off',
  iconPosition: 'left'
};
