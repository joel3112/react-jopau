import { act, renderHook, waitFor } from '@testing-library/react';
import { useForm } from './use-form';

const defaultValues = { username: 'test', password: 'test' };
describe('Tests useForm hook', () => {
  test('returns values correctly', async () => {
    const { result } = renderHook(() => useForm({ defaultValues }));

    await waitFor(() => {
      expect(result.current.formState.defaultValues).toStrictEqual(defaultValues);
    });

    await waitFor(() => {
      expect(result.current.values).toStrictEqual(defaultValues);
    });
  });

  test('sets values correctly', async () => {
    const { result } = renderHook(() => useForm({ defaultValues }));

    act(() => {
      result.current.setValue('username', 'test2');
      result.current.setValue('password', 'test2');
    });

    await waitFor(() => {
      expect(result.current.values).toStrictEqual({ username: 'test2', password: 'test2' });
    });
  });

  test('submits values correctly', async () => {
    const onSubmit = jest.fn();
    const { result } = renderHook(() => useForm({ defaultValues }));

    act(() => {
      result.current.register('username');
      result.current.register('password');
      result.current.handleSubmit(onSubmit)();
    });

    await waitFor(() => {
      expect(onSubmit).toBeCalledTimes(1);
    });
  });

  test('resets values correctly', async () => {
    const { result } = renderHook(() => useForm({ defaultValues }));

    act(() => {
      result.current.setValue('username', 'test2');
      result.current.setValue('password', 'test2');
    });

    await waitFor(() => {
      expect(result.current.values).toStrictEqual({ username: 'test2', password: 'test2' });
    });

    act(() => {
      result.current.reset();
    });

    await waitFor(() => {
      expect(result.current.values).toStrictEqual(defaultValues);
    });
  });

  test('returns errors correctly', async () => {
    const { result } = renderHook(() =>
      useForm({
        validators: {
          username: { required: true },
          password: { required: [true, 'Password is required'] }
        }
      })
    );

    act(() => {
      result.current.register('username');
      result.current.register('password');
      result.current.handleSubmit(() => {})();
    });

    await waitFor(() => {
      expect(result.current.formState.errors).toStrictEqual({
        username: { type: 'required', message: '' },
        password: { type: 'required', message: 'Password is required' }
      });
    });

    expect(result.current.formState.isValid).toBe(false);
  });
});
