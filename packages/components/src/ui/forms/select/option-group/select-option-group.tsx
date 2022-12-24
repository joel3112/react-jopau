import { SelectOptionGroupProps, defaultProps } from './select-option-group-props';

/**
 * Component that is used as an option group in a Select component.
 *
 * @param   {SelectOptionGroupProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Select } from '@react-jopau/components/ui/forms';
 * @example
 * <Select.OptGroup label="A">
 *   <Select.Option value="A">A</Select.Option>
 *   <Select.Option value="B">B</Select.Option>
 * </Select.OptGroup>
 */
export const SelectOptionGroup = (props: SelectOptionGroupProps) => {
  const { children, label, disabled } = props;

  return (
    <optgroup disabled={disabled} label={label}>
      {children}
    </optgroup>
  );
};

SelectOptionGroup.defaultProps = defaultProps;
