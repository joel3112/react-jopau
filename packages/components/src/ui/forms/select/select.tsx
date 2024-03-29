import {
  ChangeEvent,
  Children,
  ForwardedRef,
  ReactElement,
  RefAttributes,
  useCallback,
  useRef
} from 'react';
import * as reactAriaUtils from '@react-aria/utils';
import * as reactAriaFocus from '@react-aria/focus';
import { classes } from '@react-jopau/utils';
import {
  forwardRef,
  prefixClass,
  useControlValue,
  withCompoundComponents,
  withFormControl
} from '@/components/shared';
import { ChevronDown } from '@/components/icons';
import { SelectGroupProps } from './group/select-group.props';
import { SelectGroup } from './group/select-group';
import { SelectOptionProps } from './option/select-option.props';
import { SelectOption } from './option/select-option';
import { SelectProps, defaultProps } from './select.props';
import {
  StyledSelect,
  StyledSelectArrow,
  StyledSelectInput,
  StyledSelectWrapper
} from './select.styled';

/**
 * Select component is a component that allows users pick a value from predefined options.
 *
 * @param   {SelectProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Select } from '@react-jopau/components';
 * @example
 * <Select value="A">
 *  <Select.Option value="A">A</Select.Option>
 *  <Select.Option value="B">B</Select.Option>
 *  <Select.Option value="C">C</Select.Option>
 * </Select>
 */
export const Select = withCompoundComponents<
  SelectProps & RefAttributes<HTMLSelectElement>,
  { Option: typeof SelectOption; Group: typeof SelectGroup }
>(
  withFormControl<SelectProps, HTMLSelectElement>(
    forwardRef<SelectProps, 'select'>(
      (props: SelectProps, ref: ForwardedRef<HTMLSelectElement>) => {
        const {
          ref: selectRef,
          id,
          ariaLabel,
          defaultValue,
          value,
          onChange
        } = useControlValue<HTMLSelectElement>({ ...props, as: 'select' }, ref);
        const {
          children,
          className,
          style,
          name,
          label,
          placeholder,
          helperText,
          autoFocus,
          size,
          color,
          variant,
          status,
          disabled,
          required,
          shape,
          fullWidth,
          onFocus,
          onBlur
        } = props;

        const { isFocusVisible, focusProps } = reactAriaFocus.useFocusRing({ autoFocus });
        const boxRef = useRef<HTMLInputElement>(null);
        const boxValue: (selectedValue: string | undefined) => string = useCallback(
          (selectedValue) => {
            if (placeholder && !selectedValue && !defaultValue) {
              return '';
            }

            const flattenChildren = Children.toArray(children).reduce((acc, child) => {
              if ((child as ReactElement<SelectGroupProps>).type === SelectGroup) {
                return [
                  ...(acc as ReactElement<SelectOptionProps>[]),
                  ...Children.toArray((child as ReactElement<SelectGroupProps>).props.children)
                ];
              }

              return [...(acc as ReactElement<SelectOptionProps>[]), child];
            }, []) as ReactElement<SelectOptionProps>[];

            const foundChildren =
              flattenChildren.find(
                ({ props }) => props.value === defaultValue || props.value === selectedValue
              ) || flattenChildren[0];
            return foundChildren.props.children;
          },
          [children, defaultValue, placeholder]
        );

        const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
          onChange && onChange(event);

          if (boxRef.current) {
            boxRef.current.value = boxValue(event.target.value);
          }
        };

        return (
          <StyledSelectWrapper fullWidth={!!fullWidth}>
            <StyledSelect
              ref={selectRef}
              id={id}
              name={name}
              aria-label={ariaLabel}
              defaultValue={defaultValue}
              value={value}
              required={required}
              disabled={disabled}
              variant={variant}
              shape={shape}
              size={size}
              status={status}
              isFocusVisible={isFocusVisible && !disabled}
              isPlaceholderVisible={
                !value && !defaultValue && !!placeholder && !boxRef.current?.value
              }
              isHelperTextVisible={!!helperText}
              onChange={handleChange}
              {...reactAriaUtils.mergeProps({ onFocus, onBlur }, focusProps)}>
              {placeholder && (
                <Select.Option key={placeholder} value="">
                  {placeholder}
                </Select.Option>
              )}
              {children}
            </StyledSelect>
            <StyledSelectInput
              ref={boxRef}
              tabIndex={-1}
              type="text"
              aria-label={ariaLabel}
              placeholder={placeholder}
              defaultValue={boxValue(value)}
              readOnly
              disabled={disabled}
              required={required}
              className={classes(prefixClass + '-select', className)}
              css={{
                ...style
              }}
              label={label}
              color={color}
              variant={variant}
              size={size}
              shape={shape}
              status={status}
              helperText={helperText}
              fullWidth={!!fullWidth}
              icon={
                <StyledSelectArrow size={size}>
                  <ChevronDown />
                </StyledSelectArrow>
              }
              iconPosition="right"
            />
          </StyledSelectWrapper>
        );
      }
    ),
    'select'
  ),
  defaultProps,
  { Option: SelectOption, Group: SelectGroup }
);
