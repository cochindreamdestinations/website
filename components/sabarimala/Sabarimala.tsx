'use client';
import { Center, Container, List, Table, Text, Title } from '@mantine/core';
import classes from './Heading.module.css';
import KochiToSabariMalaTable from './KochiSabarimala';
import Notes from './Notes';
import GvrToSabartimala from './GuruvayoorSabarimala';
export default function Heading() {
  return (
    <Container my="md">
      <Center>
        <Title size="h2">
          Sabarimala Taxi Services From Cochin (Kochi) - శబరిమల టాక్సీ సర్వీస్
        </Title>
      </Center>
      <Center>
        <span className={classes.borderOrange}></span>
      </Center>
      <Center>
        <Title size="h4">
          Cochin to Sabarimala (Pamba) Taxi Booking - కొచ్చిన్ టు శబరిమల (పంబా) టాక్సీ బుకింగ్
        </Title>
      </Center>
      <Center>
        <List>
          <List.Item>
            Day 01: Pick up from Cochin Airport. Proceed to Pamba/Nilakkal (Sabarimala). Visit
            En-route temples.
          </List.Item>
          <List.Item>
            Day 02: Pick up from Nilakkal, Sabarimala and transfer back to Cochin Airport.
          </List.Item>
          <Text>En-route Temple Visit: Erumeli Temple</Text>
        </List>
      </Center>
      <KochiToSabariMalaTable />
      <Notes />
      <Center>
        <Title size="h4">Cochin to Guruvayoor to Sabarimala to Cochin Taxi Service</Title>
      </Center>
      <Center>
        <List>
          <List.Item>
            Day 01: Pick up from Cochin Airport. Proceed to Guruvayoor Temple. After Dharsan proceed
            to Pamba/Nilakkal (Sabarimala). Visit En-route temples.
          </List.Item>
          <List.Item>
            Day 02: Pick up from Nilakkal, Sabarimala and transfer back to Cochin Airport.
          </List.Item>
          <Text>En-route Temple Visit: Erumeli Temple</Text>
        </List>
      </Center>
      <GvrToSabartimala />
      <Notes />
    </Container>
  );
}
