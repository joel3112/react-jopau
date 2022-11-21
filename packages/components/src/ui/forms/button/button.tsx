import { forwardRef, MouseEvent, ReactNode, Ref, useImperativeHandle, useRef } from 'react';
import classes from 'classnames';
import { Color, ElementHTML } from '../../../../types';
import { ButtonIcon, ButtonText, ButtonWrapper } from './button.styled';

export type ButtonProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children?: string;
  /**
   * Defines the color of button.
   */
  color?: Exclude<Color, 'disabled'> | 'light' | 'dark';
  /**
   * Defines the size of the component.
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Defines the variant of the component.
   */
  variant?: 'solid' | 'outline' | 'ghost' | 'flat' | 'link';
  /**
   * Defines if the button is disabled and not clickable.
   */
  disabled?: boolean;
  /**
   * Defines the round shape of the component.
   */
  rounded?: boolean;
  /**
   * Defines if the button takes the fit width of its parent.
   */
  autoWidth?: boolean;
  /**
   * Defines the render of the icon of the component.
   * See <a href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a> for more details.
   */
  icon?: ReactNode;
  /**
   * Defines the position of the icon in the component.
   */
  iconPosition?: 'left' | 'right';
  /**
   * Function to be called when the button is clicked.
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
};

const defaultProps = {
  color: 'primary',
  size: 'md',
  variant: 'solid',
  iconPosition: 'left'
};

/**
 * Button component is a clickable element that is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 *
 * @param   {ButtonProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Button } from '@react-jopau/components/ui/forms';
 * @example
 * <Button color="primary" variant="outline">
 *    Click me
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      style,
      children,
      color,
      size,
      variant,
      disabled,
      rounded,
      autoWidth,
      iconPosition,
      icon,
      onClick
    }: ButtonProps,
    ref: Ref<Partial<HTMLButtonElement>>
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);

    useImperativeHandle(ref, () => ({
      click: () => {
        buttonRef && buttonRef.current?.click();
      }
    }));

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      if (disabled) {
        e.preventDefault();
        return;
      }
      onClick && onClick(e);
    };

    return (
      <ButtonWrapper
        ref={buttonRef}
        disabled={disabled}
        className={classes('button-wrapper', className)}
        css={{
          ...style
        }}
        color={color}
        size={size}
        variant={variant}
        iconOnly={!!icon && !children}
        rounded={rounded}
        autoWidth={autoWidth}
        onClick={handleClick}>
        <>
          {!!icon && iconPosition === 'left' && <ButtonIcon size={size}>{icon}</ButtonIcon>}
          {children && <ButtonText size={size}>{children}</ButtonText>}
          {!!icon && iconPosition === 'right' && <ButtonIcon size={size}>{icon}</ButtonIcon>}
        </>
      </ButtonWrapper>
    );
  }
);

Button.defaultProps = defaultProps as Partial<ButtonProps>;
Button.displayName = 'Button';
