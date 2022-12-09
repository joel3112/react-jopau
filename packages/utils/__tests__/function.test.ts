import { anysort } from '../src/function';

describe('Function helper methods', () => {
  describe('anysort', () => {
    const orders = ['Events', 'Props', 'Common'];
    const data = [
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

    test('returns array sorted from array', () => {
      const result = data.sort((a, b) => {
        return anysort(a.category.name, b.category.name, orders);
      });

      expect(result).toStrictEqual([
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
  });
});
