import { Container, Header, Space } from '../src/ui/layout';

export const AppExample = () => {
  return (
    <div className="bg-background pb-10">
      <header>
        <Header
          title="App"
          renderLogo={() => <img src="./images/logo.png" alt="Logo" className="h-[45px]" />}
          maxWidth="lg"
        />
      </header>

      <main>
        <Container maxWidth="lg" centered>
          <Space direction="column" gap={20} className="mt-5 text-text">
            <h1 className="text-secondary text-lg">Content</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa deleniti ea esse ex
              exercitationem molestias nulla quod ratione repellat, sequi veniam. Et fugit maiores
              odit sint voluptatem! Obcaecati, reiciendis.
            </p>

            <button className="text-white p-3 bg-secondary w-fit">Button</button>
          </Space>
        </Container>
      </main>
    </div>
  );
};
