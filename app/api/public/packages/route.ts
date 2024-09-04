import { getAllCars, getRateTableForId } from '@/actions/cars';


export const GET = async (request: Request) => {
  
  const result = await getAllCars();
  let finalResult = [];
  console.log("get all cars", result)
  for (let i of result) {
    let data = await getRateTableForId(i.vehicle_type);
    i.data = data;
    finalResult.push(i)
  }
  return Response.json(finalResult);
};
