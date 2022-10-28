import {
  Breakpoint,
  BreakpointsHelper,
  BreakpointsRules,
  createBreakpoints,
  DEFAULT_CONFIG
} from '../src/breakpoint';

describe('Breakpoint helper methods', () => {
  describe('createBreakpoints', () => {
    test('returns breakpoints created', () => {
      expect(createBreakpoints().rules).toStrictEqual(DEFAULT_CONFIG);
    });

    test('returns custom breakpoint breakpoints created', () => {
      const CUSTOM_CONFIG: BreakpointsRules = { xs: 400, sm: 700 };
      const breakpoints = createBreakpoints({ rules: CUSTOM_CONFIG });

      expect(breakpoints.rules).toStrictEqual({ ...DEFAULT_CONFIG, ...CUSTOM_CONFIG });
    });
  });

  describe('current', () => {
    test('returns current xs breakpoint', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 400 });

      expect(breakpoints.current).toBe('xs');
    });

    test('returns current md breakpoint', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 1000 });

      expect(breakpoints.current).toBe('md');
    });

    test('returns current xl breakpoint', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 1500 });

      expect(breakpoints.current).toBe('xl');
    });
  });

  describe('between', () => {
    test('returns true if width is between min and max', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 800 });

      expect(breakpoints.between('xs', 'sm')).toBeTruthy();
    });

    test('returns false if width is not between min and max', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 1800 });

      expect(breakpoints.between('xs', 'sm')).toBeFalsy();
    });

    test('returns false if breakpoint is not defined', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints();

      expect(breakpoints.between('abc' as Breakpoint, 'xyz' as Breakpoint)).toBeFalsy();
    });
  });

  describe('up', () => {
    test('returns true if width is greater than sm', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 1900 });

      expect(breakpoints.up('sm')).toBeTruthy();
    });

    test('returns false if width is not greater than sm', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 100 });

      expect(breakpoints.up('sm')).toBeFalsy();
    });

    test('returns false if breakpoint is not defined', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints();

      expect(breakpoints.up('abc' as Breakpoint)).toBeFalsy();
    });
  });

  describe('down', () => {
    test('returns true if width is lower than sm', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 900 });

      expect(breakpoints.down('sm')).toBeTruthy();
    });

    test('returns false if width is not lower than sm', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints({ targetWidth: 1500 });

      expect(breakpoints.down('sm')).toBeFalsy();
    });

    test('returns false if breakpoint is not defined', () => {
      const breakpoints: BreakpointsHelper = createBreakpoints();

      expect(breakpoints.down('abc' as Breakpoint)).toBeFalsy();
    });
  });
});
