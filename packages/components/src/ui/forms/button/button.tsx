import {
  ForwardRefExoticComponent,
  MouseEvent,
  Ref,
  RefAttributes,
  useContext,
  useImperativeHandle,
  useRef
} from 'react';
import { PressEvent } from '@react-types/shared/src/events';
import { classes } from '@react-jopau/utils';
import { cleanedProps, forwardRef } from '@/components/shared';
import { ButtonContext } from './button-context';
import { ButtonGroup } from './group/button-group';
import { ButtonProps, defaultProps } from './button-props';
import { StyledButton, StyledButtonIcon } from './button.styled';

/**
 * Button component is a clickable element that is used to trigger an action or event, such as submitting a form, opening a dialog, canceling an action, or performing a delete operation.
 *
 * @param   {ButtonProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Button } from '@react-jopau/components';
 * @example
 * <Button>Click me</Button>
 */
export const Button = forwardRef<ButtonProps, 'button'>(
  (props: ButtonProps, ref: Ref<HTMLButtonElement | null>) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    useImperativeHandle(ref, () => buttonRef.current);

    const { className, style, children, auto, iconPosition, icon, type, onClick } = props;
    const contextProps = useContext(ButtonContext);

    const { color, size, variant, disabled, shape, fullWidth } = {
      ...props,
      ...cleanedProps(contextProps)
    };

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
        shape={shape}
        auto={auto}
        fullWidth={!!fullWidth}
        borderWeight="light"
        {...(icon && {
          icon: iconPosition === 'left' && <StyledButtonIcon>{icon}</StyledButtonIcon>,
          iconRight: iconPosition === 'right' && <StyledButtonIcon>{icon}</StyledButtonIcon>
        })}
        onPress={handleClick as unknown as (e: PressEvent) => void}>
        {children}
      </StyledButton>
    );
  }
) as ForwardRefExoticComponent<
  ButtonProps & Partial<typeof defaultProps> & RefAttributes<HTMLButtonElement>
> & {
  Group: typeof ButtonGroup;
};

Button.defaultProps = defaultProps as Partial<ButtonProps>;
Button.Group = ButtonGroup;
