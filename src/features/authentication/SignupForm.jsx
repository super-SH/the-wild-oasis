import { useForm } from 'react-hook-form';
import Button from '../../ui/Button';
import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useSignup } from './useSignup';

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const { signup, isPending } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: reset,
      }
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label='Full name' error={errors?.fullName?.message}>
        <Input
          type='text'
          id='fullName'
          disabled={isPending}
          {...register('fullName', {
            required: 'This field is required',
          })}
        />
      </FormRow>

      <FormRow label='Email address' error={errors?.email?.message}>
        <Input
          type='email'
          id='email'
          disabled={isPending}
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: 'Provide a valid email address',
            },
          })}
        />
      </FormRow>

      <FormRow
        label='Password (min 8 characters)'
        error={errors?.password?.message}
      >
        <Input
          type='password'
          disabled={isPending}
          id='password'
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'Password needs a minimun of 8 charaters',
            },
          })}
        />
      </FormRow>

      <FormRow label='Repeat password' error={errors?.passwordConfirm?.message}>
        <Input
          type='password'
          disabled={isPending}
          id='passwordConfirm'
          {...register('passwordConfirm', {
            required: 'This field is required',
            validate: (value) =>
              value === getValues().password || 'Passwords need to match',
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button
          variation='secondary'
          disabled={isPending}
          type='reset'
          onClick={reset}
        >
          Cancel
        </Button>
        <Button disabled={isPending}>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
