import { classes } from '@react-jopau/utils';
import { prefixClass } from '@/components/shared';
import { ButtonContext } from '../button-context';
import { ButtonGroupProps, defaultProps } from './button-group-props';
import { StyledButtonGroup } from '../button.styled';

/**
 * If you need to make a group of buttons you can use the compound component Button.Group and inside the buttons you want to group.
 *
 * @param   {ButtonGroupProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Button } from '@react-jopau/components';
 * @example
 * <Button.Group>
 *  <Button>Button A</Button>
 *  <Button>Button B</Button>
 * </Button.Group>
 */
export const ButtonGroup = (props: ButtonGroupProps) => {
  const {
    className,
    style,
    children,
    variant,
    size,
    color,
    orientation,
    shape,
    disabled,
    fullWidth
  } = props;

  return (
    <ButtonContext.Provider value={{ variant, size, color, shape, disabled, fullWidth: true }}>
      <StyledButtonGroup
        className={classes(prefixClass + '-button-group', className)}
        css={{
          ...style
        }}
        bordered={variant === 'bordered'}
        color={color}
        vertical={orientation === 'vertical'}
        fullWidth={fullWidth}>
        {children}
      </StyledButtonGroup>
    </ButtonContext.Provider>
  );
};

ButtonGroup.defaultProps = defaultProps;
