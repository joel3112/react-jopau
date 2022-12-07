import {
  includes,
  isEmpty,
  size,
  some,
  sortBy,
  sortByPriority,
  TCollection
} from '../src/collection';

describe('Collection helper methods', () => {
  describe('isEmpty', () => {
    test('returns true in empty array', () => {
      expect(isEmpty([])).toBeTruthy();
    });

    test('returns true in empty object', () => {
      expect(isEmpty({})).toBeTruthy();
    });

    test('returns false in not empty object', () => {
      expect(isEmpty<Record<string, number>>({ a: 1, b: 3 })).toBeFalsy();
    });

    test('returns true in array with empty values', () => {
      expect(isEmpty([undefined, '', null])).toBeTruthy();
    });

    test('returns false in array with not empty values', () => {
      expect(isEmpty([1, undefined, 2, '', 3])).toBeFalsy();
    });
  });

  describe('size', () => {
    test('returns size in array', () => {
      expect(size([{ a: 1 }, { b: 2 }, { c: 3 }])).toBe(3);
    });

    test('returns size in object', () => {
      expect(size({ a: 1, b: 2, c: 3 })).toBe(3);
    });
  });

  describe('some', () => {
    test('returns true with boolean predicate', () => {
      expect(some([null, 0, 'yes', false], Boolean)).toBeTruthy();
    });

    test('return false with matches predicate', () => {
      expect(
        some(
          [
            { user: 'barney', active: true },
            { user: 'fred', active: false }
          ],
          { user: 'barney', active: false }
        )
      ).toBeFalsy();
    });
  });

  describe('includes', () => {
    test('returns true with value included', () => {
      expect(includes([1, 2, 3], 1)).toBeTruthy();
    });

    test('returns false with specific index', () => {
      expect(includes([1, 2, 3], 1, 2)).toBeFalsy();
    });

    test('return true with object', () => {
      expect(includes({ a: 1, b: 2, c: 3 }, 1)).toBeTruthy();
    });
  });

  describe('sortBy', () => {
    const collectionArray: TCollection<{ name: string }> = [
      {
        name: 'b'
      },
      {
        name: 'c'
      },
      {
        name: 'a'
      }
    ];
    const collectionObject: TCollection<Record<string, { age: number }>> = {
      b: {
        age: 10
      },
      c: {
        age: 15
      },
      a: {
        age: 1
      }
    };
    const collectionComplex: TCollection<{ id: string; detail: { age: number } }> = [
      {
        id: 'b',
        detail: {
          age: 10
        }
      },
      {
        id: 'c',
        detail: {
          age: 15
        }
      },
      {
        id: 'a',
        detail: {
          age: 1
        }
      }
    ];

    test('returns array object sorted descending from array', () => {
      expect(sortBy(collectionArray, 'name', 'desc')).toStrictEqual([
        {
          name: 'c'
        },
        {
          name: 'b'
        },
        {
          name: 'a'
        }
      ]);
    });

    test('returns array object sorted ascending from array', () => {
      expect(sortBy(collectionArray, 'name', 'asc')).toStrictEqual([
        {
          name: 'a'
        },
        {
          name: 'b'
        },
        {
          name: 'c'
        }
      ]);
    });

    test('returns array object sorted descending from object', () => {
      expect(sortBy<Object>(collectionObject, 'age', 'desc')).toStrictEqual([
        {
          age: 15
        },
        {
          age: 10
        },
        {
          age: 1
        }
      ]);
    });

    test('returns array object sorted ascending from object', () => {
      expect(sortBy<Object>(collectionObject, 'age', 'asc')).toStrictEqual([
        {
          age: 1
        },
        {
          age: 10
        },
        {
          age: 15
        }
      ]);
    });

    test('returns array object sorted ascending from array complex', () => {
      expect(sortBy(collectionComplex, (a) => a.detail.age, 'asc')).toStrictEqual([
        { id: 'a', detail: { age: 1 } },
        { id: 'b', detail: { age: 10 } },
        { id: 'c', detail: { age: 15 } }
      ]);
    });
  });

  describe('sortByPriority', () => {
    const orders = ['Events', 'Props', 'Common'];
    const collectionArray: TCollection<Object> = [
      {
        id: 'id',
        category: { name: 'Props' }
      },
      {
        id: 'onClick',
        category: { name: 'Events' }
      },
      {
        id: 'value',
        category: { name: 'Props' }
      },
      {
        id: 'className',
        category: { name: 'Common' }
      }
    ];
    const collectionObject: TCollection<Object> = {
      id: {
        id: 'id',
        category: { name: 'Props' }
      },
      onClick: {
        id: 'onClick',
        category: { name: 'Events' }
      },
      value: {
        id: 'value',
        category: { name: 'Props' }
      },
      className: {
        id: 'className',
        category: { name: 'Common' }
      }
    };

    test('returns array sorted from array', () => {
      expect(sortByPriority(collectionArray, 'category.name', orders)).toStrictEqual([
        {
          id: 'onClick',
          category: { name: 'Events' }
        },
        {
          id: 'id',
          category: { name: 'Props' }
        },
        {
          id: 'value',
          category: { name: 'Props' }
        },
        {
          id: 'className',
          category: { name: 'Common' }
        }
      ]);
    });

    test('returns array sorted from object', () => {
      expect(sortByPriority<Object>(collectionObject, 'category.name', orders)).toStrictEqual({
        onClick: {
          id: 'onClick',
          category: { name: 'Events' }
        },
        id: {
          id: 'id',
          category: { name: 'Props' }
        },
        value: {
          id: 'value',
          category: { name: 'Props' }
        },
        className: {
          id: 'className',
          category: { name: 'Common' }
        }
      });
    });

    test('returns descending array sorted from object', () => {
      expect(sortByPriority(collectionObject, 'category.name', orders, 'desc')).toStrictEqual({
        className: {
          id: 'className',
          category: { name: 'Common' }
        },
        value: {
          id: 'value',
          category: { name: 'Props' }
        },
        id: {
          id: 'id',
          category: { name: 'Props' }
        },
        onClick: {
          id: 'onClick',
          category: { name: 'Events' }
        }
      });
    });

    test('returns same array without orders', () => {
      expect(sortByPriority(collectionObject, 'category.name')).toStrictEqual(collectionObject);
    });
  });
});
