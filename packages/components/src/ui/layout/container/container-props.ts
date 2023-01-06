import { ReactNode } from 'react';
import type { ElementHTML } from '@/components/shared';

export type ContainerProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Maximum width of the container or breakpoint.
   */
  maxWidth?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Defines the gap horizontally and vertically in the container.
   */
  gap?: number | Array<number>;
  /**
   * Centered horizontally the container.
   */
  centered?: boolean;
} & Partial<typeof defaultProps>;

export const defaultProps = {
  centered: false
};
