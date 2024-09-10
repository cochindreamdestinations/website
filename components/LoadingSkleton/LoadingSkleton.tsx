import { Skeleton } from '@mantine/core';

export default function LoadingSkleton() {
  return (
    <>
      <Skeleton height={40} radius="xl" />
      <br/>
      <Skeleton height={40} radius="xl" />
      <br/>
      <Skeleton height={40} radius="xl" />
      <br/>
      <Skeleton height={40} radius="xl" />
    </>
  );
}
