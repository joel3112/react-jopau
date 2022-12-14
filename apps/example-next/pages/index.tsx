import Head from 'next/head';
import Image from 'next/image';
import { Inter } from '@next/font/google';
import styles from '../styles/Home.module.css';
import { MdOutlineDarkMode, MdOutlineLightMode, MdSearch } from 'react-icons/md';
import {
  Button,
  Checkbox,
  Container,
  Header,
  Heading,
  Input,
  Radio,
  Select,
  Space,
  Switch,
  Textarea
} from '@react-jopau/components';
import { useBreakpoint, useTheme } from '@react-jopau/hooks';

const inter = Inter({ subsets: ['latin'] });

const Logo = () => (
  <div className="text-text flex gap-4 h-[20px]">
    <Image src="/next.svg" alt="Next.js Logo" width={110} height={37} />
    <Image src="/thirteen.svg" alt="13" width={30} height={31} />
  </div>
);

const Home = () => {
  const { darkMode, onToggle } = useTheme();
  const breakpoint = useBreakpoint();

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header>
        <Header logo={<Logo />} maxWidth="lg">
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
      <main className={styles.main}>
        <Container maxWidth="lg" centered>
          <h4 className={inter.className}>Current breakpoint: {breakpoint.key}</h4>

          <Space direction="column" gap={20} className="mt-16">
            <Heading as="h4" color="primary">
              Form
            </Heading>
            <form className="w-[700px] max-w-[100%] flex-col grid grid-cols-2 gap-10 max-sm:flex">
              <Input label="Name" placeholder="John Doe" fullWidth />
              <Select size="sm" label="Country" fullWidth>
                <Select.Option value="FR">France</Select.Option>
                <Select.Option value="ES">Spain</Select.Option>
                <Select.Option value="IT">Italy</Select.Option>
                <Select.Option value="DE">Germany</Select.Option>
              </Select>
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
                <Radio value="not">Dont contact me</Radio>
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
    </>
  );
};

export default Home;
