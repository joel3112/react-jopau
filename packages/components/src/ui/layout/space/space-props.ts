import { ReactNode } from 'react';
import { ElementHTML } from '../../../../types';

type BasicPosition = 'start' | 'center' | 'end';
export type DirectionSpace = 'row' | 'column' | 'row-reverse' | 'column-reverse';
export type JustifySpace = BasicPosition | 'between' | 'around';
export type AlignSpace = BasicPosition | 'baseline' | 'stretch';

export type SpaceProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Changes which tag component outputs
   */
  as?: keyof HTMLElementTagNameMap;
  /**
   * Defines the direction of the flex container.
   */
  direction?: Required<DirectionSpace>;
  /**
   * Defines if the flex container is wrapped or not.
   */
  wrap?: boolean;
  /**
   * Defines the gap between the flex container's children.
   */
  gap?: number | Array<number>;
  /**
   * Defines the justify-content style property.
   */
  justify?: JustifySpace;
  /**
   * Defines the align-items style property.
   */
  align?: AlignSpace;
} & Partial<typeof defaultProps>;

export const defaultProps = {
  as: 'div',
  direction: 'row'
};
