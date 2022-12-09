import useSWR, { Fetcher } from 'swr';
import axios from 'axios';
import { getPropValue } from '@react-jopau/utils';

/**
 * @template T Type of the data returned by the fetch
 * @template U Type of the error returned by the fetch
 */
/**
 * @template T, U
 * @typedef  {Object} UseFetch
 * @property {boolean} loading - Flag to indicate if the fetch is loading
 * @property {(T | null)} data - Data returned by the fetch
 * @property {(U | null)} error - Error returned by the fetch
 */
/**
 * @template T, U
 * @callback SuccessCallback
 * @param   {Object} data
 * @returns {(T | null)}
 */
/**
 * @template T, U
 * @callback ErrorCallback
 * @param  {Object} data
 * @throws {(U | null)}
 */
/**
 * Fetch data from an API endpoint, with optional success and error handlers.
 *
 * @param   {string} path - API endpoint
 * @param   {Object} [options] - Fetch options and handlers
 * @param   {("GET"|"POST"|"PUT"|"PATCH"|"DELETE")} [options.method=GET] - HTTP method
 * @param   {Object} [options.params] - Query params
 * @param   {Object} [options.headers] - Request headers
 * @param   {Object} [options.body] - Request body
 * @param   {SuccessCallback} [options.onSuccess=(res) => res.data] - Success handler
 * @param   {ErrorCallback} [options.onError=(error) => { throw error }] - Error handler
 * @returns {UseFetch} The loading flag, the data and the error
 *
 * @imports import { useFetch } from '@react-jopau/hooks';
 * @example
 * // Without options
 * type Data = { id: number; title: string };
 * type Error = { message: string };
 *
 * const { data, loading, error } = useFetch<Data, Error>('https://jsonplaceholder.typicode.com/todos/1');
 *
 * console.log(loading); // true | false
 * console.log(data); // { id: 1, title: 'delectus aut autem' }
 * console.log(error); // null | { message: '...' }
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
 * const { data, error } = useFetch<{}, Error>('https://jsonplaceholder.typicode.com/todos/1', {
 *  onSuccess: (res) => res.data,
 *  onError: (error) => { throw { message: error.message } }
 * });
 */
export const useFetch = <T, U = {}>(
  path: string,
  options?: {
    method?: string;
    params?: Record<string, unknown>;
    headers?: Record<string, string>;
    body?: Record<string, unknown>;
    onSuccess?: (data: never) => T | Promise<T> | null;
    onError?: (error: never) => void;
  }
): {
  data: T | null;
  loading: boolean;
  error: U | null;
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
