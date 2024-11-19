// lib/api/modifyData.ts
import { BASE_URL } from '../actions/actions';

interface ParamsProps {
  endPoint: string;
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  data?: any;
  id?: string;
  queryParams?: Record<string, string>;  
  token?: string;
}

export async function modifyData({
  endPoint,
  method = 'POST',
  data,
  id,
  queryParams = {},  
  token,
}: ParamsProps) {
  if (!token) {
    throw new Error('Authorization required: No session token found.');
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  };

  let url = `${BASE_URL}${endPoint}`;
  
  if (id) {
    url += `/${id}`;
  }

  const queryString = new URLSearchParams(queryParams).toString();
  if (queryString) {
    url += `?${queryString}`;
  }

  const requestOptions: RequestInit = {
    method,
    headers,
    body: method === 'POST' || method === 'PUT' || method === 'PATCH' ? JSON.stringify(data) : undefined,
  };

  const response = await fetch(url, requestOptions);

  if (!response.ok) {
    throw new Error(`Failed to ${method.toLowerCase()} data from ${endPoint}. Status: ${response.status}`);
  }

  const responseData = await response.json();
  return responseData?.data;
}
