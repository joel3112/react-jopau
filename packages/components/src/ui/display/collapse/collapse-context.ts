import { createContext } from 'react';
import { CollapseGroupProps } from './group/collapse-group.props';

export const CollapseContext = createContext<
  Pick<CollapseGroupProps, 'divider' | 'shadow' | 'bordered'>
>({});
