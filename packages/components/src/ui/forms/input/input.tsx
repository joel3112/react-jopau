import { ForwardedRef, RefAttributes } from 'react';
import { classes } from '@react-jopau/utils';
import {
  forwardRef,
  prefixClass,
  useControlValue,
  useHotKey,
  withCompoundComponents,
  withFormControl,
  withInputMask
} from '@/components/shared';
import { InputPassword } from './password/input-password';
import { defaultProps, InputProps } from './input.props';
import {
  StyledContent,
  StyledLabelGap,
  StyledInputWrapper,
  StyledHotKey,
  StyledInput
} from './input.styled';

/**
 * Input component is a component that is used to get user input in a text field.
 *
 * @param   {InputProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Input } from '@react-jopau/components';
 * @example
 * <Input label="Label" placeholder="placeholder" value="text" />
 */
export const Input = withCompoundComponents<
  InputProps & RefAttributes<HTMLInputElement>,
  { Password: typeof InputPassword }
>(
  withFormControl<InputProps, HTMLInputElement>(
    withInputMask<InputProps>(
      forwardRef<InputProps, 'input'>((props: InputProps, ref: ForwardedRef<HTMLInputElement>) => {
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
            disabled={!!disabled}
            required={!!required}>
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
              className={classes(prefixClass + '-input', className)}
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
      })
    ),
    'input'
  ),
  defaultProps,
  { Password: InputPassword }
);
