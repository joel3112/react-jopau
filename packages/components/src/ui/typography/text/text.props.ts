import { ReactNode } from 'react';
import type { ElementHTML, NormalSize, TextColor } from '@/components/shared';

export type TextProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Changes which tag component outputs
   */
  as?: 'p' | 'div' | 'span' | 'code' | 'mark' | 'kbd' | 'strong' | 'del' | 'i' | 'u';
  /**
   * Defines the color of the text.
   */
  color?: TextColor;
  /**
   * Defines the size of the component.
   */
  size?: NormalSize | '2xl' | '3xl';
  /**
   * Defines the line clamp of the component.
   */
  maxLines?: number;
};

export const defaultProps = {
  as: 'p',
  color: 'inherit',
  size: 'md'
};
