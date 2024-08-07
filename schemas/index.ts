import * as z from 'zod';

export const RegisterSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(6),
    confirm_password: z.string().min(6),
  })
  .refine((data: any) => data.password === data.confirm_password, {
    message: 'Password and Confirm password should be same',
    path: ['confirm_password'],
  });

export const RegisterDefaults = {
  email: '',
  password: '',
  confirm_password: '',
  phone_number: '',
};

export const LoginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const LoginDefaults = {
  email: '',
  password: '',
};

export const ResetSchema = z.object({
  email: z.string().email({
    message: 'Email is required',
  }),
});

export const ProjectSchema = z.object({
  project_name: z.string(),
  project_address: z.string(),
  role: z.string(),
});

export const ProjectDefaults = {
  project_name: '',
  project_address: '',
  role: '',
};
