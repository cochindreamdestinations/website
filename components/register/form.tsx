'use client';

import { useTransition } from 'react';
import { useForm, zodResolver } from '@mantine/form';
import * as z from 'zod';

import { RegisterDefaults, RegisterSchema } from '@/schemas';

import { register } from '@/actions/register';
import { notifications } from '@mantine/notifications';

import { useSearchParams } from 'next/navigation';

import {
  Anchor,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
} from '@mantine/core';

export default function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl');

  const form = useForm({
    initialValues: RegisterDefaults,

    validate: zodResolver(RegisterSchema),
  });

  const onRegister = async (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values).then((data: any) => {
        if (data.success)
          notifications.show({
            title: 'Success',
            message: 'Registration successful',
          });
        if (data.error)
          notifications.show({
            title: 'Error',
            message: 'Registration error',
          });
      });
    });
  };
  return (
    <Paper radius="md" p="xl" withBorder>
      <form
        className="card-body shadow-sm hover:shadow-lg bg-white bg-opacity-50 rounded-lg font-bold"
        onSubmit={form.onSubmit(onRegister)}
      >
        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          radius="md"
          {...form.getInputProps('email')}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          radius="md"
          {...form.getInputProps('password')}
        />
        <TextInput
          label="Confirm Password"
          placeholder="Confirm Password"
          radius="md"
          {...form.getInputProps('confirm_password')}
        />

        <Text ta="center" mt="md">
          Already User?
          <Anchor<'a'> href="/auth/login" fw={700}>
            Sign In
          </Anchor>
        </Text>
        {!isPending && (
          <Group>
            <Button type="submit" variant="filled">
              Register
            </Button>
            <Divider orientation="vertical"></Divider>
          </Group>
        )}
      </form>
    </Paper>
  );
}
