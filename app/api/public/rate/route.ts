import { getRateTableForId } from '@/actions/rates';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  console.log("id inside rate table for id", id)
  const result = await getRateTableForId(id!);
  return Response.json(result);
};
