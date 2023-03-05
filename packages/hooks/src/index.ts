import { useEffect, useLayoutEffect } from 'react';
import { isClient } from '@react-jopau/utils';

export * from './use-breakpoint/use-breakpoint';
export * from './use-event-listener/use-event-listener';
export * from './use-fetch/use-fetch';
export * from './use-local-storage/use-local-storage';
export * from './use-media-query/use-media-query';

export const useIsomorphicLayoutEffect = isClient ? useLayoutEffect : useEffect;
