'use client';
import { Center, Grid, Title } from '@mantine/core';
import './KeralaTaxiHeader.module.css';
import { oswald } from '@/app/font';

export default function KeralaTaxiHead() {
  return (
    <>
      <Grid>
        <Grid.Col span={12}>
          <Center>
            <Title className={oswald.className} size="h2">
              Kerala Taxi Packages-Kochi Taxi-Kerala Tempo Traveller
            </Title>
          </Center>
        </Grid.Col>
      </Grid>
    </>
  );
}
