import {  getRateTableForId } from '@/actions/cars';
import getAllTravelerInsideImages from '@/actions/traveller';


export const GET = async (request: Request) => {
  
  const result = await getAllTravelerInsideImages();
  let finalResult = [];
  for (let i of result) {
    
    let data = await getRateTableForId(i.vehicle_type);
    i.data = data;
    finalResult.push(i)
  }
  return Response.json(finalResult);
};
