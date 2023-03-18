import { ChangeEvent, ForwardedRef, MutableRefObject, useId } from 'react';
import { FormControl } from './types';
import { useControlled } from './use-controlled';

type ChangeChecked = {
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: boolean) => void;
};
type ControlProps = FormControl & ChangeChecked;

export const useControlChecked = (
  props: ControlProps,
  contextProps: Object = {},
  ref: ForwardedRef<HTMLInputElement>
): {
  ref: MutableRefObject<HTMLInputElement>;
  id: string;
  ariaLabel: string;
} & ChangeChecked => {
  const { id, checked, defaultChecked, label, disabled, readOnly, onChange } = props;
  const hasContext = Object.keys(contextProps).length > 0;

  const inputId = id || `input-${useId()}`;
  const inputAriaLabel = label || `${inputId}-label`;

  const [inputRef, controlledChecked, setChecked] = useControlled<HTMLInputElement, boolean>(
    ref,
    hasContext ? undefined : checked,
    hasContext ? undefined : defaultChecked
  );

  const changeHandler = (event: boolean | ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;
    const _checked = typeof event === 'boolean' ? event : event.target.checked;
    setChecked(_checked);
    onChange && onChange(_checked);
  };

  return {
    ref: inputRef as MutableRefObject<HTMLInputElement>,
    id: inputId,
    ariaLabel: inputAriaLabel,
    ...controlledChecked,
    onChange: changeHandler
  };
};
