import getAllUrbaniaTypes from "@/actions/urbania";


export const GET = async (request: Request) => {
  
  const result = await getAllUrbaniaTypes();
  
  return Response.json(result);
};
