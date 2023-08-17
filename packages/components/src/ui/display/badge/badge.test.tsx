import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Badge } from './badge';

describe('Tests Badge component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Badge>Content</Badge>);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<Badge>Content</Badge>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('renders color correctly', () => {
    const { container } = render(<Badge color="primary">Joe</Badge>);

    expect(container.firstChild).toContainHTML('color-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(<Badge size="md">Joe</Badge>);

    expect(container.firstChild).toContainHTML('size-md');
  });

  test('renders content correctly', () => {
    render(<Badge content={<span>Icon</span>}>Content</Badge>);

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
});
