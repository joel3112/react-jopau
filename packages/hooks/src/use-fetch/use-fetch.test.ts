import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useFetch } from './use-fetch';

const mockData = 'data';
const mockError = 'error';

jest.mock('axios');

describe('Tests useFetch hook', () => {
  test('returns data correctly', async () => {
    (axios.request as jest.Mock).mockResolvedValueOnce({ data: mockData });

    const { result } = renderHook(() => useFetch<string>('/api/test'));

    await waitFor(() => {
      expect(result.current.data).toBe(mockData);
    });
  });

  test('returns error correctly', async () => {
    (axios.request as jest.Mock).mockRejectedValueOnce(mockError);

    const { result } = renderHook(() => useFetch<{}, string>('/api/test2'));

    await waitFor(() => {
      expect(result.current.error).toBe(mockError);
    });
  });
});
