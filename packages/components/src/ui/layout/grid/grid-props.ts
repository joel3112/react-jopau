import { ReactElement } from 'react';
import type { ElementHTML, WithFlex, Wrap } from '@/components/shared';
import { GridItemProps } from './item/grid-item-props';

export type GridProps = ElementHTML &
  WithFlex & {
    /**
     * Defines the children of the component.
     */
    children: ReactElement<GridItemProps> | ReactElement<GridItemProps>[];
    /**
     * Changes which tag component outputs
     */
    as?: keyof HTMLElementTagNameMap;
    /**
     * Defines if the flex container is wrapped or not.
     */
    wrap?: Wrap;
    /**
     * Defines the number of columns of the grid
     */
    columns?: number;
  } & Partial<typeof defaultProps>;

export const defaultProps = {
  as: 'div',
  wrap: 'wrap',
  gap: 0,
  columns: 12
};
