import { JSXElementConstructor, useEffect, useLayoutEffect } from 'react';
import { renderHook } from '@testing-library/react';
import { isClient } from '@react-jopau/utils';

export const renderHookWithWrapper = <Result, Props>(
  render: (initialProps: Props) => Result,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Wrapper: JSXElementConstructor<any>
) => {
  return renderHook(render, {
    wrapper: ({ children }) => <Wrapper>{children}</Wrapper>
  });
};

export const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;
