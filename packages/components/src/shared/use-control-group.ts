import { Ref, RefObject, useId } from 'react';
import { FormControl } from '../../types';
import { useControlled } from './use-controlled';

type ChangeValue<T> = {
  value?: T;
  defaultValue?: T;
  onChange?: (e: T) => void;
};
type ControlProps<T> = FormControl & ChangeValue<T> & { value?: T };

export const useControlGroup = <T>(
  props: ControlProps<T>,
  ref: Ref<Partial<HTMLDivElement> | null>
): {
  ref: RefObject<HTMLDivElement>;
  id: string;
  ariaLabel: string;
} & ChangeValue<T> => {
  const { id, value, defaultValue, label, disabled, readOnly, onChange } = props;

  const groupId = id || `group-${useId()}`;
  const groupAriaLabel = label || `${groupId}-label`;

  const [inputRef, controlledValue, setValue] = useControlled<HTMLDivElement, T>(
    ref,
    value,
    defaultValue
  );

  const changeHandler = (event: T) => {
    if (disabled || readOnly) return;
    setValue(event);
    onChange && onChange(event);
  };

  return {
    ref: inputRef,
    id: groupId,
    ariaLabel: groupAriaLabel,
    ...controlledValue,
    onChange: changeHandler
  };
};
