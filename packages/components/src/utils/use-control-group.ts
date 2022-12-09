import { Ref, RefObject, useId } from 'react';
import { FormControl } from '../../types';
import { useControlled } from './use-controlled';

type ChangeValue = {
  value?: string;
  defaultValue?: string;
  onChange?: (e: string) => void;
};
type ControlProps = FormControl & ChangeValue & { value?: string };

export const useControlGroup = (
  props: ControlProps,
  ref: Ref<Partial<HTMLDivElement> | null>
): {
  ref: RefObject<HTMLDivElement>;
  id: string;
  ariaLabel: string;
} & ChangeValue => {
  const { id, value, defaultValue, label, disabled, readOnly, onChange } = props;

  const groupId = id || `group-${useId()}`;
  const groupAriaLabel = label || `${groupId}-label`;

  const [inputRef, controlledValue, setValue] = useControlled<HTMLDivElement, string>(
    ref,
    value,
    defaultValue
  );

  const changeHandler = (event: string) => {
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
