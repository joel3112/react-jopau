import { withDefaults } from '@/components/shared';
import { SelectGroupProps, defaultProps } from './select-group.props';

/**
 * Component that is used as an option group in a Select component.
 *
 * @param   {SelectGroupProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Select } from '@react-jopau/components';
 * @example
 * <Select value="A">
 *  <Select.Group label="Group 1">
 *    <Select.Option value="A">A</Select.Option>
 *    <Select.Option value="B">B</Select.Option>
 *  </Select.Group>
 * </Select>
 */
export const SelectGroup = withDefaults<SelectGroupProps>((props: SelectGroupProps) => {
  const { children, label, disabled } = props;

  return (
    <optgroup disabled={disabled} label={label}>
      {children}
    </optgroup>
  );
}, defaultProps);
