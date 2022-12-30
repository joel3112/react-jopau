import { useEffect, useLayoutEffect } from 'react';

export * from './use-breakpoint/use-breakpoint';
export * from './use-event-listener/use-event-listener';
export * from './use-fetch/use-fetch';
export * from './use-local-storage/use-local-storage';
export * from './use-theme/use-theme';

export const isClient = typeof window !== 'undefined';
export const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;
