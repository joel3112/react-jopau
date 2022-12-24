import { SelectOptionProps, defaultProps } from './select-option-props';

/**
 * Component that is used as an option in a Select component.
 *
 * @param   {SelectOptionProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Select } from '@react-jopau/components/ui/forms';
 * @example
 * <Select.Option value="A">A</Select.Option>
 */
export const SelectOption = (props: SelectOptionProps) => {
  const { children, value, label, disabled, selected } = props;

  return (
    <option value={value} selected={selected} disabled={disabled} label={label || children}>
      {children}
    </option>
  );
};

SelectOption.defaultProps = defaultProps;
