import { withDefaults } from '@/components/shared';
import { SelectOptionProps, defaultProps } from './select-option-props';

/**
 * Component that is used as an option in a Select component.
 *
 * @param   {SelectOptionProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Select } from '@react-jopau/components';
 * @example
 * <Select.Option value="A">A</Select.Option>
 */
export const SelectOption = withDefaults<SelectOptionProps>((props: SelectOptionProps) => {
  const { children, value, label, disabled } = props;

  return (
    <option value={value} disabled={disabled} label={label || children}>
      {children}
    </option>
  );
}, defaultProps);
