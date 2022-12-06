import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { ThemeContext } from '@react-jopau/components/contexts';
import { Container, Header, Space } from '@react-jopau/components/ui/layout';
import { Button, Input } from '@react-jopau/components/ui/forms';
import { Heading, Text } from '@react-jopau/components/ui/typography';
import './App.css';

const App = () => {
  const { darkMode, onToggle } = useContext(ThemeContext);

  return (
    <div className="app bg-background pb-10">
      <header>
        <Header title="Example app" maxWidth="lg">
          <Space align="center" gap={10}>
            <Input variant="bordered" placeholder="Search" hotKey="meta+k" />
            <div className="w-[90px]">
              <Button
                autoWidth
                className="!pl-12"
                variant="flat"
                color={!darkMode ? 'light' : 'dark'}
                icon={darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                onClick={onToggle}>
                {darkMode ? 'Light' : 'Dark'}
              </Button>
            </div>
          </Space>
        </Header>
      </header>

      <main>
        <Container maxWidth="lg" centered>
          <Space direction="column" gap={20} className="text-text" style={{ padding: '30px 0' }}>
            <Heading variant="h4" color="primary">
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

export default App;
