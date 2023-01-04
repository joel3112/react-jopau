import { ForwardRefExoticComponent, Ref, RefAttributes } from 'react';
import { classes } from '@react-jopau/shared/utils';
import { forwardRef, useControlGroup, withFormControl } from '../../../../shared';
import { CheckboxContext } from '../checkbox-context';
import { CheckboxGroupProps, defaultProps } from './checkbox-group-props';
import { StyledCheckboxGroup } from '../checkbox.styled';

/**
 * Checkbox group allows users to select a multiple option from a list options.
 *
 * @param   {CheckboxGroupProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Checkbox } from '@react-jopau/components/ui';
 * @example
 * <Checkbox.Group defaultValue={["A"]}>
 *  <Checkbox value="A">Option A</Checkbox>
 *  <Checkbox value="B">Option B</Checkbox>
 * </Checkbox.Group>
 */
export const CheckboxGroup = withFormControl<CheckboxGroupProps, HTMLDivElement>(
  forwardRef<CheckboxGroupProps, 'div'>(
    (props: CheckboxGroupProps, ref: Ref<Partial<HTMLDivElement> | null>) => {
      const {
        ref: groupRef,
        id,
        ariaLabel,
        value,
        defaultValue,
        onChange
      } = useControlGroup<string[]>(props, ref);
      const {
        className,
        style,
        children,
        label,
        name,
        size,
        color,
        status,
        orientation,
        readOnly,
        disabled,
        required
      } = props;

      return (
        <CheckboxContext.Provider
          value={{ defaultValue, value, size, color, status, disabled, readOnly }}>
          <StyledCheckboxGroup
            ref={groupRef}
            id={id}
            label={label}
            aria-label={ariaLabel}
            name={name}
            value={value}
            defaultValue={defaultValue}
            isDisabled={disabled}
            isReadOnly={readOnly}
            required={required}
            className={classes('checkbox-group', className)}
            css={{
              ...style
            }}
            size={size}
            color={color}
            status={status}
            orientation={orientation}
            onChange={onChange}>
            {children}
          </StyledCheckboxGroup>
        </CheckboxContext.Provider>
      );
    }
  ),
  'checkbox-group'
) as ForwardRefExoticComponent<
  CheckboxGroupProps & Partial<typeof defaultProps> & RefAttributes<HTMLDivElement>
>;

CheckboxGroup.defaultProps = defaultProps as Partial<CheckboxGroupProps>;
