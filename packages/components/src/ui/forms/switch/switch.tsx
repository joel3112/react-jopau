import { classes } from '../../../utils/system';
import { useControlChecked } from '../../../utils/use-control-checked';
import { SwitchProps, defaultProps } from './switch-props';
import { StyledSwitch } from './switch.styled';

/**
 * Switch component is used as an alternative for the Checkbox component.
 * You can switch between enabled or disabled states.
 *
 * @param   {SwitchProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Switch } from '@react-jopau/components/ui/forms';
 * @example
 * <Switch defaultChecked />
 */
export const Switch = (props: SwitchProps) => {
  const { className, style, name, disabled, variant, size, color, squared, icon, iconOn, iconOff } =
    props;

  const { id, ariaLabel, defaultChecked, checked, onChange } = useControlChecked(props);

  return (
    <StyledSwitch
      id={id}
      name={name}
      aria-label={ariaLabel}
      {...(checked !== undefined && { checked: checked })}
      {...(defaultChecked !== undefined && { initialChecked: defaultChecked })}
      disabled={disabled}
      className={classes('switch', className)}
      css={{
        ...style
      }}
      size={size}
      color={color}
      bordered={variant === 'bordered'}
      squared={squared}
      icon={icon}
      iconOn={iconOn}
      iconOff={iconOff}
      onChange={onChange}
    />
  );
};

Switch.defaultProps = defaultProps;
