/* eslint-disable react/prop-types,react/display-name */
import { forwardRef, Ref } from 'react';
import MaskedInput from 'react-text-mask';
import { FormControl } from './types';

export const withInputMask = <T extends FormControl & { mask?: Array<string | RegExp> | false }>(
  Component: (props: T) => JSX.Element
) => {
  return forwardRef((controlProps: T, ref: Ref<HTMLInputElement>) => {
    const { mask, ...props } = controlProps;

    if (!mask) {
      return <Component {...(props as T)} ref={ref} />;
    }

    return (
      <MaskedInput
        mask={mask}
        guide={false}
        {...(props as T)}
        render={(ref, maskProps) => {
          return <Component {...(maskProps as unknown as T)} ref={ref} />;
        }}
      />
    );
  });
};
