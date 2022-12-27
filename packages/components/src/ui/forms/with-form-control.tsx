/* eslint-disable react/prop-types,react/display-name */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, Ref, useId } from 'react';
import { Control, Controller } from 'react-hook-form';
import { FormControl } from '../../../types';

const rendersByControl = <T extends FormControl & { control?: Control }>(
  Component: (props: T) => JSX.Element,
  props: T,
  controlType: string
) => {
  switch (controlType) {
    case 'checkbox':
    case 'switch': {
      return ({ field }: any) => (
        <Component
          {...(props as T)}
          {...field}
          checked={field.value}
          onChange={(e: boolean) => field.onChange(e)}
        />
      );
    }
    default:
      return ({ field }: any) => <Component {...(props as T)} {...field} />;
  }
};

export const withFormControl = <T extends FormControl & { control?: Control }, K = any>(
  Component: (props: T) => JSX.Element,
  controlType: string
) => {
  return forwardRef((controlProps: T, ref: Ref<Partial<K>>) => {
    const { control, name, ...props } = controlProps;

    if (!control) {
      return <Component {...(props as T)} ref={ref} />;
    }

    const id = props.id || useId();
    return (
      <Controller
        name={name || `${controlType}-${id}`}
        control={control}
        render={rendersByControl(Component, props as T, controlType)}
      />
    );
  });
};
