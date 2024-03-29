import { ReactNode } from 'react';
import type { ElementHTML, FormControl, NormalColor, NormalSize } from '@/components/shared';

export type SwitchProps = ElementHTML &
  Omit<FormControl, 'label' | 'readOnly' | 'required'> & {
    /**
     * Defines the children of the component.
     */
    children?: string;
    /**
     * Defines if the input element is checked (controlled).
     */
    checked?: boolean;
    /**
     * Defines the default value (uncontrolled) of the input element.
     */
    defaultChecked?: boolean;
    /**
     * Defines the variant of the component.
     */
    variant?: 'default' | 'bordered';
    /**
     * Defines the size of the component.
     */
    size?: NormalSize;
    /**
     * Defines the color of input text, border and label.
     */
    color?: NormalColor;
    /**
     * Defines the square shape of the component.
     */
    squared?: boolean;
    /**
     * Add icon for both status (on and off)
     */
    icon?: ReactNode;
    /**
     * Add icon for status on
     */
    iconOn?: ReactNode;
    /**
     * Add icon for status off
     */
    iconOff?: ReactNode;
    /**
     * Function to be called when the element value is changed.
     */
    onChange?: (e: boolean) => void;
  };

export const defaultProps = {
  defaultChecked: false,
  variant: 'default',
  size: 'md',
  color: 'primary'
};
