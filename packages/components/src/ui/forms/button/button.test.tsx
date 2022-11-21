import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button } from './button';

describe('Tests Button component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Button>Content</Button>);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<Button>Content</Button>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('renders variant correctly', () => {
    const { container } = render(<Button variant="outline">Content</Button>);

    expect(container.firstChild).toContainHTML('variant-outline');
  });

  test('renders color correctly', () => {
    const { container } = render(<Button color="primary">Content</Button>);

    expect(container.firstChild).toContainHTML('color-primary');
  });

  test('renders size correctly', () => {
    const { container } = render(<Button size="md">Content</Button>);

    expect(container.firstChild).toContainHTML('size-md');
  });

  test('renders fullWidth correctly', () => {
    const width = 400;
    const { container } = render(
      <div style={{ width }}>
        <Button autoWidth>Content</Button>
      </div>
    );

    expect(container.firstChild).toHaveStyle(`width: ${width}px`);
  });

  test('renders icon correctly', () => {
    render(<Button renderIcon={() => <span>Icon</span>}>Content</Button>);

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('clicks button correctly', () => {
    const onClick = jest.fn();

    render(<Button onClick={onClick}>Content</Button>);

    const button = screen.getByText('Content');
    button.click();

    expect(onClick).toHaveBeenCalled();
  });
});
