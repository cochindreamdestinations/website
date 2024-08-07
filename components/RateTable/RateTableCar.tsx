import { getRateTableForId } from '@/actions/cars';

import NoteCard from './NoteCard';
import TableList from './TableList';

export default async function RateTableCar({ id, extra_km, description }: any) {
  const data = await getRateTableForId(id);
  return (
    <>
      <TableList data={data} description={description} />

      <NoteCard extra_km={extra_km} />
    </>
  );
}
