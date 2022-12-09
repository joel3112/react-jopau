import { ElementHTML, FormControl, NormalColor, NormalSize } from '../../../../types';

export type CheckboxProps = ElementHTML &
  FormControl & {
    /**
     * Defines the children of the component.
     */
    children?: string;
    /**
     * Defines the value of the current element, used when submitting a form.
     */
    value?: string;
    /**
     * Defines if the input element is checked (controlled).
     */
    checked?: boolean;
    /**
     * Defines the default value (uncontrolled) of the input element.
     */
    defaultChecked?: boolean;
    /**
     * Defines the size of the component.
     */
    size?: NormalSize;
    /**
     * Defines the color of input text, border and label.
     */
    color?: NormalColor;
    /**
     * Indeterminism is presentational only. The indeterminate visual representation remains regardless of user interaction
     */
    indeterminate?: boolean;
    /**
     * Defines the round shape of the component.
     */
    rounded?: boolean;
    /**
     * Line in the middle of the label when the element is checked
     */
    throughed?: boolean;
    /**
     * Function to be called when the element value is changed.
     */
    onChange?: (e: boolean) => void;
  } & Partial<typeof defaultProps>;

export const defaultProps = {
  defaultChecked: false,
  size: 'md',
  color: 'primary',
  status: 'default'
};
