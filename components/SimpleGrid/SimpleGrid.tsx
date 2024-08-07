'use client';
import {
  SimpleGrid,
  Skeleton,
  Container,
  Stack,
  useMantineTheme,
  px,
  Image,
  Grid,
} from '@mantine/core';

const imageList = [
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/inside_1',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/1',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_1',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/2',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_2',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_9',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/innova_1',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/inside_2',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_3',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_1',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_2',
  'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_4',
];

const getChild = (height: number, index: number) => (
  <Image height={height} radius="md" src={imageList[index]} />
);
const BASE_HEIGHT = 360;
const getSubHeight = (children: number, spacing: number) =>
  BASE_HEIGHT / children - spacing * ((children - 1) / children);

export function Subgrid() {
  const theme = useMantineTheme();
  return (
    <>
      <Container my="md">
        <Grid>
          <Grid.Col span={{ base: 12, xs: 4 }}>{getChild(BASE_HEIGHT, 1)}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>{getChild(BASE_HEIGHT, 2)}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 8 }}>{getChild(BASE_HEIGHT, 3)}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 4 }}>{getChild(BASE_HEIGHT, 4)}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}>{getChild(BASE_HEIGHT, 5)}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 3 }}>{getChild(BASE_HEIGHT, 6)}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 6 }}>{getChild(BASE_HEIGHT, 7)}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 7 }}>{getChild(BASE_HEIGHT, 8)}</Grid.Col>
          <Grid.Col span={{ base: 12, xs: 5 }}>{getChild(BASE_HEIGHT, 9)}</Grid.Col>
        </Grid>
      </Container>
    </>
  );
}
