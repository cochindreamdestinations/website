import { getBusCarouselImages } from "@/actions/bus";





export const GET = async (request: Request) => {
  
  const result = await getBusCarouselImages();
  return Response.json(result);
};
