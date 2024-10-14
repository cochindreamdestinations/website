import { getRateTableForId } from '@/actions/traveller';

import NoteCard from './NoteCard';
import TableList from './TableList';

export default async function RateTableComponent({ id, extra_km, description }: any) {
  
  const urlval = new URL('https://cochindreamdestinations.vercel.app/api/public/rate')
  urlval.searchParams.append("id", id)
  const res = await fetch(urlval, {method:'GET'})
  const data = await res.json();
  
  return (
    <>
      <TableList data={data} description={description} />

      <NoteCard extra_km={extra_km} />
    </>
  );
}
