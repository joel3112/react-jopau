export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointsRules = {
  [key in Breakpoint]?: number;
};

export interface BreakpointsConfig {
  rules?: BreakpointsRules;
  targetWidth?: number;
}
