import { useEffect, useState } from 'react';
import { isClient } from '@react-jopau/utils';

/**
 * Reactive media query hook that returns the truthy value of the media query.
 *
 * @param   {string} query - Media query string
 * @returns {boolean} Truthy value of the media query
 *
 * @imports import { useMediaQuery } from '@react-jopau/hooks';
 * @example
 * const isLargeScreen = useMediaQuery('(min-width: 600px)');
 *
 * console.log(isLargeScreen); // true or false
 */
export const useMediaQuery = (query: string): boolean => {
  const getMatches = (query: string): boolean => {
    if (isClient) {
      return window.matchMedia(query).matches;
    }
    return false;
  };

  const [matches, setMatches] = useState<boolean>(getMatches(query));

  const handleChange = () => setMatches(getMatches(query));

  useEffect(() => {
    const matchMedia = window.matchMedia(query);

    // Triggered at the first client-side load and if query changes
    handleChange();

    // Listen matchMedia
    if (matchMedia.addListener) {
      matchMedia.addListener(handleChange);
    } else {
      matchMedia.addEventListener('change', handleChange);
    }

    return () => {
      if (matchMedia.removeListener) {
        matchMedia.removeListener(handleChange);
      } else {
        matchMedia.removeEventListener('change', handleChange);
      }
    };
  }, [query]);

  return matches;
};
