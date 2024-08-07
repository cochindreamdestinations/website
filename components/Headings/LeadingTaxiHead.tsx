'use client';
import { Center, Container, Grid, Title } from '@mantine/core';
import './KeralaTaxiHeader.module.css';
import { roboto_mono } from '@/app/font';
export default function LeadingTaxiHead() {
  return (
    <>
      <Grid>
        <Grid.Col span={12}>
          <Center>
            <Title className={roboto_mono.className} size="h2">
              The Leading Tours & Travels In Cochin (Kochi) - Kochi Taxi Services
            </Title>
          </Center>
        </Grid.Col>
        <Container my="md">
          <Grid.Col span={12}>
            <Center>
              Trip Wagon is the leading service provider of tourist vehicles, kerala taxi packages
              in Kerala with our wide fleet of vehicles. We can deliver you these vehicles at any
              time and at anywhere in Kerala at the most economical rates. Our drivers are specially
              trained in tourism with good knowledge about Kerala geography to render memorable and
              safe travel across “Gods Own Country”
            </Center>
          </Grid.Col>
        </Container>
      </Grid>
    </>
  );
}
