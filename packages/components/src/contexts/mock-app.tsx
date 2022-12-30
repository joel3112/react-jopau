import { Button, Container, Header, Heading, Space, Text } from '../ui';

export const MockApp = () => {
  return (
    <div className="bg-background pb-10">
      <header>
        <Header title="Example app" maxWidth="lg" />
      </header>

      <main>
        <Container maxWidth="lg" centered>
          <Space direction="column" gap={20} className="text-text mt-10">
            <Heading as="h4" color="primary">
              Content
            </Heading>

            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa deleniti ea esse ex
              exercitationem molestias nulla quod ratione repellat, sequi veniam. Et fugit maiores
              odit sint voluptatem! Obcaecati, reiciendis.
            </Text>

            <Button color="secondary">Button</Button>
          </Space>
        </Container>
      </main>
    </div>
  );
};
