import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Tests Header component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Header />);

    expect(container).toBeDefined();
  });

  test('renders title correctly', () => {
    render(<Header title="Title"></Header>);

    expect(screen.getByText('Title')).toBeInTheDocument();
  });

  test('renders logo correctly', () => {
    render(<Header renderLogo={() => <img src="./images/logo.png" alt="Logo" />}></Header>);

    expect(screen.getByAltText('Logo')).toBeInTheDocument();
  });
});
