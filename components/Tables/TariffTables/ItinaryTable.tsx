'use client';
import { Container, Table } from '@mantine/core';

export default function ItenaryTable() {
  return (
    <>
      <Container my="md">
        <Table verticalSpacing="xs" withColumnBorders striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Number of days</Table.Th>
              <Table.Th>Sample Itineraries/Tour Plans</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr>
              <Table.Td>2 nights - 3 days</Table.Td>
              <Table.Td>Cochin-Munnar-Cochin</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>2 nights - 3 days</Table.Td>
              <Table.Td>Cochin-Alleppy-Cochin</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>3 nights - 4 days</Table.Td>
              <Table.Td>Cochin-Munnar-Alleppy-Cochin</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>3 nights - 4 days</Table.Td>
              <Table.Td>Cochin-Munnar-Thekkady-Cochin</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>4 nights - 5 days</Table.Td>
              <Table.Td>Cochin-Munnar-Thekkady-Alleppey-Cochin</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>5 nights - 6 days</Table.Td>
              <Table.Td>Cochin-Munnar-Thekkady-Kumarakom-Alleppy-Cochin</Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>6 nights - 7 days</Table.Td>
              <Table.Td>
                Cochin-Munnar-Thekkady-Kumarakom-Alleppy-Kovalam-Trivandrum/Cochin
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>7 nights - 8 days</Table.Td>
              <Table.Td>
                Cochin-Munnar-Thekkady-Kumarakom-Alleppy-Kovalam-Trivandrum/Cochin
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>8 nights - 9 days</Table.Td>
              <Table.Td>
                Cochin-Munnar-Thekkady-Kumarakom-Alleppy-Kovalam-Kanyakumari-Trivandrum/Cochin
              </Table.Td>
            </Table.Tr>
            <Table.Tr>
              <Table.Td>9 nights - 10 days</Table.Td>
              <Table.Td>
                Cochin-Munnar-Thekkady-Kumarakom-Alleppy-Kovalam-Kanyakumari-Trivandrum/Cochin
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </Container>
    </>
  );
}
