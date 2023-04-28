import { ReactElement } from 'react';
import type { FormControl } from '@/components/shared';
import { SelectOptionProps } from '../option/select-option.props';

export type SelectGroupProps = Pick<FormControl, 'label' | 'disabled'> & {
  /**
   * Defines the children of the component.
   */
  children: ReactElement<SelectOptionProps> | ReactElement<SelectOptionProps>[];
};

export const defaultProps = {};
