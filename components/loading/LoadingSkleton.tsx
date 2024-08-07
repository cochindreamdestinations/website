'use client';

import { Skeleton } from '@mantine/core';

export default function LoadingSkeleton() {
  return (
    <>
      <Skeleton height={10} radius="xl" />
      <Skeleton height={10} mt={6} radius="xl" />
      <Skeleton height={10} mt={6} width="70%" radius="xl" />
    </>
  );
}
