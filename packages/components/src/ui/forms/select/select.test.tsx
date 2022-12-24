import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Select } from './select';

describe('Tests Select component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Select>Content</Select>);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<Select>Content</Select>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });
});
