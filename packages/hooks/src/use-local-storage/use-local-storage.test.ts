import { act, renderHook, waitFor } from '@testing-library/react';
import { useLocalStorage } from './use-local-storage';

describe('Tests useLocalStorage hook', () => {
  test('returns data correctly', async () => {
    const storedValue = 'test';
    const { result } = renderHook(() => useLocalStorage<string>('key', storedValue));

    await waitFor(() => {
      expect(result.current[0]).toBe(storedValue);
    });
  });

  test('updates data correctly', async () => {
    const newValue = 'new value';
    const { result } = renderHook(() => useLocalStorage<string>('key', 'test'));

    act(() => {
      result.current[1](newValue);
    });

    await waitFor(() => {
      expect(result.current[0]).toBe(newValue);
    });
  });
});
