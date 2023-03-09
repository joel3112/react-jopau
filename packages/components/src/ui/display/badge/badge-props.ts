import { ReactNode } from 'react';
import type { ElementHTML, NormalSize, SimpleColor } from '@/components/shared';

export type BadgeProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children?: ReactNode;
  /**
   * The content of the badge. The badge will be rendered relative to its children.
   */
  content?: ReactNode;
  /**
   * Defines the size of the component.
   */
  size?: NormalSize;
  /**
   * Defines the variant of the component.
   */
  variant?: 'solid' | 'flat' | 'dot' | 'points' | 'bordered';
  /**
   * Defines the color of the component.
   */
  color?: SimpleColor;
  /**
   * Defines the position of the badge content.
   */
  placement?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  /**
   * Defines the wrapped shape the badge should overlap.
   */
  shape?: 'circle' | 'rectangle';
  /**
   * Defines if the badge should be squared.
   */
  squared?: boolean;
  /**
   * Defines the horizontal offset of the badge content.
   */
  horizontalOffset?: string | number;
  /**
   * Defines the vertical offset of the badge content.
   */
  verticalOffset?: string | number;
} & Partial<typeof defaultProps>;

export const defaultProps = {
  size: 'md',
  variant: 'solid',
  color: 'default',
  placement: 'top-right',
  shape: 'rectangle'
};
