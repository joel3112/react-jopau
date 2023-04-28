import { ReactNode } from 'react';
import type { ElementHTML } from '@/components/shared';

export type HeaderProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children?: ReactNode;
  /**
   * Title of the header.
   */
  title?: string;
  /**
   * Defines the render of the logo.
   */
  logo?: ReactNode;
  /**
   * Maximum width of the container or breakpoint.
   */
  maxWidth?: number | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export const defaultProps = {};
