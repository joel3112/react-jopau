import { ReactElement } from 'react';
import type { ElementHTML, WithFlex, Wrap } from '@/components/shared';
import { GridItemProps } from './item/grid-item-props';
import { WithGap } from '@/components/shared';

export type GridProps = ElementHTML &
  WithFlex &
  WithGap<number | Array<number>> & {
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
  };

export const defaultProps = {
  as: 'div',
  wrap: 'wrap',
  columns: 12
};
