import {
  ChangeEvent,
  ForwardRefExoticComponent,
  Ref,
  RefAttributes,
  useEffect,
  useMemo,
  useState
} from 'react';
import { KeyCode, useKeyboard } from '@nextui-org/react';
import { classes, forwardRef } from '../../../utils/system';
import { useControlChecked } from '../../../shared/use-control-checked';
import { withFormControl } from '../with-form-control';
import { SwitchProps, defaultProps } from './switch-props';
import {
  StyledSwitch,
  StyledSwitchCircle,
  StyledSwitchInput,
  StyledSwitchLabel,
  StyledSwitchWrapper
} from './switch.styled';

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
export const Switch = withFormControl<SwitchProps, HTMLInputElement>(
  forwardRef<SwitchProps, 'input'>(
    (props: SwitchProps, ref: Ref<Partial<HTMLInputElement> | null>) => {
      const {
        className,
        style,
        name,
        disabled,
        autoFocus,
        label,
        variant,
        size,
        color,
        status,
        squared,
        icon,
        iconOn,
        iconOff,
        defaultChecked,
        checked
      } = props;

      const { ref: switchRef, id, ariaLabel, onChange } = useControlChecked(props, {}, ref);

      const preClass = 'nextui-switch';
      const [selfChecked, setSelfChecked] = useState(defaultChecked);

      useEffect(() => {
        if (checked === undefined) return;
        setSelfChecked(checked);
      }, [checked]);

      const getState = useMemo(() => {
        return selfChecked ? 'checked' : 'unchecked';
      }, [selfChecked]);
      const circleIcon = useMemo(() => {
        const hasIcon = icon || iconOn || iconOff;
        const hasIconOn = Boolean(iconOn);
        const hasIconOff = Boolean(iconOff);

        if (!hasIcon) return null;
        if (hasIconOn && selfChecked) return iconOn;
        if (hasIconOff && !selfChecked) return iconOff;

        return hasIcon;
      }, [selfChecked, icon, iconOn, iconOff]);

      const { bindings } = useKeyboard(
        (event) => {
          handleChange(event as unknown as ChangeEvent<HTMLInputElement>);
        },
        [KeyCode.Enter, KeyCode.Space],
        {
          disableGlobalEvent: true,
          preventDefault: true
        }
      );
      const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (disabled) return;
        const selfEvent = {
          target: {
            checked: !selfChecked
          },
          stopPropagation: e.stopPropagation,
          preventDefault: e.preventDefault,
          nativeEvent: e
        };

        setSelfChecked(!selfChecked);
        onChange && onChange(selfEvent.target.checked);
      };

      return (
        <StyledSwitchWrapper
          color={color}
          status={status}
          size={size}
          disabled={disabled}
          borderWeight="normal"
          bordered={variant === 'bordered'}
          data-state={getState}
          checked={selfChecked}
          animated={true}>
          <StyledSwitchInput
            ref={switchRef}
            tabIndex={-1}
            id={id}
            name={name}
            type="checkbox"
            aria-label={ariaLabel}
            data-state={getState}
            autoFocus={autoFocus}
            checked={selfChecked}
            disabled={disabled}
            className={`${preClass}-input`}
            bordered={variant === 'bordered'}
            animated={true}
            onChange={handleChange}
          />
          <StyledSwitch
            role="switch"
            tabIndex={disabled ? -1 : 0}
            data-state={getState}
            aria-checked={selfChecked}
            aria-disabled={disabled}
            checked={selfChecked}
            disabled={disabled}
            className={classes(className, preClass, `${preClass}--${getState}`, {
              [`${preClass}-checked`]: selfChecked,
              [`${preClass}-disabled`]: disabled
            })}
            css={{
              ...style
            }}
            bordered={variant === 'bordered'}
            animated={true}
            shadow={false}
            squared={squared}
            {...bindings}>
            <StyledSwitchCircle className={`${preClass}-circle`}>{circleIcon}</StyledSwitchCircle>
          </StyledSwitch>
          <StyledSwitchLabel htmlFor={id}>{label}</StyledSwitchLabel>
        </StyledSwitchWrapper>
      );
    }
  ),
  'switch'
) as ForwardRefExoticComponent<
  SwitchProps & Partial<typeof defaultProps> & RefAttributes<HTMLInputElement>
>;

Switch.defaultProps = defaultProps as Partial<SwitchProps>;
