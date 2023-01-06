import { ReactElement } from 'react';
import type { ElementHTML, FormControl, NormalColor, NormalSize } from '@/components/shared';
import { RadioProps } from '../radio-props';

export type RadioGroupProps = ElementHTML &
  FormControl & {
    /**
     * Defines the children of the component.
     */
    children: ReactElement<RadioProps> | ReactElement<RadioProps>[];
    /**
     * Defines the value (controlled) of the current element, used when submitting a form.
     */
    value?: string;
    /**
     * Defines the default value (uncontrolled) of the current element, used when submitting a form.
     */
    defaultValue?: string;
    /**
     * Defines the size of the component.
     */
    size?: NormalSize;
    /**
     * Defines the color of input text, border and label.
     */
    color?: NormalColor;
    /**
     * Defines the axis radio group is aligned.
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Function to be called when the element value is changed.
     */
    onChange?: (e: string) => void;
  } & Partial<typeof defaultProps>;

export const defaultProps = {
  defaultValue: '',
  orientation: 'vertical'
};
