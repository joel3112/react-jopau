import { ReactElement } from 'react';
import type { ButtonColor, ElementHTML, NormalSize, Shape } from '@/components/shared';
import { ButtonProps } from '../button-props';

export type ButtonGroupProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children: ReactElement<ButtonProps> | ReactElement<ButtonProps>[];
  /**
   * Defines the color of button.
   */
  color?: ButtonColor;
  /**
   * Defines the size of the component.
   */
  size?: NormalSize;
  /**
   * Defines the variant of the component.
   */
  variant?: 'solid' | 'bordered' | 'ghost' | 'flat' | 'clear';
  /**
   * Defines if the button is disabled and not clickable.
   */
  disabled?: boolean;
  /**
   * Defines the shape of the component.
   */
  shape?: Shape;
  /**
   * Defines if the button takes the full width of its parent.
   */
  fullWidth?: boolean;
  /**
   * Defines the axis radio group is aligned.
   */
  orientation?: 'horizontal' | 'vertical';
};

export const defaultProps = {
  variant: 'solid',
  size: 'md',
  color: 'primary',
  shape: 'default',
  orientation: 'horizontal'
};
