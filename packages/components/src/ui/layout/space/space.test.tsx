import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { Space } from './space';

describe('Tests Space component', () => {
  test('renders component correctly', () => {
    const { container } = render(<Space />);

    expect(container).toBeDefined();
  });
});
