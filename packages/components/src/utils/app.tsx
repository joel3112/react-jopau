import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { ThemeContext } from '../contexts';
import { Container, Header, Space } from '../ui/layout';
import { Button, Input } from '../ui/forms';
import { Heading, Text } from '../ui/typography';

export const MockApp = () => {
  const { darkMode, onToggle } = useContext(ThemeContext);

  return (
    <div className="bg-background pb-10">
      <header>
        <Header title="Example app" maxWidth="lg">
          <Space align="center" gap={10}>
            <Input variant="bordered" placeholder="Search" hotKey="meta+k" />
            <div>
              <Button
                autoWidth
                variant="flat"
                color={!darkMode ? 'light' : 'dark'}
                icon={darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                onClick={onToggle}
              />
            </div>
          </Space>
        </Header>
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
