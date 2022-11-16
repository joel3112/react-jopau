import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Text } from './text';

describe('Tests Text component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Text>Content</Text>);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<Text>Content</Text>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('renders tag correctly', () => {
    const { container } = render(<Text tag="span">Content</Text>);

    expect(container.firstChild).toContainHTML('span');
  });

  test('renders variant correctly', () => {
    const { container } = render(<Text variant="primary">Content</Text>);

    expect(container.firstChild).toContainHTML('variant-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(<Text size="md">Content</Text>);

    expect(container.firstChild).toContainHTML('size-md');
  });
});
