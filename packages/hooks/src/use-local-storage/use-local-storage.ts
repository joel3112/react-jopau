import { Dispatch, SetStateAction, useState } from 'react';

/**
 * @template T The type of the value to persist.
 */
/**
 * @template T
 * @typedef  {Array} UseLocalStorage
 * @property {T} 0 - The value of the local storage
 * @property {Dispatch<SetStateAction<T>>} 1 - The setter of the local storage
 */
/**
 * Persist a value in local storage and keep it in sync with the state.
 *
 * @template T
 * @param   {string} key The key to use in local storage.
 * @param   {T} initialValue The initial value to use if there is no value in local storage.
 * @returns {UseLocalStorage} The value and a setter for the value.
 *
 * @imports import { useLocalStorage } from '@react-jopau/hooks';
 * @example
 * const [darkMode, setDarkMode] = useLocalStorage<boolean>('key', true);
 *
 * const handleClick = () => setDarkMode(prev => !prev);
 *
 * return (
 *  <button onClick={handleClick}>
 *    {darkMode ? 'Dark mode' : 'Light mode'}
 *  </button>
 * );
 */
export const useLocalStorage = <T>(
  key: string,
  initialValue: T
): [T, Dispatch<SetStateAction<T>>] => {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue: Dispatch<SetStateAction<T>> = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
};
