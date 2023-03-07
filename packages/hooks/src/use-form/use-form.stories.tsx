import { useState } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Heading,
  Input,
  Radio,
  Select,
  Stack,
  Switch
} from '@react-jopau/components';
import { prepareParameters, SBJSONPreview } from '@react-jopau/shared/stories';
import { useForm } from './use-form';
import docs from './readme.mdx';

export default {
  title: 'useForm',
  parameters: prepareParameters(docs, true)
};

export const Docs = () => {};

interface IForm {
  username: string;
  password: string;
  country: string;
  preferences: string[];
  contact: string;
  terms: boolean;
}

export const Default = () => {
  const [mode, setMode] = useState('onSubmit');
  const { register, control, values, formState, setValue, reset, handleSubmit } = useForm<IForm>({
    defaultValues: {
      username: 'John',
      password: '12345',
      country: 'FR',
      preferences: ['music', 'movies'],
      contact: 'email',
      terms: true
    },
    validators: {
      username: { required: true },
      password: { required: true, minLength: [6, 'Min 6 characters'] },
      country: { validate: [(value: string) => value === 'ES', 'You must select Spain'] }
    },
    mode
  });

  const onSubmit = (event: IForm) => {
    alert(JSON.stringify(event, null, 2));
  };

  return (
    <Container className="py-10" maxWidth={900}>
      {/* Configuration */}
      <Stack direction="column" gap={1} className="mb-10 flex-wrap border p-6 border-border">
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
        <Stack gap={4} className="mt-2 flex-wrap">
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
        </Stack>
      </Stack>

      {/* Form example */}
      <Stack gap={1} justify="between" className="flex-wrap">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex h-fit flex-col gap-10 max-w-[100%] min-[600px]:basis-[45%]">
          {/*Native controls*/}
          <input
            className="h-fit border text-black border-border"
            placeholder="Username"
            {...register('username')}
          />
          {formState.errors?.username && (
            <span className="-mt-8 text-xs text-red">Username is required</span>
          )}

          {/* Custom controls components */}
          <Input.Password size="sm" label="Password" fullWidth {...control('password')} />
          <Select size="sm" label="Country" fullWidth {...control('country')}>
            <Select.Option value="FR">France</Select.Option>
            <Select.Option value="ES">Spain</Select.Option>
            <Select.Option value="IT">Italy</Select.Option>
            <Select.Option value="DE">Germany</Select.Option>
          </Select>
          <Checkbox.Group
            orientation="horizontal"
            size="xs"
            label="Preferences"
            {...control('preferences')}>
            <Checkbox value="music">Music</Checkbox>
            <Checkbox value="movies">Movies</Checkbox>
            <Checkbox value="football">Football</Checkbox>
            <Checkbox value="others">Others</Checkbox>
          </Checkbox.Group>
          <Radio.Group
            orientation="horizontal"
            size="xs"
            label="Contact me via"
            {...control('contact')}>
            <Radio value="email">Email</Radio>
            <Radio value="phone">Phone</Radio>
            <Radio value="not">Don't contact me</Radio>
          </Radio.Group>
          <Switch size="xs" {...control('terms')}>
            I agree to the terms and conditions
          </Switch>

          <Stack gap={1}>
            <Button auto variant="bordered" color="secondary" onClick={() => reset()}>
              Reset
            </Button>
            <Button auto type="submit" color="secondary">
              Submit
            </Button>
          </Stack>
        </form>

        <div className="min-[600px]:basis-[45%]">
          <h6>Values:</h6>
          <SBJSONPreview className="origin-top-left scale-[90%]" code={values} />

          <h6>Errors:</h6>
          <SBJSONPreview className="origin-top-left scale-[90%]" code={formState.errors} />
        </div>
      </Stack>
    </Container>
  );
};
Default.storyName = 'Playground';
Default.parameters = { viewMode: 'story' };
