import { ForwardRefExoticComponent, ReactNode, Ref, RefAttributes } from 'react';
import { useHotKey } from '@react-jopau/hooks';
import { classes, forwardRef } from '../../../utils/system';
import { useControlText } from '../../../utils/use-control-text';
import { InputPassword } from './password/input-password';
import { defaultProps, InputProps } from './input-props';
import { StyledContent, StyledInput, StyledLabelGap, StyledInputWrapper } from './input.styled';

const InputContent = ({
  children,
  variant
}: {
  children: ReactNode;
  variant: InputProps['variant'];
}) => {
  return <StyledContent variant={variant}>{children}</StyledContent>;
};

/**
 * Input component is a component that is used to get user input in a text field.
 *
 * @param   {InputProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Input } from '@react-jopau/components/ui/forms';
 * @example
 * <Input color="primary" label="Label" placeholder="placeholder" value="text" />
 */
export const Input = forwardRef<InputProps, 'input'>(
  (props: InputProps, ref: Ref<Partial<HTMLInputElement> | null>) => {
    const {
      ref: inputRef,
      id,
      ariaLabel,
      defaultValue,
      value,
      onChange,
      onClearClick
    } = useControlText<HTMLInputElement>(props, ref);
    const {
      className,
      style,
      name,
      type,
      label,
      placeholder,
      helperText,
      labelPlaceholder,
      size,
      color,
      variant,
      status,
      readOnly,
      autoComplete,
      disabled,
      required,
      clearable,
      shape,
      autoWidth,
      hotKey,
      icon,
      iconPosition,
      labelLeft,
      labelRight,
      onFocus,
      onBlur,
      onIconClick
    } = props;

    const { shortHotKey } = useHotKey(hotKey || '', () => {
      inputRef.current?.focus();
    });

    return (
      <StyledInputWrapper
        size={size}
        labelPlaceholder={!!labelPlaceholder}
        variant={variant}
        color={color}
        status={status}
        shape={shape}
        hotKey={!!hotKey}
        fullWidth={!!autoWidth}
        disabled={!!disabled}>
        {labelPlaceholder && <StyledLabelGap>&nbsp;</StyledLabelGap>}
        <StyledInput
          ref={inputRef}
          id={id}
          name={name}
          type={type}
          aria-label={ariaLabel}
          placeholder={placeholder}
          initialValue={defaultValue}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          autoComplete={autoComplete}
          required={required}
          className={classes('input', className)}
          css={{
            ...style
          }}
          label={label}
          shadow={false}
          borderWeight="light"
          size={size}
          color={color}
          status={status}
          labelPlaceholder={labelPlaceholder}
          helperText={helperText}
          labelLeft={labelLeft}
          labelRight={labelRight}
          bordered={variant === 'bordered'}
          underlined={variant === 'underlined'}
          fullWidth={!!autoWidth}
          clearable={clearable}
          {...(icon && {
            contentLeft: iconPosition === 'left' && (
              <InputContent variant={variant}>{icon}</InputContent>
            ),
            contentRight: iconPosition === 'right' && (
              <InputContent variant={variant}>{icon}</InputContent>
            )
          })}
          {...(hotKey && { labelRight: shortHotKey })}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onClearClick={onClearClick}
          onContentClick={onIconClick}
        />
      </StyledInputWrapper>
    );
  }
) as ForwardRefExoticComponent<
  InputProps & Partial<typeof defaultProps> & RefAttributes<HTMLInputElement>
> & {
  Password: typeof InputPassword;
};

Input.defaultProps = defaultProps as Partial<InputProps>;
Input.Password = InputPassword;
