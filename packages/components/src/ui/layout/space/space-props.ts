import type { ElementHTML } from '@/components/shared';

export type SpaceProps = ElementHTML & {
  /**
   * Changes which tag component outputs
   */
  as?: keyof JSX.IntrinsicElements;
  /**
   * y-axis spacing
   */
  y?: number;
  /**
   * x-axis spacing
   */
  x?: number;
  /**
   * Defines the inline space
   */
  inline?: boolean;
} & Partial<typeof defaultProps>;

export const defaultProps = {
  as: 'div',
  x: 1,
  y: 1
};
