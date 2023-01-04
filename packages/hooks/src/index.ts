import { useEffect, useLayoutEffect } from 'react';
import { isClient } from '@react-jopau/shared/utils';

export * from './use-breakpoint/use-breakpoint';
export * from './use-event-listener/use-event-listener';
export * from './use-fetch/use-fetch';
export * from './use-local-storage/use-local-storage';
export * from './use-theme/use-theme';

export const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;
