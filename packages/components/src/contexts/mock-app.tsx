import { Button, Container, Header, Heading, Text } from '../ui';

export const MockApp = () => {
  return (
    <div className="pb-10 bg-background">
      <header>
        <Header title="Example app" maxWidth="lg" />
      </header>

      <main>
        <Container maxWidth="lg" centered className="text-text">
          <Heading as="h4" color="primary" className="mt-10">
            Content
          </Heading>

          <Text>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa deleniti ea esse ex
            exercitationem molestias nulla quod ratione repellat, sequi veniam. Et fugit maiores
            odit sint voluptatem! Obcaecati, reiciendis.
          </Text>

          <Button color="secondary" className="mt-8">
            Button
          </Button>
        </Container>
      </main>
    </div>
  );
};
