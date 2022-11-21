import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Heading } from './heading';

describe('Tests Heading component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Heading>Content</Heading>);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<Heading>Content</Heading>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('renders variant correctly', () => {
    const { container } = render(<Heading variant="h5">Content</Heading>);

    expect(container.firstChild).toContainHTML('h5');
  });

  test('renders color correctly', () => {
    const { container } = render(<Heading color="primary">Content</Heading>);

    expect(container.firstChild).toContainHTML('color-primary');
  });
});
