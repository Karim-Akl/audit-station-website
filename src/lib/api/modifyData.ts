'use client';

// lib/api/modifyData.ts
import { setSession } from '@/app/[locale]/actions/setSession';
import { BASE_URL } from '../actions/actions';
import { getSession } from '../authSession';

interface ParamsProps {
  endPoint: string;
  method?: 'POST' | 'PUT' | 'PATCH' | 'DELETE';
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
}: ParamsProps) {
  const cookiesSessionData = await getSession();
  const token = cookiesSessionData?.user?.data?.token;

  if (!token) {
    throw new Error('Authorization required: No session token found.');
  }

  const refreshToken = cookiesSessionData?.user?.data?.refresh_token;
  const tokenExpiryTime = new Date(cookiesSessionData?.user?.data?.token_expires_at);
  const refreshTokenExpiryTime = new Date(cookiesSessionData?.user?.data?.refresh_token_expires_at);

  if (isNaN(tokenExpiryTime.getTime())) {
    console.error(
      'Invalid session expiration time:',
      cookiesSessionData?.user?.data?.token_expires_at,
    );
    return null;
  }

  const currentTime = new Date();
  const tokenExpirationTimeRemaining = tokenExpiryTime.getTime() - currentTime.getTime();
  const refreshTokenExpirationTimeRemaining =
    refreshTokenExpiryTime.getTime() - currentTime.getTime();
  const timeThreshold = 5 * 60 * 1000;
  const refreshTimeThreshold = 6 * 60 * 60 * 1000;

  if (tokenExpirationTimeRemaining <= timeThreshold && refreshToken) {
    if (refreshTokenExpirationTimeRemaining <= refreshTimeThreshold) {
      try {
        const response = await fetch(`${BASE_URL}/auth/refresh_tokens/rotate`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: refreshToken,
          }),
        });
        if (response.ok) {
          const data = await response.json();
          const newRefreshToken = data?.data?.token;
          const newRefreshTokenExpiryTime = data?.data?.token_expires_at;

          const updatedSession = {
            ...cookiesSessionData,
            user: {
              ...cookiesSessionData.user,
              data: {
                ...data,
                refresh_token: newRefreshToken,
                refresh_token_expires_at: newRefreshTokenExpiryTime,
              },
            },
          };
          setSession(updatedSession);
        } else {
          console.log('Failed to refresh token');
        }
      } catch (error) {
        console.error('Error refreshing token:', error);
      }
    }
    try {
      const response = await fetch(`${BASE_URL}/auth/refresh_tokens/refresh`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: refreshToken,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const newToken = data?.data?.token;
        const newExpiryTime = data?.data?.token_expires_at;

        const updatedSession = {
          ...cookiesSessionData,
          user: {
            ...cookiesSessionData.user,
            data: { ...data, token: newToken, token_expires_at: newExpiryTime },
          },
        };
        setSession(updatedSession);
      } else {
        console.log('Failed to refresh token');
      }
    } catch (error) {
      console.error('Error refreshing token:', error);
      return error;
    }
  }

  // let xsrfToken = '';

  // if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
  //   xsrfToken = cookies().get('XSRF-TOKEN')?.value || '';
  // }

  const headers: Record<string, string> = {
    Authorization: `Bearer ${token}`,
    // 'XSRF-TOKEN': xsrfToken,
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
    body: method === 'POST' || method === 'PUT' || method === 'PATCH' ? data : undefined,
  };

  try {
    const response = await fetch(url, requestOptions);

    if (!response.ok) {
      const errorDetails = await response.text();
      return JSON.parse(errorDetails);
    }

    try {
      const responseData = await response.json();
      return responseData;
    } catch (jsonError: any) {
      throw new Error(`Failed to parse JSON response: ${jsonError.message}`);
    }
  } catch (error: any) {
    return JSON.parse(error);
  }
}
