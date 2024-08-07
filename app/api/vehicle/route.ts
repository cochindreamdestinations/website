import { getVehicleByType } from '@/actions/rates';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const result = await getVehicleByType(id!);
  return Response.json(result);
};
