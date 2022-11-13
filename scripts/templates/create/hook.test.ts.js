const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import { renderHook, waitFor } from '@testing-library/react';
import { use${context.pascalName} } from './use${context.pascalName}';

describe('Tests use${context.pascalName} hook', () => {
  test('returns value correctly', async () => {
    const { result } = renderHook(() => use${context.pascalName}(0);

    await waitFor(() => {
      expect(result.current.value).toBe(0);
    });
  });
});
`}
`;

module.exports = templateObject;
