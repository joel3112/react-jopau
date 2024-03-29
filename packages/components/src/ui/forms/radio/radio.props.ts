import { ReactNode } from 'react';
import type { ElementHTML, FormControl, NormalColor, NormalSize } from '@/components/shared';

export type RadioProps = ElementHTML &
  Omit<FormControl, 'name' | 'label' | 'readOnly' | 'required'> & {
    /**
     * Defines the children of the component.
     */
    children?: string;
    /**
     * Defines the value of the current element, used when submitting a form.
     */
    value: string;
    /**
     * Defines the description of the component.
     */
    description?: ReactNode;
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
     * Function to be called when the element value is changed.
     */
    onChange?: (e: boolean) => void;
  };

export const defaultProps = {
  size: 'md',
  color: 'primary',
  status: 'default'
};
