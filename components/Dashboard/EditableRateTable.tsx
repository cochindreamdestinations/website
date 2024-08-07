'use client';
import { useEffect, useState } from 'react';
import TableList from './TableList';
import { VehiclesMaster } from '@prisma/client';

export default function EdibleRateTable({ id }: any) {
  const [vehicles, setVehicle] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const resp = await fetch(
          '/api/vehicle?' +
            new URLSearchParams({
              id: id,
            })
        );
        const vech = await resp.json();

        setVehicle(vech);
      } catch (e) {}
    })();
  }, []);

  return <>{vehicles?.map((item: VehiclesMaster) => <TableList key={item.id} vehicle={item} />)}</>;
}
