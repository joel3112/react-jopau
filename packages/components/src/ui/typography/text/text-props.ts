import { ReactNode } from 'react';
import { ElementHTML, NormalSize, TextColor } from '../../../../types';

export type TextProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: ReactNode;
  /**
   * Changes which tag component outputs
   */
  as?: 'p' | 'span';
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
} & Partial<typeof defaultProps>;

export const defaultProps = {
  as: 'p',
  color: 'inherit',
  size: 'md'
};
