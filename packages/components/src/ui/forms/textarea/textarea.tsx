import { Ref } from 'react';
import { classes, forwardRef } from '../../../utils/system';
import { useControlValue } from '../../../utils/use-control-value';
import { TextareaProps, defaultProps } from './textarea-props';
import { StyledLabelGap } from '../input/input.styled';
import { StyledTextarea, StyledTextareaWrapper } from './textarea.styled';

/**
 * Textarea component is a multi-line Input which allows you to write large texts.
 *
 * @param   {TextareaProps} props - Props injected to the component.
 * @returns {JSX.Element} Rendered component.
 *
 * @imports import { Textarea } from '@react-jopau/components/ui/forms';
 * @example
 * <Textarea color="primary" label="Label" placeholder="placeholder" value="text" />
 */
export const Textarea = forwardRef<TextareaProps, 'textarea'>(
  (props: TextareaProps, ref: Ref<HTMLTextAreaElement | null>) => {
    const {
      ref: textareaRef,
      id,
      ariaLabel,
      defaultValue,
      value,
      onChange
    } = useControlValue<HTMLTextAreaElement>({ ...props, as: 'textarea' }, ref);
    const {
      className,
      style,
      name,
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
      shape,
      autoWidth,
      rows,
      minRows,
      maxRows,
      onFocus,
      onBlur,
      onHeightChange
    } = props;

    return (
      <StyledTextareaWrapper
        size={size}
        labelPlaceholder={!!labelPlaceholder}
        variant={variant}
        color={color}
        status={status}
        shape={shape}
        fullWidth={!!autoWidth}
        disabled={!!disabled}>
        {labelPlaceholder && <StyledLabelGap>&nbsp;</StyledLabelGap>}
        <StyledTextarea
          ref={textareaRef}
          id={id}
          name={name}
          aria-label={ariaLabel}
          placeholder={placeholder}
          defaultValue={defaultValue}
          value={value}
          readOnly={readOnly}
          disabled={disabled}
          autoComplete={autoComplete}
          required={required}
          autoFocus={autoFocus}
          className={classes('textarea', className)}
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
          bordered={variant === 'bordered'}
          underlined={variant === 'underlined'}
          fullWidth={!!autoWidth}
          rows={rows}
          minRows={minRows}
          maxRows={maxRows}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onHeightChange={onHeightChange}
        />
      </StyledTextareaWrapper>
    );
  }
);

Textarea.defaultProps = defaultProps;
