import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Container } from './container';

describe('Tests Container component', () => {
  test('renders component correctly', () => {
    const { container } = render(
      <Container>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet architecto asperiores
          autem, blanditiis ducimus excepturi fugiat inventore ipsum nam nesciunt nobis odit quae
          quas repellendus sequi, sit suscipit! Enim, ratione.
        </p>
      </Container>
    );

    expect(container).toBeDefined();
  });

  test('renders children correctly', () => {
    const content = 'Lorem ipsum dolor sit amet';

    render(
      <Container>
        <p>{content}</p>
      </Container>
    );

    expect(screen.getByText(content)).toBeInTheDocument();
  });
});
