import { getTravelerCarouselImages } from "@/actions/traveller";




export const GET = async (request: Request) => {
  
  const result = await getTravelerCarouselImages();
  return Response.json(result);
};
