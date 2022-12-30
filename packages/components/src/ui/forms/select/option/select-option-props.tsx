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
};

export const defaultProps = {};
