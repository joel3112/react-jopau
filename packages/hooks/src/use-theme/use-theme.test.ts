import { act, waitFor } from '@testing-library/react';
import { ThemeProvider } from '@react-jopau/components/contexts';
import { defaultTheme } from '@react-jopau/styles';
import { renderHookWithWrapper } from '../utils';
import { useTheme } from './use-theme';

describe('Tests useTheme hook', () => {
  test('returns config correctly', async () => {
    const { result } = renderHookWithWrapper(() => useTheme(), ThemeProvider);

    await waitFor(() => {
      expect(result.current.config).toStrictEqual(defaultTheme);
    });
  });

  test('returns darkMode correctly', async () => {
    const { result } = renderHookWithWrapper(() => useTheme(), ThemeProvider);

    await waitFor(() => {
      expect(result.current.darkMode).toBe(false);
    });
  });

  test('toggles darkMode correctly', async () => {
    const { result } = renderHookWithWrapper(() => useTheme(), ThemeProvider);

    expect(result.current.darkMode).toBe(false);

    await act(() => {
      result.current.onToggle();
    });

    await waitFor(() => {
      expect(result.current.darkMode).toBe(true);
    });
  });
});
