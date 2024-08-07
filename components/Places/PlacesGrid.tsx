'use client';
import { Button, Center, Grid, Paper, Text, Title } from '@mantine/core';
import classes from './PlacesGrid.module.css';
import Link from 'next/link';
import { PlaceDataType } from '@/actions/places';

interface CardProps {
  image: string;
  title: string;
  category: string;
  link: string;
}

function Card({ image, title, category, link }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${image})` }}
      className={classes.card}
    >
      <div>
        <Text className={classes.category} size="xs">
          {category}
        </Text>
        <Title order={3} className={classes.title}>
          {title}
        </Title>
      </div>
      <Button variant="white" color="dark" component={Link} href={`/places/${link}`}>
        View More
      </Button>
    </Paper>
  );
}

interface PlacesGridProps {
  data: PlaceDataType[];
}

export default function PlacesGrid({ data }: PlacesGridProps) {
  return (
    <Grid>
      <Grid.Col span={12}>
        <Center>
          <Title size="h2">Places to Visit</Title>
        </Center>
      </Grid.Col>
      {data.map((item) => (
        <Grid.Col key={item.id} span={{ base: 12, md: 6, lg: 3 }}>
          <Card image={item.image} title={item.place} category={item.category} link={item.id} />
        </Grid.Col>
      ))}
    </Grid>
  );
}
