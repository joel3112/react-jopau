import { useContext } from 'react';
import { MdSearch, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useBreakpoint } from '@react-jopau/hooks';
import { ThemeContext } from '@react-jopau/components/contexts';
import { Container, Header, Space } from '@react-jopau/components/ui/layout';
import { Button, Checkbox, Input, Radio, Switch, Textarea } from '@react-jopau/components/ui/forms';
import { Heading, Text } from '@react-jopau/components/ui/typography';
import './App.css';

const App = () => {
  const { darkMode, onToggle } = useContext(ThemeContext);
  const { key } = useBreakpoint();

  return (
    <div className="app bg-background pb-10">
      <header>
        <Header title="Example app" maxWidth="lg">
          <Space align="center" gap={10}>
            <Input
              className="max-sm:hidden"
              variant="bordered"
              placeholder="Search"
              hotKey="meta+k"
            />
            <Button className="sm:hidden" color="primary" variant="flat" icon={<MdSearch />} />
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
        <Container maxWidth="lg" centered className="py-14">
          <Space direction="column" gap={20} className="text-text">
            <Text>
              Current breakpoint: {key} [{window.innerWidth}]
            </Text>
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

          <Space direction="column" gap={20} className="mt-16">
            <Heading as="h4" color="primary">
              Form
            </Heading>
            <form className="w-[700px] max-w-[100%] flex-col grid grid-cols-2 gap-10 max-sm:flex">
              <Input label="Name" placeholder="John Doe" autoWidth />
              <Input.Password label="Password" placeholder="********" autoWidth />
              <Checkbox.Group size="sm" orientation="horizontal" label="Preferences">
                <Checkbox value="football">Football</Checkbox>
                <Checkbox value="food">Food</Checkbox>
                <Checkbox value="other">Other</Checkbox>
              </Checkbox.Group>
              <Radio.Group
                size="sm"
                orientation="horizontal"
                label="Contact me via"
                defaultValue="email">
                <Radio value="email">Email</Radio>
                <Radio value="phone">Phone</Radio>
                <Radio value="not">Don't contact me</Radio>
              </Radio.Group>
              <Space direction="column" gap={8} className="col-span-2">
                <Textarea
                  label="Message"
                  minRows={10}
                  maxRows={15}
                  placeholder="Your message"
                  autoWidth
                />
                <Space gap={10} align="center">
                  <Switch size="xs" />
                  <Text>Subscribe to newsletter</Text>
                </Space>
              </Space>
              <Button type="submit" color="secondary">
                Contact me
              </Button>
            </form>
          </Space>
        </Container>
      </main>
    </div>
  );
};

export default App;
