import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Radio } from './radio';

describe('Tests Radio component', () => {
  test('renders component correctly', () => {
    const { container } = render(
      <Radio.Group>
        <Radio value="A">Option A</Radio>
      </Radio.Group>
    );

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(
      <Radio.Group>
        <Radio value="A">Option A</Radio>
      </Radio.Group>
    );

    expect(screen.getByText('Option A')).toBeInTheDocument();
  });
});
