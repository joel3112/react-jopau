import { ForwardRefExoticComponent, Ref, RefAttributes, useContext } from 'react';
import { classes, cleanedProps, forwardRef } from '../../../utils/system';
import { useControlChecked } from '../../../shared/use-control-checked';
import { withFormControl } from '../../../shared/with-form-control';
import { CheckboxContext } from './checkbox-context';
import { CheckboxGroup } from './group/checkbox-group';
import { CheckboxProps, defaultProps } from './checkbox-props';
import { StyledCheckbox } from './checkbox.styled';

/**
 * Checkbox allows users to select one or more options from a set.
 *
 * @param   {CheckboxProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Checkbox } from '@react-jopau/components/ui';
 * @example
 * <Checkbox checked value="A">Option A</Checkbox>
 */
export const Checkbox = withFormControl<CheckboxProps, HTMLInputElement>(
  forwardRef<CheckboxProps, 'input'>(
    (props: CheckboxProps, ref: Ref<Partial<HTMLInputElement> | null>) => {
      const {
        className,
        style,
        children,
        name,
        value,
        label,
        required,
        autoFocus,
        indeterminate,
        rounded,
        throughed
      } = props;
      const contextProps = useContext(CheckboxContext);

      const {
        ref: checkboxRef,
        id,
        ariaLabel,
        defaultChecked,
        checked,
        onChange
      } = useControlChecked(props, contextProps, ref);
      const { size, color, status, readOnly, disabled } = {
        ...props,
        ...cleanedProps(contextProps)
      };

      return (
        <StyledCheckbox
          ref={checkboxRef}
          id={id}
          name={name}
          aria-label={ariaLabel}
          value={value}
          {...(checked !== undefined && { isSelected: checked })}
          {...(defaultChecked !== undefined && { defaultSelected: defaultChecked })}
          isReadOnly={readOnly}
          isDisabled={disabled}
          isRequired={required}
          autoFocus={autoFocus}
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
  ),
  'checkbox'
) as ForwardRefExoticComponent<
  CheckboxProps & Partial<typeof defaultProps> & RefAttributes<HTMLInputElement>
> & {
  Group: typeof CheckboxGroup;
};

Checkbox.defaultProps = defaultProps as Partial<CheckboxProps>;
Checkbox.Group = CheckboxGroup;
