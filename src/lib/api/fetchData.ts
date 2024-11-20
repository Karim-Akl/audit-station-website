import { BASE_URL } from "@/lib/actions/actions";
import { cookies } from "next/headers";
import { decrypt } from "../authSession";

export async function fetchData({
  endPoint,
  page,
  perPage,
  search,
}: {
  endPoint: string;
  page?: number;
  perPage?: number;
  search?: string;
}) {
  const params = {
    page,
    per_page: perPage,
    search,
  };

  const filteredParams = Object.fromEntries(
    Object.entries(params)
      .filter(([_, value]) => value !== undefined)
      .map(([key, value]) => [key, String(value)])
  );

  const cookie = cookies();
  const session = cookie.get("session");
  const sessionValue = await decrypt(session?.value || "");
  const queryString = new URLSearchParams(filteredParams).toString();
  const response = await fetch(`${BASE_URL}${endPoint}?${queryString}`, {
    headers: {
      Authorization: `Bearer ${sessionValue?.user?.data?.token}`,
    },
  });

  if (!response.ok) {
    console.log(
      `Failed to fetch data from ${endPoint}. Status: ${response.status}`
    );
  }
  const data = await response.json();
  return data?.data;
}
