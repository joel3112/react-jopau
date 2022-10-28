import useSWR, { Fetcher } from 'swr';
import axios from 'axios';
import { getPropValue } from '@react-jopau/utils/object';

type useFetchData<T> = Array<T> | T | null;
type useFetchError<U> = U | null;

type UseFetchOptions<T, U> = {
  method?: string;
  params?: Record<string, string>;
  headers?: Record<string, string>;
  body?: Record<string, string>;
  onSuccess?: (data: unknown) => useFetchData<T>;
  onError?: (error: unknown) => useFetchError<U>;
};

export type UseFetch<T, U> = {
  data: useFetchData<T>;
  loading: boolean;
  error: useFetchError<U>;
};

export const useFetch = <T, U = {}>(
  path: string | false | null,
  options?: UseFetchOptions<T, U>
): UseFetch<T, U> => {
  console.log('useFetch', path, options);
  const fetcher = () => {
    return axios
      .request({
        url: path || '',
        method: getPropValue(options, 'method', 'get'),
        params: getPropValue(options, 'params', {}),
        headers: getPropValue(options, 'headers', {}),
        data: getPropValue(options, 'body', {})
      })
      .then(getPropValue(options, 'onSuccess', (res) => res.data))
      .catch(
        getPropValue(options, 'onError', (error) => {
          throw error;
        })
      );
  };

  const { data, error } = useSWR<T, U>(path, fetcher as unknown as Fetcher<T>);
  const loading = !error && !data;

  return {
    data: data as T,
    loading,
    error: error as U
  };
};
