import { renderHook, waitFor } from '@testing-library/react';
import axios from 'axios';
import { useFetch } from '../src/useFetch';

const mockData = 'data';
const mockError = 'error';
const fetcher = () => {
  return axios
    .get('/api/test')
    .then((res) => res)
    .catch((err) => {
      throw err;
    });
};

jest.mock('axios');

describe('Tests useFetch hook', () => {
  test('returns data correctly', async () => {
    (axios.get as jest.Mock).mockResolvedValueOnce(mockData);

    const { result } = renderHook(() => useFetch('/api/test1', fetcher));

    await waitFor(() => {
      expect(result.current.data).toBe(mockData);
    });
  });

  test('returns error correctly', async () => {
    (axios.get as jest.Mock).mockRejectedValue(mockError);

    const { result } = renderHook(() => useFetch('/api/test3', fetcher));

    await waitFor(() => {
      expect(result.current.error).toBe(mockError);
    });
  });
});
