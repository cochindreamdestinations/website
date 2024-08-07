'use client';
import { RateList } from '@/actions/traveller';
import { Center, Container, Table, Title } from '@mantine/core';

interface TableListProps {
  data?: RateList[] | null;
  description: string;
}

const TableList = ({ data, description }: TableListProps) => {
  return (
    <>
      <Container my="md">
        <Center>
          <Title size="h4">{description} RATE IN KERALA</Title>
        </Center>
        <Table verticalSpacing="xs" withColumnBorders striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Number of days</Table.Th>
              <Table.Th>Km</Table.Th>
              <Table.Th>AC Rate</Table.Th>
              <Table.Th>Driver Bata</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data?.map((item: RateList) => (
              <Table.Tr key={item.id}>
                <Table.Td>{item.number_of_days}</Table.Td>
                <Table.Td>{item.max_km}</Table.Td>
                <Table.Td>{item.ac_rate}</Table.Td>
                <Table.Td>{item.bata}</Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
      </Container>
    </>
  );
};

export default TableList;
