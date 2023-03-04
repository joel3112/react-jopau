import { ReactElement } from 'react';
import type { ElementHTML, WithGap, Wrap } from '@/components/shared';
import { GridItemProps } from './item/grid-item-props';

export type GridProps = ElementHTML &
  WithGap & {
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
     * Defines the direction of the flex container.
     */
    direction?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    /**
     * Defines the justify-content style property.
     */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
    /**
     * Defines the align-items style property.
     */
    align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    /**
     * Defines the number of columns of the grid
     */
    columns?: number;
  } & Partial<typeof defaultProps>;

export const defaultProps = {
  as: 'div',
  wrap: 'wrap',
  gap: 0 as WithGap['gap'],
  columns: 12
};
