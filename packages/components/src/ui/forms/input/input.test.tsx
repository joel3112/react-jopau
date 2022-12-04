import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Input } from './input';

describe('Tests Input component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Input />);

    expect(container).toBeDefined();
  });

  test('renders label and placeholder correctly', () => {
    render(<Input label="Label" placeholder="placeholder" />);

    expect(screen.getByLabelText('Label')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('placeholder')).toBeInTheDocument();
  });

  test('disables correctly', () => {
    render(<Input label="Label" disabled />);

    expect(screen.getByLabelText('Label')).toBeDisabled();
  });

  test('renders variant correctly', () => {
    const { container } = render(<Input variant="bordered" />);

    expect(container.firstChild).toContainHTML('variant-bordered');
  });

  test('renders color correctly', () => {
    const { container } = render(<Input color="primary" />);

    expect(container.firstChild).toContainHTML('color-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(<Input size="md" />);

    expect(container.firstChild).toContainHTML('size-md');
  });

  test('renders fullWidth correctly', () => {
    const width = 400;
    const { container } = render(
      <div style={{ width }}>
        <Input autoWidth />
      </div>
    );

    expect(container.firstChild).toHaveStyle(`width: ${width}px`);
  });

  test('renders icon correctly', () => {
    render(<Input icon={<span>Icon</span>} />);

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('clears input correctly', async () => {
    const onClearClick = jest.fn();

    const { container } = render(
      <Input placeholder="placeholder" value="Text" clearable onClearClick={onClearClick} />
    );

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-container,testing-library/no-node-access
      const buttonClear = container.querySelector('button[class*="clear"]') as HTMLButtonElement;
      buttonClear?.click();
    });

    expect(onClearClick).toHaveBeenCalled();
  });

  test('focuses input correctly', async () => {
    const onFocus = jest.fn();

    render(<Input placeholder="placeholder" onFocus={onFocus} />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText('placeholder');
      input.focus();
    });

    expect(onFocus).toHaveBeenCalled();
  });

  test('blurs input correctly', async () => {
    const onBlur = jest.fn();

    render(<Input placeholder="placeholder" onBlur={onBlur} />);

    await waitFor(() => {
      const input = screen.getByPlaceholderText('placeholder');
      input.focus();
      input.blur();
    });

    expect(onBlur).toHaveBeenCalled();
  });
});
