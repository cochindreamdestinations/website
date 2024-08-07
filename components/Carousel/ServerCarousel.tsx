'use client';
import { Center, Image, Text, Title, useMantineTheme } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import classes from './TaxiCarousel.module.css';
import { quicksand } from '@/app/font';

export default function ServerCarousel({ data, title, size }: any) {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data?.map((item: string) => (
    <Carousel.Slide key={item} className={classes.imageContainer}>
      <Image height={250} src={item} alt={'Image of traveller'} />
    </Carousel.Slide>
  ));

  return (
    <>
      <Center>
        <Title size={size || 'h5'} className={quicksand.className}>
          {title}
        </Title>
      </Center>
      <Carousel
        slideSize={{ base: '100%', sm: '50%', md: '25%' }}
        withIndicators
        height={250}
        loop
        align="start"
      >
        {slides}
      </Carousel>
    </>
  );
}
