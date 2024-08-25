

import { getCarCarouselImages } from '@/actions/cars';

export const GET = async (request: Request) => {
  
  const result = await getCarCarouselImages();
  return Response.json(result);
};
