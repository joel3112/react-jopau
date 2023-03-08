import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Avatar } from './avatar';

describe('Tests Avatar component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Avatar />);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<Avatar>Joe</Avatar>);

    expect(screen.getByText('Joe')).toBeInTheDocument();
  });

  test('renders color correctly', () => {
    const { container } = render(<Avatar color="primary">Joe</Avatar>);

    expect(container.firstChild).toContainHTML('color-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(<Avatar size="md">Joe</Avatar>);

    expect(container.firstChild).toContainHTML('size-md');
  });

  test('renders icon correctly', () => {
    render(<Avatar icon={<span>Icon</span>} />);

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });
});
