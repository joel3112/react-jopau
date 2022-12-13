import { ForwardRefExoticComponent, Ref, RefAttributes } from 'react';
import { classes, forwardRef } from '../../../utils/system';
import { useControlChecked } from '../../../utils/use-control-checked';
import { RadioGroup } from './group/radio-group';
import { defaultProps, RadioProps } from './radio-props';
import { StyledRadio } from './radio.styled';

/**
 * Radios allow users to select a single option from a list of mutually exclusive options.
 *
 * @param   {RadioProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Radio } from '@react-jopau/components/ui/forms';
 * @example
 * <Radio checked value="A">Option A</Radio>
 */
export const Radio = forwardRef<RadioProps, 'input'>(
  (props: RadioProps, ref: Ref<Partial<HTMLInputElement> | null>) => {
    const { ref: radioRef, id, ariaLabel } = useControlChecked(props, ref);
    const {
      className,
      style,
      children,
      value,
      size,
      description,
      color,
      status,
      disabled,
      squared
    } = props;

    return (
      <StyledRadio
        ref={radioRef}
        id={id}
        value={value || id}
        aria-label={ariaLabel}
        className={classes('radio', className)}
        css={{
          ...style
        }}
        size={size}
        color={color}
        status={status}
        description={description}
        isSquared={squared}
        isDisabled={disabled}>
        {children}
      </StyledRadio>
    );
  }
) as ForwardRefExoticComponent<
  RadioProps & Partial<typeof defaultProps> & RefAttributes<HTMLInputElement>
> & {
  Group: typeof RadioGroup;
};

Radio.defaultProps = defaultProps as Partial<RadioProps>;
Radio.Group = RadioGroup;
