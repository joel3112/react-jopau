import { useState } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Heading,
  Input,
  Radio,
  Select,
  Space,
  Switch
} from '@react-jopau/components/ui';
import { SBJSONPreview } from '@react-jopau/styles/components';
import { prepareParameters } from '@react-jopau/styles/utils';
import { useForm } from './use-form';
import docs from './readme.mdx';

export default {
  title: 'useForm',
  parameters: prepareParameters(docs, true)
};

export const Docs = () => {};

interface IForm {
  name: string;
  lastname: string;
  username: string;
  password: string;
  age: number;
  country: string;
  preferences: string[];
  contact: string;
  terms: boolean;
}

export const Default = () => {
  const [mode, setMode] = useState('onSubmit');
  const { register, control, values, formState, setValue, reset, handleSubmit } = useForm<IForm>({
    defaultValues: {
      name: '',
      lastname: '',
      username: 'John',
      password: '12345',
      age: 10,
      country: 'FR',
      preferences: ['music', 'movies'],
      contact: 'email',
      terms: true
    },
    validators: {
      name: { required: [true, 'Name is required'] },
      username: { required: [true, 'Username is required'] },
      password: { required: true, minLength: [6, 'Password must be at least 6 characters'] },
      age: { required: true, min: [18, 'You must be at least 18 years old'] },
      country: { validate: [(value: string) => value === 'ES', 'You must select Spain'] },
      terms: { required: true }
    },
    mode
  });

  const onSubmit = (event: IForm) => {
    alert(JSON.stringify(event, null, 2));
  };

  return (
    <Container maxWidth={900}>
      {/* Configuration */}
      <Space direction="column" gap={10} wrap className="border border-border p-6 mb-10">
        <Heading as="h6">Config:</Heading>
        <Radio.Group
          orientation="horizontal"
          size="xs"
          label="Mode validation"
          defaultValue={mode}
          onChange={(e) => setMode(e)}>
          <Radio value="onBlur">onBlur</Radio>
          <Radio value="onChange">onChange</Radio>
          <Radio value="onSubmit">onSubmit</Radio>
          <Radio value="onTouched">onTouched</Radio>
          <Radio value="all">all</Radio>
        </Radio.Group>
        <Space gap={4} className="mt-2" wrap>
          <Button color="light" size="xs" onClick={() => setValue('username', 'Adrian')}>
            Set Username to Adrian
          </Button>
          <Button color="light" size="xs" onClick={() => setValue('country', 'IT')}>
            Set Country to Italy
          </Button>
          <Button color="light" size="xs" onClick={() => setValue('preferences', ['football'])}>
            Set Preferences to Football
          </Button>
          <Button color="light" size="xs" onClick={() => setValue('terms', false)}>
            Disable Terms
          </Button>
        </Space>
      </Space>

      {/* Form example */}
      <Space gap={10} justify="between" wrap>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="basis-[45%] max-w-[100%] flex flex-col gap-10">
          {/* Native controls */}
          <input className="border border-border" placeholder="Name" {...register('name')} />
          {formState.errors?.name && (
            <span className="text-xs text-red -mt-8">Name is required</span>
          )}
          <input
            className="border border-border"
            placeholder="Last Name"
            {...register('lastname')}
          />

          {/* Custom controls components */}
          <Input size="sm" label="Username" fullWidth {...control('username')} />
          <Input.Password size="sm" label="Password" fullWidth {...control('password')} />
          <Input type="number" size="sm" label="Age" fullWidth {...control('age')} />
          <Select size="sm" label="Country" fullWidth {...control('country')}>
            <Select.Option value="FR">France</Select.Option>
            <Select.Option value="ES">Spain</Select.Option>
            <Select.Option value="IT">Italy</Select.Option>
          </Select>
          <Checkbox.Group size="xs" label="Preferences" {...control('preferences')}>
            <Checkbox value="music">Music</Checkbox>
            <Checkbox value="movies">Movies</Checkbox>
            <Checkbox value="football">Football</Checkbox>
            <Checkbox value="others">Others</Checkbox>
          </Checkbox.Group>
          <Radio.Group size="xs" label="Contact me via" {...control('contact')}>
            <Radio value="email">Email</Radio>
            <Radio value="phone">Phone</Radio>
            <Radio value="not">Don't contact me</Radio>
          </Radio.Group>
          <Switch size="xs" label="I agree to the terms and conditions" {...control('terms')} />

          <Space gap={10} className="mt-6">
            <Button auto variant="bordered" color="secondary" onClick={() => reset()}>
              Reset
            </Button>
            <Button auto type="submit" color="secondary">
              Submit
            </Button>
          </Space>
        </form>

        <div className="basis-[45%]">
          <SBJSONPreview className="scale-[90%] origin-top-left" code={{ values, formState }} />
        </div>
      </Space>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
