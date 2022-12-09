import { Ref, RefObject, useId } from 'react';
import { FormControl } from '../../types';
import { useControlled } from './use-controlled';

type ChangeChecked = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: boolean) => void;
};
type ControlProps = FormControl & ChangeChecked;

export const useControlChecked = (
  props: ControlProps,
  ref: Ref<Partial<HTMLInputElement> | null>
): {
  ref: RefObject<HTMLInputElement>;
  id: string;
  ariaLabel: string;
} & ChangeChecked => {
  const { id, checked, defaultChecked, label, disabled, readOnly, onChange } = props;

  const inputId = id || `input-${useId()}`;
  const inputAriaLabel = label || `${inputId}-label`;

  const [inputRef, controlledChecked, setChecked] = useControlled<HTMLInputElement, boolean>(
    ref,
    checked,
    defaultChecked
  );

  const changeHandler = (event: boolean) => {
    if (disabled || readOnly) return;
    setChecked(event);
    onChange && onChange(event);
  };

  return {
    ref: inputRef,
    id: inputId,
    ariaLabel: inputAriaLabel,
    ...controlledChecked,
    onChange: changeHandler
  };
};
