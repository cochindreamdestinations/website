'use client';
import { Container, List, Title } from '@mantine/core';

export default async function NoteCard({ extra_km }: any) {
  return (
    <Container my="md" bg="var(--mantine-color-blue-light)">
      <Title size="h5" role="h5">
        Note
      </Title>
      <List>
        <List.Item>
          Additional Charges: Parking Charges, Toll Charges, Interstate Permit Charges.
        </List.Item>
        <List.Item>Rs {extra_km}/- will be applicable for each extra Km for A/c.</List.Item>
        <List.Item>
          Above rates are not applicable during festive/season days such as Pooja holidays, Diwali
          holidays, Christmas holidays, etc.
        </List.Item>
        <List.Item>
          Above rates are subjected to change based on availability/changes in fuel rates, etc.
        </List.Item>
        <List.Item>Km. will be calculated from Cochin Airport to Cochin Airport basis.</List.Item>
      </List>
    </Container>
  );
}
