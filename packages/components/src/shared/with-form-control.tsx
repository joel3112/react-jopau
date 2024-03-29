/* eslint-disable react/prop-types,react/display-name */
import { ComponentType, ForwardedRef, forwardRef, useId } from 'react';
import {
  Control,
  FieldErrors,
  FieldValue,
  FieldValues,
  RegisterOptions,
  useController
} from 'react-hook-form';
import { FormControl } from './types';

const defaultValuesByType: Record<string, FieldValue<FieldValues>> = {
  input: '',
  textarea: '',
  select: '',
  'checkbox-group': [],
  'radio-group': '',
  checkbox: false,
  switch: false
};

const errorProps = (errors: FieldErrors, name: string) => {
  const hasError = !!errors[name];

  if (!hasError) return {};
  return {
    color: 'error',
    helperText: errors[name]?.message
  };
};

export const withFormControl = <
  T extends FormControl & { control?: Control; rules?: RegisterOptions },
  K extends HTMLElement
>(
  Component: ComponentType<T>,
  controlType: keyof typeof defaultValuesByType
) => {
  return forwardRef((controlProps: T, ref: ForwardedRef<K>) => {
    const { control, rules, ...props } = controlProps;
    const required = props.required || !!rules?.required;

    if (!control) {
      return <Component {...(props as T)} required={required} ref={ref} />;
    }

    const id = props.id || useId();
    const name = props.name || `${controlType}-${id}`;

    const {
      field,
      formState: { errors }
    } = useController({ name, control, rules });

    if (['switch', 'checkbox'].includes(controlType)) {
      return (
        <Component
          {...(props as T)}
          {...errorProps(errors, name)}
          required={required}
          checked={field.value}
          onChange={(e: boolean) => field.onChange(e)}
          ref={ref}
        />
      );
    }

    return (
      <Component
        {...(props as T)}
        {...errorProps(errors, name)}
        {...{
          ...field,
          value: field.value === undefined ? defaultValuesByType[controlType] : field.value
        }}
        required={required}
        ref={ref}
      />
    );
  });
};
