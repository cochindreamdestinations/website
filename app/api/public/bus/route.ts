import getAllBusTypes from '@/actions/bus';
import {  getRateTableForId } from '@/actions/cars';



export const GET = async (request: Request) => {
  
  const result = await getAllBusTypes();
  let finalResult = [];
  for (let i of result) {
    let data = await getRateTableForId(i.id);
    i.data = data;
    finalResult.push(i)
  }
  return Response.json(finalResult);
};
