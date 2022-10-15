import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Space } from './space';

describe('Tests Space component', () => {
  test('renders component correctly', () => {
    const { container } = render(
      <Space>
        <div>1</div>
        <div>2</div>
      </Space>
    );

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(
      <Space>
        <div>1</div>
        <div>2</div>
      </Space>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
