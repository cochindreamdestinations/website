import { editRates } from '@/actions/rates';
import { RateList } from '@/actions/traveller';
import {
  Button,
  Center,
  Container,
  Modal,
  Table,
  TextInput,
  Title,
  VisuallyHidden,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';

interface VehicleMaster {
  description: string;
  extra_per_km: number;
  id: string;
  name: string;
  pax: number;
  vehicle_type: string;
}

interface TableListProps {
  vehicle: VehicleMaster;
}

const TableList = ({ vehicle }: TableListProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  // const [modalData, setModalData] = useState<RateList | null>(null);
  const form = useForm({
    initialValues: {
      id: 0,
      number_of_days: '',
      vehicle_id: '',
      max_km: 0,
      ac_rate: 0,
      bata: 0,
    },
  });
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const rater = await fetch(
          '/api/rate?' +
            new URLSearchParams({
              id: vehicle.id,
            })
        );
        const rateOut = await rater.json();
        setData(rateOut);
      } catch (e) {}
    })();
  }, []);
  type FormValues = typeof form.values;

  const fetchRatesAgain = async (id: string) => {
    const rater = await fetch(
      '/api/rate?' +
        new URLSearchParams({
          id: id,
        })
    );
    const rateOut = await rater.json();
    setData(rateOut);
  };

  // Use values type in handleSubmit function or anywhere else
  const handleSubmit = async (values: FormValues) => {
    await editRates(values);
    await fetchRatesAgain(values.vehicle_id);
    closeModal();
  };
  const openModal = (item: RateList) => {
    form.setValues(item);
    open();
  };
  const closeModal = () => {
    form.reset();
    close();
  };
  return (
    <>
      <Container my="md">
        <Center>
          <Title size="h4">{vehicle?.description} RATE IN KERALA</Title>
        </Center>
        <Table verticalSpacing="xs" withColumnBorders striped highlightOnHover withTableBorder>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Number of days</Table.Th>
              <Table.Th>Km</Table.Th>
              <Table.Th>AC Rate</Table.Th>
              <Table.Th>Driver Bata</Table.Th>
              <Table.Th>Action</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            {data?.map((item: RateList) => (
              <Table.Tr key={item.id}>
                <Table.Td>{item.number_of_days}</Table.Td>
                <Table.Td>{item.max_km}</Table.Td>
                <Table.Td>{item.ac_rate}</Table.Td>
                <Table.Td>{item.bata}</Table.Td>
                <Table.Td>
                  <Button color="green" onClick={() => openModal(item)}>
                    Edit
                  </Button>
                </Table.Td>
              </Table.Tr>
            ))}
          </Table.Tbody>
        </Table>
        <Modal opened={opened} onClose={closeModal} title="Edit Rate ">
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <Title size="h4">{form.values.vehicle_id}</Title>
            <TextInput
              type="number"
              label="Rate"
              placeholder="Rate"
              {...form.getInputProps('ac_rate')}
            />
            <TextInput
              type="number"
              label="Bata"
              placeholder="Bata"
              {...form.getInputProps('bata')}
            />
            <VisuallyHidden>
              <TextInput hidden label="Hidden" placeholder="Bata" {...form.getInputProps('id')} />
              <TextInput
                hidden
                label="Hidden"
                placeholder="Bata"
                {...form.getInputProps('max_km')}
              />
              <TextInput hidden label="Hidden" placeholder="Bata" {...form.getInputProps('pax')} />
              <TextInput
                hidden
                label="Hidden"
                placeholder="Bata"
                {...form.getInputProps('number_of_days')}
              />
            </VisuallyHidden>
            <Button variant="filled" type="submit">
              SAVE
            </Button>
          </form>
        </Modal>
      </Container>
    </>
  );
};

export default TableList;
