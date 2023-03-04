import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Grid } from './grid';

describe('Tests Grid component', () => {
  test('renders component correctly', () => {
    const { container } = render(
      <Grid>
        <Grid.Item>1</Grid.Item>
        <Grid.Item>2</Grid.Item>
      </Grid>
    );

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    render(
      <Grid>
        <Grid.Item>1</Grid.Item>
        <Grid.Item>2</Grid.Item>
      </Grid>
    );

    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });
});
