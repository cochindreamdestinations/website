'use client';
import { Center, Container, Grid, Title } from '@mantine/core';
import classes from './UrbaniaHead.module.css';
import { oswald } from '@/app/font';

export default function UrbaniaHead() {
  return (
    <>
      <Container my="md">
        <Center>
          <Title size="h2">Kerala Urbania Rentals</Title>
        </Center>
      </Container>
      <Grid>
        <Grid.Col span={12}>
          <span className={classes.borderOrange}></span>
        </Grid.Col>
      </Grid>
      <Container my="md">
        <p>
          Trip Wagon Holidays proudly introduce the next level of luxury travel with its wide range
          of Premium Urbania rentals in Kerala for tourism services. Looking to book Urbania in
          Kochi? Call Us right now for best deals on Urbania Taxi. Pepper Kerala Holidays is the
          largest leading service provider of Urbania rentals in Kerala with our exclusively owned
          vehicles, including premium, and luxury urbania in Kochi, along with our specially trained
          drivers in tourism with good knowledge to provide safe travel throughout "God's Own
          Country".
        </p>
        <p>
          The FM 2.6 CR ED TCIC diesel engine, which is derived from Mercedes, powers the Urbania,
          making it an unparalleled vehicle in terms of quality and comfort.
        </p>
      </Container>
    </>
  );
}
