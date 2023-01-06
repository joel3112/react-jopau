import { ChangeEvent, MouseEvent, Ref, RefObject, useId } from 'react';
import { FormControl } from './types';
import { useControlled } from './use-controlled';

type FormElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
type ChangeValue<T> = {
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<T>) => void;
};
type ControlProps<T> = FormControl &
  ChangeValue<T> & {
    as?: 'input' | 'textarea' | 'select';
    placeholder?: string;
    labelPlaceholder?: string;
    onClearClick?: (e: MouseEvent) => void;
  };

const simulateChangeEvent = <T extends FormElement>(el: T, event: MouseEvent): ChangeEvent<T> => {
  return {
    ...event,
    target: el,
    currentTarget: el
  };
};

export const useControlValue = <T extends FormElement>(
  props: ControlProps<T>,
  ref: Ref<Partial<T> | null>
): {
  ref: RefObject<T>;
  id: string;
  ariaLabel: string;
  isTextarea: boolean;
  onClearClick: (e: MouseEvent) => void;
} & ChangeValue<T> => {
  const {
    as,
    id,
    value,
    defaultValue,
    label,
    placeholder,
    labelPlaceholder,
    disabled,
    readOnly,
    onChange,
    onClearClick
  } = props;

  const inputId = id || `${as}-${useId()}`;
  const inputAriaLabel = label || labelPlaceholder || placeholder || `${inputId}-label`;

  const [inputRef, controlledValue, setValue] = useControlled<T, string>(ref, value, defaultValue);

  const changeHandler = (event: ChangeEvent<T>) => {
    if (disabled || readOnly) return;
    setValue(event.target.value);
    onChange && onChange(event);
  };

  const clearHandler = (event: MouseEvent) => {
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();

    setValue('');
    onClearClick && onClearClick(event);
    if (!inputRef.current) return;

    const changeEvent = simulateChangeEvent<T>(inputRef.current, event);

    changeEvent.target.value = '';
    onChange && onChange(changeEvent);
    inputRef.current.focus();
  };

  return {
    ref: inputRef,
    id: inputId,
    ariaLabel: inputAriaLabel,
    isTextarea: as === 'textarea',
    ...controlledValue,
    onChange: changeHandler,
    onClearClick: clearHandler
  };
};
