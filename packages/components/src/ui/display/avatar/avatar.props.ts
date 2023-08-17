import { ReactNode } from 'react';
import type { BreakpointsSize, ElementHTML, SimpleColor } from '@/components/shared';

export type AvatarProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children?: string;
  /**
   * Defines the size of the component.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | BreakpointsSize | number;
  /**
   * Defines the color of avatar.
   */
  color?: SimpleColor;
  /**
   * Defines the image source of the component.
   */
  src?: string;
  /**
   * Shows an icon in the avatar.
   */
  icon?: ReactNode;
  /**
   * Defines the square shape of the component.
   */
  squared?: boolean;
  /**
   * Defines if the avatar is bordered. Only works with src.
   */
  bordered?: boolean;
  /**
   * Defines if the avatar is zoomed. Only works with src.
   */
  zoomed?: boolean;
  /**
   * Display pointer cursor on hover.
   */
  pointer?: boolean;
};

export const defaultProps = {
  color: 'default'
};
