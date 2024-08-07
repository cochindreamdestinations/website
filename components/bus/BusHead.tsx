'use client';
import { Center, Container, Grid, Title } from '@mantine/core';
import classes from './BusHead.module.css';

export default function BusHead() {
  return (
    <>
      <Container my="md">
        <Center>
          <Title size="h2">Kerala Bus Rentals</Title>
        </Center>
      </Container>
      <Grid>
        <Grid.Col span={12}>
          <span className={classes.borderOrange}></span>
        </Grid.Col>
      </Grid>
      <Container my="md">
        <p>
          Trip Wagon Holidays is the largest leading service provider of tourist bus rentals in
          Kerala with our wide fleet of owned vehicles along with specially trained drivers in
          tourism with good knowledge to render safe travel across “Gods Own Country”
        </p>
      </Container>
    </>
  );
}
