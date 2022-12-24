import { ReactElement } from 'react';
import { FormControl } from '../../../../../types';
import { SelectOptionProps } from '../option/select-option-props';

export type SelectOptionGroupProps = Pick<FormControl, 'label' | 'disabled'> & {
  /**
   * Defines the children of the component.
   */
  children: ReactElement<SelectOptionProps> | ReactElement<SelectOptionProps>[];
};

export const defaultProps = {};
