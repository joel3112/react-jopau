import {
  ChangeEvent,
  FocusEvent,
  MouseEvent,
  ReactNode,
  Ref,
  useEffect,
  useId,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import { useHotKey } from '@react-jopau/hooks';
import { classes, forwardRef } from '../../../utils/system';
import type {
  ContentPosition,
  ElementHTML,
  FormControl,
  NormalSize,
  SimpleColor
} from '../../../../types';
import { StyledContent, StyledInput, StyledLabelGap, StyledInputWrapper } from './input.styled';

export type InputProps = ElementHTML &
  FormControl<string> & {
    /**
     * Defines the type of the input element.
     */
    type?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url';
    /**
     * Defines the placeholder, it becomes a label element when the input is focused.
     */
    labelPlaceholder?: string;
    /**
     * Defines the placeholder of the input element.
     */
    placeholder?: string;
    /**
     * Defines the size of the component.
     */
    size?: NormalSize;
    /**
     * Defines the color of input text, border and label.
     */
    color?: SimpleColor;
    /**
     * Defines the variant of the component.
     */
    variant?: 'default' | 'bordered' | 'underlined';
    /**
     * Defines the helper text of the input element.
     */
    helperText?: string;
    /**
     * Defines if the input element can be cleared by clicking the clear button.
     */
    clearable?: boolean;
    /**
     * Defines the round shape of the component.
     */
    rounded?: boolean;
    /**
     * Defines if the input has autocomplete enabled.
     */
    autoComplete?: 'on' | 'off';
    /**
     * Defines if the button takes the fit width of its parent.
     */
    autoWidth?: boolean;
    /**
     * Defines the hot keybinding to focus the input element.
     */
    hotKey?: string;
    /**
     * Defines the render of the content of the component: icon or another element.
     * See <a href="https://react-icons.github.io/react-icons/" target="_blank">react-icons</a> for more details.
     */
    icon?: ReactNode;
    /**
     * Defines the position of the content in the component.
     */
    iconPosition?: ContentPosition;
    /**
     * Defines the text label at left of the input
     */
    labelLeft?: string;
    /**
     * Defines the text label at right of the input
     */
    labelRight?: string;
    /**
     * Function to be called when the element value is changed.
     */
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    /**
     * Function to be called when the element is focused.
     */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * Function to be called when the element is blurred.
     */
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * Function to be called when the content is clicked.
     */
    onContentClick?: (key: ContentPosition, e: MouseEvent) => void;
    /**
     * Function to be called when the clear button is clicked.
     */
    onClearClick?: (e: MouseEvent) => void;
  } & Partial<typeof defaultProps>;

const defaultProps = {
  type: 'text',
  size: 'md',
  variant: 'default',
  color: 'default',
  status: 'default',
  autoComplete: 'off',
  iconPosition: 'left'
};

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
  (
    {
      id,
      className,
      style,
      name,
      type,
      value,
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
      rounded,
      autoWidth,
      hotKey,
      icon,
      iconPosition,
      labelLeft,
      labelRight,
      onChange,
      onFocus,
      onBlur,
      onContentClick,
      onClearClick
    }: InputProps,
    ref: Ref<Partial<HTMLInputElement>>
  ) => {
    const inputId = id || `input-${useId()}`;
    const inputAriaLabel = label || placeholder || labelPlaceholder || `input-label-${useId()}`;
    const inputRef = useRef<HTMLInputElement>(null);
    const [inputValue, setInputValue] = useState<string | number>(value || '');
    const { shortHotKey } = useHotKey(hotKey || '', () => inputRef.current?.focus());

    useEffect(() => {
      setInputValue(value || '');
    }, [value]);

    useImperativeHandle(ref, () => ({
      focus: () => {
        inputRef.current?.focus();
      }
    }));

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value);

    return (
      <StyledInputWrapper
        size={size}
        labelPlaceholder={!!labelPlaceholder}
        variant={variant}
        color={color}
        status={status}
        rounded={!!rounded}
        hotKey={!!hotKey}
        fullWidth={!!autoWidth}>
        {labelPlaceholder && <StyledLabelGap>&nbsp;</StyledLabelGap>}
        <StyledInput
          ref={inputRef}
          id={inputId}
          name={name}
          type={type}
          aria-label={inputAriaLabel}
          placeholder={placeholder}
          value={inputValue}
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
          rounded={rounded}
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
          onInput={handleInput}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onClearClick={onClearClick}
          onContentClick={onContentClick}
        />
      </StyledInputWrapper>
    );
  }
);

Input.defaultProps = defaultProps;
