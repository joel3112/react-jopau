import { useEffect, useId, useState } from 'react';
import { classes } from '../../../utils/system';
import type { ElementHTML, FormControl, NormalColor, NormalSize } from '../../../../types';
import { CheckboxWrapper } from './checkbox.styled';

type CheckboxProps = ElementHTML &
  FormControl<string> & {
    /**
     * Defines the children of the component.
     */
    children?: string;
    /**
     * Defines the size of the component.
     */
    size?: NormalSize;
    /**
     * Defines the color of input text, border and label.
     */
    color?: NormalColor;
    /**
     * Defines if the input element is checked.
     */
    selected?: boolean;
    /**
     * Indeterminism is presentational only. The indeterminate visual representation remains regardless of user interaction
     */
    indeterminate?: boolean;
    /**
     * Defines the round shape of the component.
     */
    rounded?: boolean;
    /**
     * Line in the middle of the label when the element is checked
     */
    throughed?: boolean;
    /**
     * Function to be called when the element value is changed.
     */
    onChange?: (e: boolean) => void;
  } & Partial<typeof defaultProps>;

const defaultProps = {
  size: 'md',
  color: 'primary',
  status: 'default',
  selected: false
};

/**
 * Checkbox allows users to select one or more options from a set.
 *
 * @param   {CheckboxProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Checkbox } from '@react-jopau/components/ui/forms';
 * @example
 * <Checkbox selected>Default</Checkbox>
 */
export const Checkbox = ({
  id,
  className,
  style,
  children,
  name,
  value,
  selected,
  size,
  label,
  color,
  status,
  readOnly,
  disabled,
  required,
  indeterminate,
  rounded,
  throughed,
  onChange
}: CheckboxProps) => {
  const checkboxId = id || `checkbox-${useId()}`;
  const checkboxAriaLabel = label || `checkbox-label-${useId()}`;
  const [isSelected, setIsSelected] = useState(selected);

  useEffect(() => {
    setIsSelected(selected);
  }, [selected]);

  const handleChange = (e: boolean) => {
    setIsSelected(e);
    onChange && onChange(e);
  };

  return (
    <CheckboxWrapper
      id={checkboxId}
      name={name}
      aria-label={checkboxAriaLabel}
      value={value}
      isReadOnly={readOnly}
      isDisabled={disabled}
      required={required}
      className={classes('checkbox-wrapper', className)}
      css={{
        ...style
      }}
      size={size}
      label={label}
      color={color}
      status={status}
      isSelected={isSelected}
      isRounded={rounded}
      isIndeterminate={indeterminate}
      lineThrough={throughed}
      onChange={handleChange}>
      {children}
    </CheckboxWrapper>
  );
};

Checkbox.defaultProps = defaultProps;
