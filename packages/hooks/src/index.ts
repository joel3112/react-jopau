import { useEffect, useLayoutEffect } from 'react';

export * from './use-breakpoint/use-breakpoint';
export * from './use-event-listener/use-event-listener';
export * from './use-fetch/use-fetch';
export * from './use-hot-key/use-hot-key';
export * from './use-local-storage/use-local-storage';

export const isClient = typeof window !== 'undefined';
export const isMacLike = isClient ? true : /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);

export const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;
