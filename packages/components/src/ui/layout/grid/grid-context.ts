import { createContext } from 'react';

export const GridContext = createContext<{
  columns?: number;
}>({});
