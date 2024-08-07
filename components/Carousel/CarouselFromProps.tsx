'use client';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { useMantineTheme, rem, Image } from '@mantine/core';

interface CardProps {
  image: string;
  title: string;
  category: string;
}

export function CarouselFromProp({ data }: any) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item: any) => (
    <Carousel.Slide key={item.title}>
      <Image src={item.image} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%', xs: '40%', md: '33.333333%' }}
      slideGap={{ base: rem(2), sm: 'xl' }}
      height={250}
      previousControlProps={{
        'aria-label': 'Previous',
      }}
      nextControlProps={{
        'aria-label': 'Next',
      }}
      align="start"
      slidesToScroll={mobile ? 1 : 2}
    >
      {slides}
    </Carousel>
  );
}
