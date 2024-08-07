import { Skeleton } from '@mantine/core';

export default function LoadingSkleton() {
  return (
    <>
      <Skeleton height={10} radius="xl" />
      <Skeleton height={10} radius="xl" />
      <Skeleton height={10} radius="xl" />
      <Skeleton height={10} radius="xl" />
    </>
  );
}
