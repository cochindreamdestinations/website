import { Subgrid } from '@/components/SimpleGrid/SimpleGrid';
import { Center, Title } from '@mantine/core';

export default function Gallery() {
  return (
    <>
      <Center>
        <Title size="h2">Vehicle Gallery</Title>
      </Center>
      <Subgrid />
    </>
  );
}
