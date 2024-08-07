import { Table } from '@mantine/core';

export default function KochiToSabariMalaTable() {
  return (
    <Table verticalSpacing="xs" withColumnBorders striped highlightOnHover withTableBorder>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Vehicle</Table.Th>
          <Table.Th>Passengers</Table.Th>
          <Table.Th>Rates</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>
        <Table.Tr>
          <Table.Td>Swift Dzire/Toyota Etios/Similar AC</Table.Td>
          <Table.Td>03</Table.Td>
          <Table.Td>7500</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Renault Lodgy/Ertiga AC</Table.Td>
          <Table.Td>05</Table.Td>
          <Table.Td>8500</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Toyota Innova AC</Table.Td>
          <Table.Td>06</Table.Td>
          <Table.Td>9500</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Toyota Innova Crysta AC</Table.Td>
          <Table.Td>06</Table.Td>
          <Table.Td>10800</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Executive Tempo Traveller AC</Table.Td>
          <Table.Td>10-12</Table.Td>
          <Table.Td>12500</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Urbania AC</Table.Td>
          <Table.Td>15</Table.Td>
          <Table.Td>20700</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Executive Tempo Traveller AC</Table.Td>
          <Table.Td>17</Table.Td>
          <Table.Td>14000</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Executive Tempo Traveller AC</Table.Td>
          <Table.Td>20</Table.Td>
          <Table.Td>17000</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Executive Tempo Traveller AC</Table.Td>
          <Table.Td>26</Table.Td>
          <Table.Td>19000</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Executive Bus AC</Table.Td>
          <Table.Td>34</Table.Td>
          <Table.Td>28000</Table.Td>
        </Table.Tr>
      </Table.Tbody>
    </Table>
  );
}
