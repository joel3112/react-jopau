import { Ref, RefObject, useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';

export const useControlled = <K, T>(
  ref: Ref<Partial<K> | null>,
  value?: T,
  defaultValue?: T
): [
  RefObject<K>,
  {
    value?: T;
    defaultValue?: T;
  },
  (value: T) => void
] => {
  const controlRef = useRef<K>(null);
  useImperativeHandle(ref, () => controlRef.current);

  const valueKey = typeof value === 'boolean' ? 'checked' : 'value';
  const defaultValueKey = typeof defaultValue === 'boolean' ? 'defaultChecked' : 'defaultValue';

  const [selfValue, setSelfValue] = useState<T | undefined>(defaultValue);
  const isControlledComponent = useMemo(() => value !== undefined, [value]);
  const controlledValue =
    value !== undefined ? { [valueKey]: selfValue } : { [defaultValueKey]: defaultValue };

  useEffect(() => {
    if (isControlledComponent) {
      setSelfValue(value as T);
    }
  }, [isControlledComponent, value]);

  return [controlRef, controlledValue, setSelfValue];
};
