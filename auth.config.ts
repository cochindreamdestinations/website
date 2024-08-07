import * as bcrypt from 'bcrypt-ts';
import type { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

import { LoginSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';

export default {
  providers: [
    Credentials({
      id: 'credentials',
      name: 'Credentials',
      // @ts-ignore
      async authorize(credentials) {
        'use server';
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          const passwordsMatch = await bcrypt.compare(password, user.password);
          console.log('passwordmatch status', passwordsMatch);
          if (passwordsMatch) return user;
        }

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
