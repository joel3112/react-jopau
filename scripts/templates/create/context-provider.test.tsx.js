const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { MockApp } from '../mock-app';
import { ${context.pascalName}Provider } from './${context.name}-context';

describe('Tests ${context.pascalName}Provider component', () => {
  test('renders component correctly', () => {
    const { container } = render(
      <${context.pascalName}Provider initialValue={1}>
        <MockApp />
      </${context.pascalName}Provider>
    );

    expect(container).toBeDefined();
  });
});
`}
`;

module.exports = templateObject;
