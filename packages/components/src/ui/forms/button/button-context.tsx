import { createContext } from 'react';
import { ButtonGroupProps } from './group/button-group-props';

export const ButtonContext = createContext<
  Pick<ButtonGroupProps, 'variant' | 'size' | 'color' | 'disabled' | 'shape' | 'fullWidth'>
>({});
