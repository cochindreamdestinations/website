
'use client';
import { Center, Title, Table } from '@mantine/core';
import CheckInTime from '../RateTable/CheckInTime';

export default function HouseboatTables() {
  return (
    <>
      <Center>
        <Title size="h4">Alleppey Deluxe Houseboat Rates</Title>
      </Center>
      <Table verticalSpacing="xs" withColumnBorders striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Type of House boat</Table.Th>

            <Table.Th> Rate</Table.Th>
            <Table.Th>Extra person</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Deluxe Houseboat 1 bedroom - 2 pax</Table.Td>
            <Table.Td>8000</Table.Td>
            <Table.Td>750 /-</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Deluxe Houseboat 2 bedroom - 4 pax</Table.Td>
            <Table.Td>11000</Table.Td>
            <Table.Td>750 /-</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Deluxe Houseboat 3 bedroom - 6 pax</Table.Td>
            <Table.Td>14000</Table.Td>
            <Table.Td>750 /-</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>

      <CheckInTime/>

      <Center>
        <Title size="h4">Alleppey Premium Houseboat Rates</Title>
      </Center>
      <Table verticalSpacing="xs" withColumnBorders striped highlightOnHover withTableBorder>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Type of House boat</Table.Th>

            <Table.Th> Rate</Table.Th>
            <Table.Th>Extra person</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>
          <Table.Tr>
            <Table.Td>Premium Houseboat 1 bedroom - 2 pax</Table.Td>
            <Table.Td>10000</Table.Td>
            <Table.Td>750 /-</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Premium Houseboat 2 bedroom - 4 pax</Table.Td>
            <Table.Td>13000</Table.Td>
            <Table.Td>750 /-</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Premium Houseboat 3 bedroom - 6 pax</Table.Td>
            <Table.Td>17000</Table.Td>
            <Table.Td>750 /-</Table.Td>
          </Table.Tr>
        </Table.Tbody>
      </Table>
      <CheckInTime/>
    </>
  );
}
