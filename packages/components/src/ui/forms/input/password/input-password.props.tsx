import { ReactNode } from 'react';
import { Eye, EyeOff } from '@/components/icons';
import { InputProps } from '../input.props';

export type InputPasswordProps = Omit<InputProps, 'type' | 'icon' | 'iconPosition'> & {
  /**
   * Defines if the toggle icon is visible.
   */
  hideToggle?: boolean;
  /**
   * Custom icon for the visible password.
   * See <a href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a> for more details.
   */
  visibleIcon?: ReactNode;
  /**
   * Custom icon for the hidden password.
   * See <a href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a> for more details.
   */
  hiddenIcon?: ReactNode;
};

export const defaultProps = {
  size: 'md',
  variant: 'default',
  color: 'default',
  status: 'default',
  autoComplete: 'off',
  visibleIcon: (<Eye />) as ReactNode,
  hiddenIcon: (<EyeOff />) as ReactNode
};
