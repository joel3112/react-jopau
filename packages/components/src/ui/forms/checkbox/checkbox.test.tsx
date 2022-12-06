import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Checkbox } from './checkbox';

describe('Tests Checkbox component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Checkbox>Option</Checkbox>);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<Checkbox>Option</Checkbox>);

    expect(screen.getByText('Option')).toBeInTheDocument();
  });

  test('disables correctly', () => {
    render(<Checkbox label="Label" disabled />);

    expect(screen.getByLabelText('Label')).toBeDisabled();
  });

  test('renders color correctly', () => {
    const { container } = render(<Checkbox color="primary" />);

    expect(container.firstChild).toContainHTML('color-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(<Checkbox size="md" />);

    expect(container.firstChild).toContainHTML('size-md');
  });

  test('changes value correctly', async () => {
    const onChange = jest.fn();

    render(
      <Checkbox label="Label" onChange={onChange}>
        Option
      </Checkbox>
    );

    await waitFor(() => {
      const checkbox = screen.getByLabelText('Label');
      checkbox.click();
    });

    expect(onChange).toHaveBeenCalled();
  });
});
