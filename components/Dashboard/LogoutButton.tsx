'use client';

import { logout } from '@/actions/logout';
import { Button } from '@mantine/core';

export default async function LogoutButton() {
  const handleLogout = async () => {
    await logout();
  };
  return (
    <Button variant="filled" color="blue" onClick={handleLogout}>
      Logout
    </Button>
  );
}
