/* eslint-disable testing-library/no-node-access,testing-library/no-container */
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Switch } from './switch';

describe('Tests Switch component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Switch />);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<Switch>Text</Switch>);

    expect(screen.getByText('Text')).toBeInTheDocument();
  });

  test('disables correctly', () => {
    const { container } = render(<Switch disabled />);

    expect(container.querySelector('input')).toBeDisabled();
  });

  test('renders color correctly', () => {
    const { container } = render(<Switch color="primary" />);

    expect(container.firstChild).toContainHTML('color-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(<Switch size="md" />);

    expect(container.firstChild).toContainHTML('size-md');
  });

  test('changes checked correctly', async () => {
    const onChange = jest.fn();

    const { container } = render(<Switch onChange={onChange} />);

    await waitFor(() => {
      // eslint-disable-next-line testing-library/no-node-access,testing-library/no-container
      const _switch = container.querySelector('input');
      _switch?.click();
    });

    expect(onChange).toHaveBeenCalled();
  });
});
