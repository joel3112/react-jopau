import { ForwardedRef, RefAttributes, useContext } from 'react';
import { classes } from '@react-jopau/utils';
import {
  cleanedProps,
  forwardRef,
  prefixClass,
  useControlChecked,
  withCompoundComponents
} from '@/components/shared';
import { RadioContext } from './radio-context';
import { RadioGroup } from './group/radio-group';
import { defaultProps, RadioProps } from './radio.props';
import { StyledRadio } from './radio.styled';

/**
 * Radios allow users to select a single option from a list of mutually exclusive options.
 *
 * @param   {RadioProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Radio } from '@react-jopau/components';
 * @example
 * <Radio value="A">Option A</Radio>
 */
export const Radio = withCompoundComponents<
  RadioProps & RefAttributes<HTMLInputElement>,
  { Group: typeof RadioGroup }
>(
  forwardRef<RadioProps, 'input'>((props: RadioProps, ref: ForwardedRef<HTMLInputElement>) => {
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
        className={classes(prefixClass + '-radio', className)}
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
  }),
  defaultProps,
  { Group: RadioGroup }
);
