'use client';
import {
  Paper,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  Group,
  Divider,
  ActionIcon,
} from '@mantine/core';
import { useForm, zodResolver } from '@mantine/form';
import { IoMdArrowRoundBack } from 'react-icons/io';

import classes from './form.module.css';

import Link from 'next/link';
import { startTransition } from 'react';
import { login } from '@/actions/login';
import { useSearchParams } from 'next/navigation';
import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';

interface LoginType {
  email: string;
  password: string;
}

export default function Form() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: zodResolver(LoginSchema),
  });
  const handleLogin = (values: LoginType) => {
    startTransition(() => {
      login(values, callbackUrl)
        .then((data: any) => {
          if (data?.error) {
            console.log(data.error);
            alert('Error in Login');
          }
        })
        .catch((e) => {
          console.log('error caught', e);
          alert('Error in Login');
        });
    });
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <ActionIcon component={Link} href="/">
          <IoMdArrowRoundBack />
        </ActionIcon>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome Admin Login!
        </Title>

        <Divider label="Or continue with email" labelPosition="center" my="lg" />
        <form onSubmit={form.onSubmit(handleLogin)}>
          <TextInput
            label="Email address"
            placeholder="hello@gmail.com"
            size="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            mt="md"
            size="md"
            {...form.getInputProps('password')}
          />
          <Checkbox label="Keep me logged in" mt="xl" size="md" />
          <Button fullWidth mt="xl" size="md" type="submit">
            Login
          </Button>
        </form>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'> href="/auth/register" fw={700}>
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
}
