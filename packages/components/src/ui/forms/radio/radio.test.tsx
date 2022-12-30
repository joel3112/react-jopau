import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
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

  test('disables correctly', () => {
    render(
      <Radio.Group>
        <Radio value="A" disabled>
          Option A
        </Radio>
      </Radio.Group>
    );

    expect(screen.getByLabelText('Option A')).toBeDisabled();
  });

  test('renders color correctly', () => {
    const { container } = render(
      <Radio.Group>
        <Radio value="A" color="primary" />
      </Radio.Group>
    );

    expect(container.firstChild).toContainHTML('color-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(
      <Radio.Group>
        <Radio value="A" size="md" />
      </Radio.Group>
    );

    expect(container.firstChild).toContainHTML('size-md');
  });

  test('changes checked correctly', async () => {
    const onChange = jest.fn();

    render(
      <Radio.Group onChange={onChange}>
        <Radio value="A">Option A</Radio>
      </Radio.Group>
    );

    await waitFor(() => {
      const _radio = screen.getByLabelText('Option A');
      _radio.click();
    });

    expect(onChange).toHaveBeenCalled();
  });
});
