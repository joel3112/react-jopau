import { ReactNode } from 'react';
import { ElementHTML } from '@/components/shared';

export type GridItemProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children?: ReactNode;
  /**
   * Changes which tag component outputs
   */
  as?: keyof HTMLElementTagNameMap;
  /**
   * Defines the number of columns the component is going to use in extra small devices.
   */
  xs?: boolean | number;
  /**
   * Defines the number of columns the component is going to use in small devices.
   */
  sm?: boolean | number;
  /**
   * Defines the number of columns the component is going to use in medium devices.
   */
  md?: boolean | number;
  /**
   * Defines the number of columns the component is going to use in large devices.
   */
  lg?: boolean | number;
  /**
   * Defines the number of columns the component is going to use in extra large devices.
   */
  xl?: boolean | number;
} & Partial<typeof defaultProps>;

export const defaultProps = {
  as: 'div',
  direction: 'row'
};
