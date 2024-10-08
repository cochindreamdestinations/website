import { getAllPlaces } from "@/actions/places";



export const GET = async (request: Request) => {
  
  const result = await getAllPlaces();
  
  return Response.json(result);
};
