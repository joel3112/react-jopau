import { ForwardRefExoticComponent, Ref, RefAttributes } from 'react';
import { classes, forwardRef } from '../../../utils/system';
import { useControlValue } from '../../../shared/use-control-value';
import { useHotKey } from '../../../shared/use-hot-key';
import { withFormControl } from '../with-form-control';
import { InputPassword } from './password/input-password';
import { defaultProps, InputProps } from './input-props';
import {
  StyledContent,
  StyledInput,
  StyledLabelGap,
  StyledInputWrapper,
  StyledHotKey
} from './input.styled';

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
export const Input = withFormControl<InputProps, HTMLInputElement>(
  forwardRef<InputProps, 'input'>(
    (props: InputProps, ref: Ref<Partial<HTMLInputElement> | null>) => {
      const {
        ref: inputRef,
        id,
        ariaLabel,
        defaultValue,
        value,
        onChange,
        onClearClick
      } = useControlValue<HTMLInputElement>(props, ref);
      const {
        className,
        style,
        name,
        type,
        tabIndex,
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
        autoFocus,
        required,
        clearable,
        shape,
        fullWidth,
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
          fullWidth={!!fullWidth}
          disabled={!!disabled}>
          {labelPlaceholder && <StyledLabelGap>&nbsp;</StyledLabelGap>}
          <StyledInput
            ref={inputRef}
            tabIndex={tabIndex}
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
            autoFocus={autoFocus}
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
            fullWidth={!!fullWidth}
            clearable={clearable}
            {...(icon && {
              contentLeft: iconPosition === 'left' && (
                <StyledContent variant={variant}>{icon}</StyledContent>
              ),
              contentRight: iconPosition === 'right' && (
                <StyledContent variant={variant}>{icon}</StyledContent>
              )
            })}
            {...(hotKey && {
              contentRight: (
                <StyledHotKey
                  default={variant === 'default'}
                  onClick={() => inputRef.current?.focus()}>
                  <kbd>{shortHotKey}</kbd>
                </StyledHotKey>
              ),
              contentRightStyling: false
            })}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            onClearClick={onClearClick}
            onContentClick={onIconClick}
          />
        </StyledInputWrapper>
      );
    }
  ),
  'input'
) as ForwardRefExoticComponent<
  InputProps & Partial<typeof defaultProps> & RefAttributes<HTMLInputElement>
> & {
  Password: typeof InputPassword;
};

Input.defaultProps = defaultProps as Partial<InputProps>;
Input.Password = InputPassword;
