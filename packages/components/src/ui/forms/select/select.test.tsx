/* eslint-disable testing-library/prefer-presence-queries */
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Select } from './select';

describe('Tests Select component', () => {
  test('renders component correctly', () => {
    const { container } = render(
      <Select>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    );

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(
      <Select>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    );

    expect(screen.getByText('Option 1')).toBeDefined();
    expect(screen.getByText('Option 2')).toBeDefined();
  });

  test('renders placeholder correctly', () => {
    render(
      <Select placeholder="Select an option">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    );

    expect(screen.getAllByText('Select an option')).toBeDefined();
  });

  test('renders label correctly', () => {
    render(
      <Select label="Label">
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    );

    expect(screen.getByText('Label')).toBeDefined();
  });

  test('renders group correctly', async () => {
    render(
      <Select placeholder="Select an option">
        <Select.OptionGroup label="Group 1">
          <Select.Option value="1">Option 1</Select.Option>
          <Select.Option value="2">Option 2</Select.Option>
        </Select.OptionGroup>
        <Select.OptionGroup label="Group 2">
          <Select.Option value="3">Option 3</Select.Option>
          <Select.Option value="4">Option 4</Select.Option>
        </Select.OptionGroup>
      </Select>
    );

    expect(screen.queryByLabelText('Group 1')).toBeDefined();
    expect(screen.queryByLabelText('Group 2')).toBeDefined();
  });
});
