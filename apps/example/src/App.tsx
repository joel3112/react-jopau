import { useContext } from 'react';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { Container, Header, Space } from '@react-jopau/components/ui/layout';
import { ThemeContext } from '@react-jopau/components/contexts';
import './App.css';

const App = () => {
  const { darkMode, onToggle } = useContext(ThemeContext);

  return (
    <div className="app bg-background pb-10">
      <header>
        <Header title="Example app" maxWidth="lg">
          <button
            className="text-text p-2 w-fit flex gap-1 items-center font-medium"
            onClick={onToggle}>
            {darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
            {darkMode ? 'Light' : 'Dark'}
          </button>
        </Header>
      </header>

      <main>
        <Container maxWidth="lg" centered>
          <Space direction="column" gap={20} className="text-text" style={{ padding: '30px 0' }}>
            <h1 className="text-primary text-lg font-medium">Content</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At culpa deleniti ea esse ex
              exercitationem molestias nulla quod ratione repellat, sequi veniam. Et fugit maiores
              odit sint voluptatem! Obcaecati, reiciendis.
            </p>

            <button className="text-primary p-3 bg-secondary w-fit">Button</button>
          </Space>
        </Container>
      </main>
    </div>
  );
};

export default App;
