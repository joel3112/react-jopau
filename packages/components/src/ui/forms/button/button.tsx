import { MouseEvent, ReactNode, Ref, useImperativeHandle, useRef } from 'react';
import { classes, forwardRef } from '../../../utils/system';
import type { ButtonColor, ContentPosition, ElementHTML, NormalSize } from '../../../../types';
import { StyledButtonIcon, StyledButton } from './button.styled';

export type ButtonProps = ElementHTML & {
  /**
   * Defines the children of the component.
   */
  children?: string;
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
  iconPosition?: ContentPosition;
  /**
   * Function to be called when the button is clicked.
   */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
} & Partial<typeof defaultProps>;

const defaultProps = {
  color: 'primary',
  size: 'md',
  variant: 'solid',
  iconPosition: 'left',
  type: 'button'
};

const ButtonIcon = ({ children }: { children: ReactNode }) => {
  return <StyledButtonIcon>{children}</StyledButtonIcon>;
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
export const Button = forwardRef<ButtonProps, 'button'>(
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
      type,
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
      <StyledButton
        ref={buttonRef}
        type={type}
        disabled={!!disabled}
        className={classes('button', className)}
        css={{
          ...style
        }}
        color={color}
        size={size}
        solid={variant === 'solid'}
        bordered={variant === 'bordered'}
        ghost={variant === 'ghost'}
        flat={variant === 'flat'}
        light={variant === 'clear'}
        iconOnly={!!icon && !children}
        rounded={rounded}
        auto={!!autoWidth}
        {...(icon && {
          icon: iconPosition === 'left' && <ButtonIcon>{icon}</ButtonIcon>,
          iconRight: iconPosition === 'right' && <ButtonIcon>{icon}</ButtonIcon>
        })}
        onPress={handleClick}>
        {children}
      </StyledButton>
    );
  }
);

Button.defaultProps = defaultProps;
