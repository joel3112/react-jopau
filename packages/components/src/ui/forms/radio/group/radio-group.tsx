import { Ref } from 'react';
import { classes, forwardRef } from '../../../../utils/system';
import { useControlGroup } from '../../../../shared/use-control-group';
import { RadioContext } from '../radio-context';
import { defaultProps, RadioGroupProps } from './radio-group-props';
import { StyledRadioGroup } from '../radio.styled';

/**
 * Radios group allows users to select a single option from a list of mutually exclusive options.
 *
 * @param   {RadioGroupProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Radio } from '@react-jopau/components/ui/forms';
 * @example
 * <Radio.Group defaultValue="A">
 *  <Radio value="A">Option A</Radio>
 *  <Radio value="B">Option B</Radio>
 * </Radio.Group>
 */
export const RadioGroup = forwardRef<RadioGroupProps, 'div'>(
  (props: RadioGroupProps, ref: Ref<Partial<HTMLDivElement> | null>) => {
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
          className={classes('radio-group', className)}
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
);

RadioGroup.defaultProps = defaultProps;
