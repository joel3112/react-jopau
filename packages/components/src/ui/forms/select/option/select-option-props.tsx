import { FormControl } from '../../../../../types';

export type SelectOptionProps = Pick<FormControl, 'label' | 'disabled'> & {
  /**
   * Defines the children of the component.
   */
  children: string;
  /**
   * Value of the option.
   */
  value: string;
  /**
   * Defines if the option is selected.
   */
  selected?: boolean;
};

export const defaultProps = {};
