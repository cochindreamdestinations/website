import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';

import { db } from '@/lib/db';
import authConfig from '@/auth.config';
import { getUserById } from '@/data/user';

// import { getAccountByUserId } from "./data/account";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: '/auth/login',
    error: '/auth/error',
  },

  callbacks: {
    async signIn() {
      return true;
    },

    async session({ token, session }) {
      
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (session.user) {
        // @ts-ignore
        session.user.email = token.email;
      }

      return session;
    },
    async jwt({ token }) {
      console.warn('jwt callback');
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.email = existingUser.email;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  ...authConfig,
});
