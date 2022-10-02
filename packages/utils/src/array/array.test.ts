import { compact, first, nth, last, multiply, remove, split, uniq, splitByCriteria } from './array';

describe('Array helper methods', () => {
  describe('first', () => {
    test('returns first element in not empty array', () => {
      expect(first([1, 2, 3])).toBe(1);
    });

    test('returns undefined in empty array', () => {
      expect(first([])).toBe(undefined);
    });
  });

  describe('last', () => {
    test('returns last element in not empty array', () => {
      expect(last([1, 2, 3])).toBe(3);
    });

    test('returns undefined in empty array', () => {
      expect(last([])).toBe(undefined);
    });
  });

  describe('nth', () => {
    test('returns the element by position in not empty array', () => {
      expect(nth([1, 2, 3], 2)).toBe(3);
    });

    test('returns the element by negative position in not empty array from the end ', () => {
      expect(nth([1, 2, 3, 4], -2)).toBe(3);
    });

    test('returns undefined in empty array', () => {
      expect(nth([], 1)).toBe(undefined);
    });
  });

  describe('remove', () => {
    test('returns an array without element by position in not empty array', () => {
      expect(remove([1, 2, 3], 1)).toStrictEqual([1, 3]);
    });

    test('returns an array without last element by higher position in not empty array', () => {
      expect(remove([1, 2, 3], 10)).toStrictEqual([1, 2]);
    });

    test('returns an array with same elements by negative position in not empty array', () => {
      expect(remove([1, 2, 3], -10)).toStrictEqual([1, 2, 3]);
    });

    test('returns an empty array in empty array', () => {
      expect(remove([], 1)).toStrictEqual([]);
    });
  });

  describe('uniq', () => {
    test('returns an array without duplicated elements in not empty array', () => {
      expect(uniq([1, 2, 1, 1, 3, 1])).toStrictEqual([1, 2, 3]);
    });

    test('returns an array with the same elements in not empty array', () => {
      expect(uniq([1, 2, 3])).toStrictEqual([1, 2, 3]);
    });

    test('returns an empty array in empty array', () => {
      expect(uniq([])).toStrictEqual([]);
    });
  });

  describe('compact', () => {
    test('returns an array without empty elements in not empty array', () => {
      expect(compact([1, undefined, 2, '', 3, null])).toStrictEqual([1, 2, 3]);
    });

    test('returns an array with the same elements in not empty array', () => {
      expect(compact([1, 2, 3])).toStrictEqual([1, 2, 3]);
    });

    test('returns an empty array in empty array', () => {
      expect(compact([])).toStrictEqual([]);
    });
  });

  describe('multiply', () => {
    test('returns an array (one element) with the content multiply by size', () => {
      expect(multiply([true], 3)).toStrictEqual([true, true, true]);
    });

    test('returns an array (more then one element) with the content multiply by size', () => {
      expect(multiply([1, 2], 2)).toStrictEqual([1, 2, 1, 2]);
    });

    test('returns an array with the same content multiply by one', () => {
      expect(multiply(['a'], 1)).toStrictEqual(['a']);
    });

    test('returns an empty array multiply by zero', () => {
      expect(multiply(['hola'], 0)).toStrictEqual([]);
    });
  });

  describe('split', () => {
    test('returns two arrays with specific index in not empty array', () => {
      expect(split([1, 2, 3, 4], 2)).toStrictEqual([[1, 2, 3], [4]]);
    });

    test('returns two empty arrays in empty array', () => {
      expect(split([], 3)).toStrictEqual([[], []]);
    });
  });

  describe('splitByCriteria', () => {
    test('returns two arrays with specific callback in not empty array', () => {
      expect(splitByCriteria<number>([1, 2, 3, 4], (i: number) => i > 2)).toStrictEqual([
        [3, 4],
        [1, 2]
      ]);
    });
  });
});
