import { getUrbaniaCarouselImages } from "@/actions/urbania";


export const GET = async (request: Request) => {
  
  const result = await getUrbaniaCarouselImages();
  
  return Response.json(result);
};
