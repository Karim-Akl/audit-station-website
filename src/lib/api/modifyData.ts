import { cookies } from 'next/headers'; 
import { BASE_URL } from '../actions/actions';

interface ParamsProps {
    endPoint: string;
    method: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
    data?: any;
    id?: string;
  }

export async function modifyData({
  endPoint,
  method = 'POST',
  data,
  id,
}: ParamsProps) {
  const cookieStore = cookies();
  const token = cookieStore.get('session');

  if (!token) {
    throw new Error('Authorization required: No session token found.');
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`, 
  };

  const url = id ? `${BASE_URL}${endPoint}/${id}` : `${BASE_URL}${endPoint}`;

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
