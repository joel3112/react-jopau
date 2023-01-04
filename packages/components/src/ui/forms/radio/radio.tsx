import { ForwardRefExoticComponent, Ref, RefAttributes, useContext } from 'react';
import { classes } from '@react-jopau/shared/utils';
import { cleanedProps, forwardRef, useControlChecked } from '../../../shared';
import { RadioContext } from './radio-context';
import { RadioGroup } from './group/radio-group';
import { defaultProps, RadioProps } from './radio-props';
import { StyledRadio } from './radio.styled';

/**
 * Radios allow users to select a single option from a list of mutually exclusive options.
 *
 * @param   {RadioProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Radio } from '@react-jopau/components/ui';
 * @example
 * <Radio value="A">Option A</Radio>
 */
export const Radio = forwardRef<RadioProps, 'input'>(
  (props: RadioProps, ref: Ref<Partial<HTMLInputElement> | null>) => {
    const { className, style, children, value, description, autoFocus, squared } = props;
    const contextProps = useContext(RadioContext);

    const { ref: radioRef, id, ariaLabel } = useControlChecked(props, contextProps, ref);
    const { size, color, status, disabled } = { ...props, ...cleanedProps(contextProps) };

    return (
      <StyledRadio
        ref={radioRef}
        id={id}
        value={value || id}
        aria-label={ariaLabel}
        isDisabled={disabled}
        autoFocus={autoFocus}
        className={classes('radio', className)}
        css={{
          ...style
        }}
        size={size}
        color={color}
        status={status}
        description={description}
        isSquared={squared}>
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
