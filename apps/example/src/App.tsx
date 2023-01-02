import { MdSearch, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useBreakpoint, useTheme } from '@react-jopau/hooks';
import {
  Button,
  Checkbox,
  Container,
  Header,
  Heading,
  Input,
  Radio,
  Space,
  Switch,
  Text,
  Textarea
} from '@react-jopau/components/ui';
import './App.css';

const App = () => {
  const { darkMode, onToggle } = useTheme();
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
            <Button
              variant="flat"
              color={!darkMode ? 'light' : 'dark'}
              icon={darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
              onClick={onToggle}
            />
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
              <Input label="Name" placeholder="John Doe" fullWidth />
              <Input.Password label="Password" placeholder="********" fullWidth />
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
                  fullWidth
                />
                <Switch size="xs">Subscribe to newsletter</Switch>
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
