'use client';

import { Center, Container, Grid, Title } from '@mantine/core';
import classes from './TempoTravellerHeading.module.css';

export default function TempoTravellerHeading() {
  return (
    <Container my="md">
      <Center>
        <Title size="h2" style={{ color: 'green' }}>
          Kerala Tempo Traveller Rentals
        </Title>
      </Center>
      <Grid>
        <Grid.Col span={12}>
          <span className={classes.borderOrange}></span>
        </Grid.Col>
      </Grid>

      <p>
      Cochin Dream Destinations is the largest leading service provider of Kerala tempo travellers with
        our extensive fleet of exclusively owned vehicles, including executive, premium, and luxury
        tempo travellers in Kochi, and its specially trained drivers in tourism with good knowledge
        to provide safe travel throughout "God's Own Country".
      </p>
    </Container>
  );
}
