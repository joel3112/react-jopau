import { getPropValue } from '@react-jopau/utils';
import type { Breakpoint, BreakpointsConfig, BreakpointsRules } from '../types';
import defaultTheme from '../themes/default';

/* ==== constants ============================================================== */

export const DEFAULT_CONFIG: BreakpointsRules = defaultTheme.media;

/* ==== helpers ================================================================ */

export class BreakpointsHelper {
  rules: BreakpointsRules = {};
  current: Breakpoint | null = null;
  #targetWidth = 0;

  get #matches(): { [key in Breakpoint]: boolean } {
    return {
      xs: this.down('xs'),
      sm: this.between('xs', 'sm'),
      md: this.between('sm', 'md'),
      lg: this.between('md', 'lg'),
      xl: this.between('lg', 'xl')
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
      ? this.#targetWidth > this.#getValue(min) && this.#targetWidth <= this.#getValue(max)
      : this.#targetWidth > this.#getValue(min);
  }

  up(min: Breakpoint): boolean {
    return this.#getValue(min) !== undefined ? this.#targetWidth >= this.#getValue(min) : false;
  }

  down(max: Breakpoint): boolean {
    return this.#getValue(max) !== undefined ? this.#targetWidth <= this.#getValue(max) : false;
  }

  #getValue(key: Breakpoint): number {
    return getPropValue(this.rules, key);
  }
}

export const { createBreakpoints } = {
  createBreakpoints: (config?: BreakpointsConfig) =>
    new BreakpointsHelper().createBreakpoints(config || {})
};
