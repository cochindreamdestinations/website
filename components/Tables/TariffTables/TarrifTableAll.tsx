'use client';
import { Table, Progress, Anchor, Text, Group, Button, Container } from '@mantine/core';
import classes from './TarifTable.module.css';
import Link from 'next/link';

const data = [
  {
    vehicle: 'Swift Dzire/Toyota Etios/Similar',

    pax: 3,
    id: '/package#sedan_taxi',
  },
  {
    vehicle: 'Suzuki Ertiga',
    id: '/package#suzuki_ertiga',
    pax: 5,
  },
  {
    vehicle: 'Toyota Innova',
    pax: 6,
    id: '/package#innova',
  },
  {
    vehicle: 'Toyota Innova Crysta',
    pax: 6,
    id: '/package#crysta',
  },
  {
    vehicle: 'Ultra Luxury Traveller',
    pax: 10,
    id: '/traveller#traveller_ultra_luxury_08',
  },
  {
    vehicle: 'Premium Tempo Traveller',
    pax: 10,
    id: '/traveller#traveller_premium_10',
  },
  {
    vehicle: 'Premium Tempo Traveller',
    pax: 12,
    id: '/traveller#traveller_premium_12',
  },
  {
    vehicle: 'Executive Tempo Traveller',
    pax: 12,
    id: '/traveller#traveller_executive_12',
  },
  {
    vehicle: 'Luxury Urbania',
    pax: 15,
    id: '/traveller#urbania_15',
  },
  {
    vehicle: 'Premium Urbania',
    pax: 15,
    id: '/traveller#urbania_15',
  },
  {
    vehicle: 'Premium Tempo Traveller',
    pax: 17,
    id: '/traveller#traveller_premium_17',
  },
  {
    vehicle: 'Executive Tempo Traveller',
    pax: 17,
    id: '/traveller#traveller_executive_17',
  },
  {
    vehicle: 'Premium Tempo Traveller AC',
    pax: 20,
    id: '/traveller#traveller_premium_20',
  },
  {
    vehicle: 'Executive Tempo Traveller AC',
    pax: 20,
    id: '/traveller#traveller_executive_20',
  },
  {
    vehicle: 'Premium Tempo Traveller AC',
    pax: 26,
    id: '/traveller#traveller_premium_20',
  },
  {
    vehicle: 'Executive Tempo Traveller AC',
    pax: 26,
    id: '/traveller#traveller_executive_17',
  },
  {
    vehicle: 'Benz Mini Coach AC',
    pax: 26,
    id: '/bus#bus_26_benz',
  },
  {
    vehicle: 'Executive Mini Coach AC',
    pax: 35,
    id: '/bus#bus_34',
  },
  {
    vehicle: 'Luxury Benz Glider AC',
    pax: 45,
    id: '/bus#bus_45_benz',
  },
  {
    vehicle: 'Luxury Benz Multi Glider AC',
    pax: 53,
    id: '/bus#bus_53_benz',
  },
];

export function TariffTable() {
  const rows = data.map((row) => {
    return (
      <Table.Tr key={row.vehicle}>
        <Table.Td>{row.vehicle}</Table.Td>
        <Table.Td>{row.pax}</Table.Td>
        <Table.Td>
          <Button variant="filled" color="violet" component={Link} href={row.id}>
            Select
          </Button>
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Container my="md">
      <Table verticalSpacing="xs" withColumnBorders striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Vehicle</Table.Th>
            <Table.Th>Pax</Table.Th>
            <Table.Th>Rates</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
}
