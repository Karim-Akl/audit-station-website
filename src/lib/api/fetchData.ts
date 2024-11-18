import { BASE_URL } from '@/lib/actions/actions';

export async function fetchData({ endPoint, page, perPage, search }: { endPoint: string, page?: number, perPage?: number, search?: string }) {
  const params = {
    page,
    per_page: perPage,
    search,
  };

  const filteredParams = Object.fromEntries(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)]),
  );

  const queryString = new URLSearchParams(filteredParams).toString();

  const response = await fetch(`${BASE_URL}${endPoint}?${queryString}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch data from ${endPoint}. Status: ${response.status}`);
    }
    const data = await response.json();
    return data?.data
}
