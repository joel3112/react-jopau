import { createContext } from 'react';
import { CheckboxGroupProps } from './group/checkbox-group.props';

export const CheckboxContext = createContext<
  Pick<
    CheckboxGroupProps,
    'value' | 'defaultValue' | 'size' | 'color' | 'status' | 'disabled' | 'readOnly'
  >
>({});
