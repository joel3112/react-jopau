import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Textarea } from './textarea';

describe('Tests Textarea component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Textarea />);

    expect(container).toBeDefined();
  });

  test('renders label and placeholder correctly', () => {
    render(<Textarea label="Label" placeholder="placeholder" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument();
  });

  test('disables correctly', () => {
    render(<Textarea label="Label" disabled />);

    expect(screen.getByLabelText('Label')).toBeDisabled();
  });

  test('renders variant correctly', () => {
    const { container } = render(<Textarea variant="bordered" />);

    expect(container.firstChild).toContainHTML('variant-bordered');
  });

  test('renders color correctly', () => {
    const { container } = render(<Textarea color="primary" />);

    expect(container.firstChild).toContainHTML('color-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(<Textarea size="md" />);

    expect(container.firstChild).toContainHTML('size-md');
  });

  test('renders fullWidth correctly', () => {
    const width = 400;
    const { container } = render(
      <div style={{ width }}>
        <Textarea autoWidth />
      </div>
    );

    expect(container.firstChild).toHaveStyle(`width: ${width}px`);
  });

  test('focuses input correctly', async () => {
    const onFocus = jest.fn();

    render(<Textarea placeholder="placeholder" onFocus={onFocus} />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText('placeholder');
      input.focus();
    });

    expect(onFocus).toHaveBeenCalled();
  });

  test('blurs input correctly', async () => {
    const onBlur = jest.fn();

    render(<Textarea placeholder="placeholder" onBlur={onBlur} />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText('placeholder');
      input.focus();
      input.blur();
    });

    expect(onBlur).toHaveBeenCalled();
  });
});
