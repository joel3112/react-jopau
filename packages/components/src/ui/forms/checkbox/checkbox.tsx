import { ForwardedRef, RefAttributes, useContext } from 'react';
import { classes } from '@react-jopau/utils';
import {
  cleanedProps,
  forwardRef,
  prefixClass,
  useControlChecked,
  withCompoundComponents,
  withFormControl
} from '@/components/shared';
import { CheckboxContext } from './checkbox-context';
import { CheckboxGroup } from './group/checkbox-group';
import { CheckboxProps, defaultProps } from './checkbox.props';
import { StyledCheckbox } from './checkbox.styled';

/**
 * Checkbox allows users to select one or more options from a set.
 *
 * @param   {CheckboxProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Checkbox } from '@react-jopau/components';
 * @example
 * <Checkbox checked value="A">Option A</Checkbox>
 */
export const Checkbox = withCompoundComponents<
  CheckboxProps & RefAttributes<HTMLInputElement>,
  { Group: typeof CheckboxGroup }
>(
  withFormControl<CheckboxProps, HTMLInputElement>(
    forwardRef<CheckboxProps, 'input'>(
      (props: CheckboxProps, ref: ForwardedRef<HTMLInputElement>) => {
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
            className={classes(prefixClass + '-checkbox', className)}
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
  ),
  defaultProps,
  { Group: CheckboxGroup }
);
