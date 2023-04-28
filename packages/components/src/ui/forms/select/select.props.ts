import { ChangeEvent, FocusEvent, ReactElement } from 'react';
import type { ElementHTML, FormControl, NormalSize, Shape, SimpleColor } from '@/components/shared';
import { SelectOptionProps } from './option/select-option.props';
import { SelectGroupProps } from './group/select-group.props';

export type SelectProps = ElementHTML &
  Omit<FormControl, 'readOnly'> & {
    /**
     * Defines the children of the component.
     */
    children:
      | ReactElement<SelectOptionProps>
      | ReactElement<SelectGroupProps>
      | ReactElement<SelectOptionProps>[]
      | ReactElement<SelectGroupProps>[];
    /**
     * Defines the value (controlled) of the current element, used when submitting a form.
     */
    value?: string;
    /**
     * Defines the default value (uncontrolled) of the current element, used when submitting a form.
     */
    defaultValue?: string;
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
     * Defines if the button takes the full width of its parent.
     */
    fullWidth?: boolean;
    /**
     * Function to be called when the element value is changed.
     */
    onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
    /**
     * Function to be called when the element is focused.
     */
    onFocus?: (e: FocusEvent<HTMLSelectElement>) => void;
    /**
     * Function to be called when the element is blurred.
     */
    onBlur?: (e: FocusEvent<HTMLSelectElement>) => void;
  };

export const defaultProps = {
  defaultValue: '',
  size: 'md',
  variant: 'default',
  shape: 'default',
  color: 'default',
  status: 'default'
};
