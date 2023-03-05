import { renderHook, waitFor } from '@testing-library/react';
import { useMediaQuery } from './use-media-query';

describe('Tests useMediaQuery hook', () => {
  test('returns true correctly', async () => {
    const { result } = renderHook(() => useMediaQuery('(min-width: 1024px)'));

    window.resizeTo(1500, 1000);

    await waitFor(() => {
      expect(result.current).toBeTruthy();
    });
  });
});
