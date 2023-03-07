import { FormEvent, useContext } from 'react';
import { MdSearch, MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { useBreakpoint } from '@react-jopau/hooks';
import {
  Button,
  Checkbox,
  Container,
  Grid,
  Header,
  Heading,
  Input,
  Radio,
  Space,
  Switch,
  Textarea,
  ThemeContext
} from '@react-jopau/components';
import './App.css';

const App = () => {
  const { darkMode, onToggle } = useContext(ThemeContext);
  const { key } = useBreakpoint();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="pb-10 app bg-background">
      <header>
        <Header title="Example app" maxWidth="lg">
          <Grid align="center" gap={1} className="w-fit">
            <Grid.Item>
              <Input
                className="max-sm:hidden"
                variant="bordered"
                placeholder="Search"
                hotKey="meta+k"
              />
            </Grid.Item>
            <Grid.Item className="sm:hidden">
              <Button color="primary" variant="flat" icon={<MdSearch />} />
            </Grid.Item>
            <Grid.Item>
              <Button
                variant="flat"
                color={!darkMode ? 'light' : 'dark'}
                icon={darkMode ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
                onClick={onToggle}
              />
            </Grid.Item>
          </Grid>
        </Header>
      </header>

      <main>
        <Container maxWidth="lg" centered className="py-14">
          <h4>
            Current breakpoint: {key} [{window.innerWidth}]
          </h4>

          <Space y={1} />

          <Heading as="h4" color="primary">
            Form
          </Heading>

          <Space y={0.5} />

          <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-[400px] max-w-[100%]">
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
            <Textarea
              label="Message"
              minRows={10}
              maxRows={15}
              placeholder="Your message"
              fullWidth
            />
            <Switch size="xs">Subscribe to newsletter</Switch>
            <Button className="fkl" type="submit" color="secondary">
              Contact me
            </Button>
          </form>
        </Container>
      </main>
    </div>
  );
};

export default App;
