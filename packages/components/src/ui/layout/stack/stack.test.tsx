import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Stack } from './stack';

describe('Tests Stack component', () => {
  test('renders component correctly', () => {
    const { container } = render(
      <Stack>
        <div>1</div>
        <div>2</div>
      </Stack>
    );

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(
      <Stack>
        <div>1</div>
        <div>2</div>
      </Stack>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
