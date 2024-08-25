'use client';
import { rem, useMantineTheme, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { Carousel } from '@mantine/carousel';
import classes from './TaxiCarousel.module.css';

const data = [
  {
    image: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/mzfpypbsgml2ysv64hxl',
    title: 'Best forests to visit in Munnar',
    category: 'nature',
  },
  {
    image: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/gtmxloywvtvimdp7xshv',
    title: 'Clean and Modern: better than you think',
    category: 'interior',
  },
  {
    image: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/lr5kzcjyedxydr0kotri',
    title: 'Mountains at night: 12 best locations to enjoy the view',
    category: 'nature',
  },
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/traveller_6',
    title: 'Most modern travellers',
    category: 'traveller',
  },
  {
    image:
      'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/urbania/zp5vnssxozioffctpqoe',
    title: 'Best places to visit this winter',
    category: 'tourism',
  },
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/innova_1',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
  {
    image: 'https://res.cloudinary.com/ds0bnfyym/image/upload/f_auto,q_auto/v1/cars/crysta_2',
    title: 'Crysta clean and natural',
    category: 'nature',
  },
  {
    image: 'https://res.cloudinary.com/dtgoc3cww/image/upload/f_auto,q_auto/v1/Innova/aicxeq3ok8b2qhenl2qe',
    title: 'Active volcanos reviews: travel at your own risk',
    category: 'nature',
  },
];

export default function TaxiCarousel() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const slides = data.map((item) => (
    <Carousel.Slide key={item.title} className={classes.imageContainer}>
      <Image height={250} src={item.image} alt={item.title} />
    </Carousel.Slide>
  ));

  return (
    <Carousel
      slideSize={{ base: '100%', sm: '50%', md: '18%' }}
      withIndicators
      height={250}
      loop
      previousControlProps={{
        'aria-label': 'Previous',
      }}
      nextControlProps={{
        'aria-label': 'Next',
      }}
      align="start"
    >
      {slides}
    </Carousel>
  );
}
