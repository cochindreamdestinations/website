'use client';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, Center, Container } from '@mantine/core';
import classes from './Carousel.module.css';
import { oswald } from '@/app/font';
import Link from 'next/link';

interface CardProps {
  item: CarouselItem;
}

function Card({ item }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      style={{ backgroundImage: `url(${item.image})` }}
      className={classes.card}
    >
      <Center>
        <Title order={3} className={classes.title}>
          {item.name}
        </Title>
      </Center>
      <Button variant="outlined" className={classes.glassButton} component={Link} href={item.link}>
        View More
      </Button>
    </Paper>
  );
}

interface CarouselItem {
  id: number;
  name: string;
  image: string;
  link: string;
}

interface CarouselProps {
  data: CarouselItem[];
}

export function TaxiPackagesCarousel({ data }: CarouselProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = data.map((item: CarouselItem) => (
    <Carousel.Slide key={item.image + item.id}>
      <Card item={item} />
    </Carousel.Slide>
  ));

  return (
    <Container my="lg">
      <Center>
        <Title className={oswald.className} size="h3">
          Kerala Taxi Packages-Kochi Taxi-Kerala Tempo Traveller
        </Title>
      </Center>
      <Carousel
        height={300}
        slideSize={{ base: '100%', sm: '50%', xs: '40%', md: '33.333333%' }}
        classNames={classes}
        previousControlProps={{
          'aria-label': 'Previous',
        }}
        nextControlProps={{
          'aria-label': 'Next',
        }}
        align="start"
        loop
        withIndicators
        slidesToScroll={mobile ? 1 : 2}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
