import { ForwardedRef, RefAttributes } from 'react';
import { classes } from '@react-jopau/utils';
import {
  forwardRef,
  prefixClass,
  useControlGroup,
  withDefaults,
  withFormControl
} from '@/components/shared';
import { RadioContext } from '../radio-context';
import { defaultProps, RadioGroupProps } from './radio-group-props';
import { StyledRadioGroup } from '../radio.styled';

/**
 * Radios group allows users to select a single option from a list of mutually exclusive options.
 *
 * @param   {RadioGroupProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Radio } from '@react-jopau/components';
 * @example
 * <Radio.Group defaultValue="A">
 *  <Radio value="A">Option A</Radio>
 *  <Radio value="B">Option B</Radio>
 * </Radio.Group>
 */
export const RadioGroup = withDefaults<RadioGroupProps & RefAttributes<HTMLDivElement>>(
  withFormControl<RadioGroupProps, HTMLDivElement>(
    forwardRef<RadioGroupProps, 'div'>(
      (props: RadioGroupProps, ref: ForwardedRef<HTMLDivElement>) => {
        const {
          ref: groupRef,
          id,
          ariaLabel,
          value,
          defaultValue,
          onChange
        } = useControlGroup<string>(props, ref);
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
          <RadioContext.Provider
            value={{ defaultValue, value, size, color, status, disabled, readOnly }}>
            <StyledRadioGroup
              ref={groupRef}
              id={id}
              label={label}
              aria-label={ariaLabel}
              name={name}
              value={value}
              defaultValue={defaultValue}
              isDisabled={disabled}
              isReadOnly={readOnly}
              isRequired={required}
              className={classes(prefixClass + '-radio-group', className)}
              css={{
                ...style
              }}
              size={size}
              color={color}
              status={status}
              orientation={orientation}
              onChange={onChange}>
              {children}
            </StyledRadioGroup>
          </RadioContext.Provider>
        );
      }
    ),
    'radio-group'
  ),
  defaultProps
);
