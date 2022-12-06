import { renderHook, waitFor } from '@testing-library/react';
import { useHotKey } from './use-hot-key';

describe('Tests useHotKey hook', () => {
  test('returns short version correctly', async () => {
    const { result } = renderHook(() => useHotKey('meta+k', jest.fn()));

    await waitFor(() => {
      expect(['⌘K', 'WinK']).toContain(result.current.shortHotKey);
    });
  });

  test('calls handler when hot key is triggered', async () => {
    const onKeyPress = jest.fn();
    renderHook(() => useHotKey('meta+k', onKeyPress));

    await waitFor(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'k', metaKey: true }));
    });

    expect(onKeyPress).toHaveBeenCalledTimes(1);
  });
});
