import useSWR, { BareFetcher, KeyedMutator } from 'swr';

export type UseFetch<T> = {
  data: Array<T> | T | null;
  loading: boolean;
  error: { status_code: number; status_message: string } | null;
  mutate?: KeyedMutator<T>;
};

export const useFetch = <T>(path: string | false | null, fetcher: BareFetcher<T>): UseFetch<T> => {
  const { data, error, mutate } = useSWR<T>(path, fetcher);
  const loading = !error && !data;

  return {
    data: data as T,
    loading,
    error,
    mutate: mutate as KeyedMutator<T>
  };
};
