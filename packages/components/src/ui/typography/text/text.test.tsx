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

  test('renders variant correctly', () => {
    const { container } = render(<Text variant="span">Content</Text>);

    expect(container.firstChild).toContainHTML('span');
  });

  test('renders color correctly', () => {
    const { container } = render(<Text color="primary">Content</Text>);

    expect(container.firstChild).toContainHTML('color-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(<Text size="md">Content</Text>);

    expect(container.firstChild).toContainHTML('size-md');
  });
});
