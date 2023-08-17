import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { Collapse } from './collapse';

describe('Tests Collapse component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Collapse title="title">Content</Collapse>);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(<Collapse title="title">Content</Collapse>);

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('renders title correctly', () => {
    render(<Collapse title="title">Content</Collapse>);

    expect(screen.getByText('title')).toBeInTheDocument();
  });

  test('renders subtitle correctly', () => {
    render(
      <Collapse title="title" subtitle="subtitle">
        Content
      </Collapse>
    );

    expect(screen.getByText('subtitle')).toBeInTheDocument();
  });

  test('renders content left correctly', () => {
    render(
      <Collapse title="title" contentLeft={<span>Left</span>}>
        Content
      </Collapse>
    );

    expect(screen.getByText('Left')).toBeInTheDocument();
  });

  test('renders icon correctly', () => {
    render(
      <Collapse title="title" arrowIcon={<span>Icon</span>}>
        Content
      </Collapse>
    );

    expect(screen.getByText('Icon')).toBeInTheDocument();
  });

  test('changes when is expanded', async () => {
    const onChange = jest.fn();
    const index = 1;

    render(
      <Collapse index={index} title="title" onChange={onChange}>
        Content
      </Collapse>
    );

    await waitFor(() => {
      const collapse = screen.getByText('title');
      collapse.click();
    });

    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith(expect.anything(), index, true);
  });

  test('no changes when is expanded on disabled', async () => {
    const onChange = jest.fn();

    render(
      <Collapse disabled title="title" onChange={onChange}>
        Content
      </Collapse>
    );

    await waitFor(() => {
      const collapse = screen.getByText('title');
      collapse.click();
    });

    expect(onChange).not.toBeCalled();
  });
});

describe('Tests Collapse Group component', () => {
  const collapses = [
    <Collapse key="1" index={1} title="title1">
      Content1
    </Collapse>,
    <Collapse key="2" index={2} title="title2">
      Content2
    </Collapse>
  ];

  test('renders component correctly', () => {
    const { container } = render(<Collapse.Group>{collapses}</Collapse.Group>);

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    const { container } = render(<Collapse.Group>{collapses}</Collapse.Group>);

    expect(container.firstChild?.childNodes).toHaveLength(collapses.length);
    collapses.forEach((collapse, index) => {
      expect(screen.getByText('title' + (index + 1))).toBeInTheDocument();
    });
  });

  test('changes when is expanded', async () => {
    const onChange = jest.fn();
    const index = 1;

    render(<Collapse.Group onChange={onChange}>{collapses}</Collapse.Group>);

    await waitFor(() => {
      const collapse = screen.getByText('title' + index);
      collapse.click();
    });

    expect(onChange).toBeCalled();
    expect(onChange).toBeCalledWith(index, true);
  });
});
