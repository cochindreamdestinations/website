import { db } from '@/lib/db';

export const getUserByEmail = async (email: string) => {
  try {
    // todo : find first is used findUnique must be used
    console.log('Get user by email is called', email);
    const user = await db.user.findUnique({
      where: { email: email },
    });

    return user;
  } catch (e) {
    console.log('Error in get user by email', e);
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};
