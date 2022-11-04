import useSWR, { Fetcher } from 'swr';
import axios from 'axios';
import { getPropValue } from '@react-jopau/utils/object';

type useFetchData<T> = Array<T> | T | null;
type useFetchError<U> = U | null;

/**
 * @typedef  {Object} UseFetch
 * @property {Object} data - Data returned by the fetch
 * @property {boolean} loading - Flag to indicate if the fetch is loading
 * @property {Object} error - Error returned by the fetch
 */
/**
 * Fetch data from an API endpoint, with optional success and error handlers.
 *
 * @template T Type of the data returned by the fetch
 * @template U Type of the error returned by the fetch
 * @param   {string} path - API endpoint
 * @param   {Object} [options] - Fetch options and handlers
 * @param   {("GET"|"POST"|"PUT"|"PATCH"|"DELETE")} [options.method=GET] - HTTP method
 * @param   {Object} [options.params] - Query params
 * @param   {Object} [options.headers] - Request headers
 * @param   {Object} [options.body] - Request body
 * @param   {Function} [options.onSuccess=(res) => res.data] - Success handler
 * @param   {Function} [options.onError=(error) => { throw error }] - Error handler
 * @returns {UseFetch}
 *
 * @import import { useFetch } from '@react-jopau/hooks';
 * @example
 * // Without options
 * const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1');
 *
 * console.log(data); // { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
 * console.log(loading); // true | false
 * console.log(error); // null
 * @example
 * // With options
 * const { data } = useFetch('https://jsonplaceholder.typicode.com/todos', {
 *  method: 'POST',
 *  headers: { 'Content-Type': 'application/json' },
 *  params: { userId: 1 },
 *  body: { title: 'foo', body: 'bar' }
 * });
 * @example
 * // With success and error handlers
 * const { data, error } = useFetch('https://jsonplaceholder.typicode.com/todos/1', {
 *  onSuccess: (res) => res.data,
 *  onError: (error) => throw { message: error.message }
 * });
 */
export const useFetch = <T, U = {}>(
  path: string,
  options?: {
    method?: string;
    params?: Record<string, string>;
    headers?: Record<string, string>;
    body?: Record<string, string>;
    onSuccess?: (data: unknown) => useFetchData<T>;
    onError?: (error: unknown) => useFetchError<U>;
  }
): {
  data: useFetchData<T>;
  loading: boolean;
  error: useFetchError<U>;
} => {
  const fetcher = () => {
    return axios
      .request({
        url: path || '',
        method: getPropValue(options, 'method', 'GET'),
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
  const loading = !error && !data && !!path;

  return {
    data: data as T,
    loading,
    error: error as U
  };
};
