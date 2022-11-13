const { template } = require('react-docgen-renderer-template');
const templateCreator = template({});

const templateObject = templateCreator`${({ context }) => `
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ${context.pascalName} } from './${context.name}';

describe('Tests ${context.pascalName} component', () => {
  test('renders component correctly', () => {
    const { container } = render(<${context.pascalName}>Content</${context.pascalName}>);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<${context.pascalName}>Content</${context.pascalName}>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
`}
`;

module.exports = templateObject;
