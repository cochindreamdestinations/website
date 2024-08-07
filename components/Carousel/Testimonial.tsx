'use client';
import { Center, Container, Image, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import classes from './TaxiCarousel.module.css';
import { quicksand } from '@/app/font';
import bg from './bg.svg';

interface Review {
  text: string;
  reviewer: string;
}

interface TestimonialProps {
  data: Review[];
  title: string;
}

export default function TestimonialCarousel({ data, title }: TestimonialProps) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data?.map((item: Review) => (
    <Carousel.Slide
      key={item.reviewer}
      style={{ backgroundImage: `url(${bg.src})`, color: 'antiquewhite' }}
    >
      <Container my="md">
        <Center>
          <Text>{item.text}</Text>
        </Center>
        <Center>-{item.reviewer}-</Center>
      </Container>
    </Carousel.Slide>
  ));

  return (
    <>
      <Center>
        <Title className={quicksand.className} size="h3">
          {title}
        </Title>
      </Center>
      <Center>
        <span className={classes.borderOrange}></span>
      </Center>
      {data && (
        <Carousel
          slideSize={{ base: '100%' }}
          withIndicators
          height={300}
          loop
          align="start"
          previousControlProps={{
            'aria-label': 'Previous',
          }}
          nextControlProps={{
            'aria-label': 'Next',
          }}
        >
          {slides}
        </Carousel>
      )}
    </>
  );
}
