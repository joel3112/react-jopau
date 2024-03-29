import { ReactNode } from 'react';
import type { ElementHTML, TextColor } from '@/components/shared';

export type HeadingProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Changes which tag component outputs
   */
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  /**
   * Defines the color of the heading.
   */
  color?: TextColor;
};

export const defaultProps = {
  as: 'h1',
  color: 'inherit'
};
