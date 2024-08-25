import { getAllCars } from '@/actions/cars';


export const GET = async (request: Request) => {
  
  const result = await getAllCars();
  return Response.json(result);
};
