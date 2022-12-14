import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { defaultTheme } from '@react-jopau/styles';
import { MockApp } from '../mock-app';
import { ThemeProvider } from './theme-context';

describe('Tests ThemeProvider component', () => {
  test('renders component correctly', () => {
    const { container } = render(
      <ThemeProvider config={defaultTheme}>
        <MockApp />
      </ThemeProvider>
    );

    expect(container).toBeDefined();
  });

  test('renders light theme correctly', () => {
    const { container } = render(
      <ThemeProvider config={defaultTheme}>
        <MockApp />
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveClass('light-theme');
  });

  test('renders dark theme correctly', () => {
    const { container } = render(
      <ThemeProvider config={defaultTheme} darkMode>
        <MockApp />
      </ThemeProvider>
    );

    expect(container.firstChild).toHaveClass('dark-theme');
  });
});
