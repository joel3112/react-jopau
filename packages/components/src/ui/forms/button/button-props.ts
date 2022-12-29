import { MouseEvent, ReactNode } from 'react';
import { ButtonColor, ElementHTML, NormalSize, Shape, WithIcon } from '../../../../types';

export type ButtonProps = ElementHTML &
  WithIcon & {
    /**
     * Defines the children of the component.
     */
    children?: ReactNode;
    /**
     * Defines the native type of the button element.
     */
    type?: 'button' | 'submit' | 'reset';
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
     * Defines if the button takes the fit width of its parent.
     */
    auto?: boolean;
    /**
     * Defines if the button takes the full width of its parent.
     */
    fullWidth?: boolean;
    /**
     * Function to be called when the button is clicked.
     */
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  } & Partial<typeof defaultProps>;

export const defaultProps = {
  color: 'primary',
  size: 'md',
  variant: 'solid',
  iconPosition: 'left',
  type: 'button',
  shape: 'default'
};
