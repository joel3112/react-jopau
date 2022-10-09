import { getPropValue } from '../object';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type BreakpointsRules = {
  [key in Breakpoint]?: number;
};

export interface BreakpointsConfig {
  rules?: BreakpointsRules;
  targetWidth?: number;
}

export const DEFAULT_CONFIG: BreakpointsRules = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536
};

export class BreakpointsHelper {
  rules: BreakpointsRules = {};
  current: Breakpoint | null = null;
  #targetWidth = 0;

  get #matches(): { [key in Breakpoint]: boolean } {
    return {
      xs: this.between('xs', 'sm'),
      sm: this.between('sm', 'md'),
      md: this.between('md', 'lg'),
      lg: this.between('lg', 'xl'),
      xl: this.up('xl')
    };
  }

  createBreakpoints(config: BreakpointsConfig): BreakpointsHelper {
    this.#targetWidth = getPropValue(config, 'targetWidth', window.innerWidth);
    this.rules = {
      ...DEFAULT_CONFIG,
      ...getPropValue(config, 'rules', {})
    };
    this.current = this.#targetWidth
      ? (Object.keys(this.#matches).filter(
          (key) => this.#matches[key as Breakpoint]
        )[0] as Breakpoint)
      : null;

    return this;
  }

  between(min: Breakpoint, max: Breakpoint): boolean {
    if (this.#getValue(min) === undefined) {
      return false;
    }
    return this.#getValue(max) !== undefined
      ? this.#targetWidth >= this.#getValue(min) && this.#targetWidth <= this.#getValue(max)
      : this.#targetWidth >= this.#getValue(min);
  }

  up(min: Breakpoint): boolean {
    return this.#getValue(min) !== undefined ? this.#targetWidth >= this.#getValue(min) : false;
  }

  #getValue(key: Breakpoint): number {
    return getPropValue(this.rules, key);
  }
}

export const { createBreakpoints } = {
  createBreakpoints: (config?: BreakpointsConfig) =>
    new BreakpointsHelper().createBreakpoints(config || {})
};
