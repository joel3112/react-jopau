import { createContext } from 'react';
import { RadioGroupProps } from './group/radio-group.props';

export const RadioContext = createContext<
  Pick<
    RadioGroupProps,
    'value' | 'defaultValue' | 'size' | 'color' | 'status' | 'disabled' | 'readOnly'
  >
>({});
