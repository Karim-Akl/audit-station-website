import { BASE_URL } from '@/lib/actions/actions';
import { getSession } from '../authSession';
import { setSession } from '@/app/[locale]/actions/setSession';
import { cookies } from 'next/headers';

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
  const cookiesSessionData = await getSession();
  const token = cookiesSessionData?.user?.data?.token;
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
    }
  }

  let xsrfToken = '';

  if (typeof window !== 'undefined' && window.location.hostname !== 'localhost') {
    xsrfToken = cookies().get('XSRF-TOKEN')?.value || '';
  }

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

  const response = await fetch(`${BASE_URL}${endPoint}?${queryString}`, {
    headers: {
      Authorization: `Bearer ${token}`,
      'XSRF-TOKEN': xsrfToken,
    },
    credentials: 'include',
  });

  if (!response.ok) {
    console.log(`Failed to fetch data from ${endPoint}. Status: ${response.status}`);
  }
  const data = await response.json();
  return data?.data;
}
