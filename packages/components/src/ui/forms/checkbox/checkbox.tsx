import { Ref } from 'react';
import { classes, forwardRef } from '../../../utils/system';
import { useControlChecked } from '../../../utils/use-control-checked';
import { CheckboxProps, defaultProps } from './checkbox-props';
import { StyledCheckbox } from './checkbox.styled';

/**
 * Checkbox allows users to select one or more options from a set.
 *
 * @param   {CheckboxProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Checkbox } from '@react-jopau/components/ui/forms';
 * @example
 * <Checkbox checked value="A">Option A</Checkbox>
 */
export const Checkbox = forwardRef<CheckboxProps, 'input'>(
  (props: CheckboxProps, ref: Ref<Partial<HTMLInputElement> | null>) => {
    const {
      ref: checkboxRef,
      id,
      ariaLabel,
      defaultChecked,
      checked,
      onChange
    } = useControlChecked(props, ref);
    const {
      className,
      style,
      children,
      name,
      value,
      size,
      label,
      color,
      status,
      readOnly,
      disabled,
      required,
      indeterminate,
      rounded,
      throughed
    } = props;

    return (
      <StyledCheckbox
        ref={checkboxRef}
        id={id}
        name={name}
        aria-label={ariaLabel}
        value={value}
        isSelected={checked}
        defaultSelected={defaultChecked}
        isReadOnly={readOnly}
        isDisabled={disabled}
        isRequired={required}
        className={classes('checkbox', className)}
        css={{
          ...style
        }}
        size={size}
        label={label}
        color={color}
        status={status}
        isRounded={rounded}
        isIndeterminate={indeterminate}
        lineThrough={throughed}
        onChange={onChange}>
        {children}
      </StyledCheckbox>
    );
  }
);

Checkbox.defaultProps = defaultProps;
