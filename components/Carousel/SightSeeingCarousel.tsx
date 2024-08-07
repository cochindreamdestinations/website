'use client';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, Button, useMantineTheme, rem, Center, Container } from '@mantine/core';
import classes from './Carousel.module.css';
import { oswald } from '@/app/font';

interface CardProps {
  item: CarouselItem;
}

function Card({ item }: CardProps) {
  return (
    <Paper
      shadow="md"
      p="xl"
      radius="md"
      style={{ backgroundImage: `url(${item.sight_image})` }}
      className={classes.card}
    >
      <Center>
        <Title order={3} className={classes.title}>
          {item.sight_name}
        </Title>
      </Center>
    </Paper>
  );
}

interface CarouselItem {
  id: number;
  sight_image: string;
  sight_name: string;
  place_id: string;
}

interface CarouselProps {
  data: CarouselItem[];
}

export function SightSeeingCarousel({ data }: CarouselProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item: CarouselItem) => (
    <Carousel.Slide key={item.id}>
      <Card item={item} />
    </Carousel.Slide>
  ));

  return (
    <Container my="md">
      <Center>
        <Title className={oswald.className} size="h3">
          SIGHTSEEING
        </Title>
      </Center>
      <Carousel
        height={300}
        slideSize={{ base: '100%', sm: '50%', xs: '40%', md: '33.333333%' }}
        slideGap={{ base: rem(1), sm: 'xl' }}
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
