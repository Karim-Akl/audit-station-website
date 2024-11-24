import { BASE_URL } from '@/lib/actions/actions';
import { decrypt, getSession } from '../authSession';

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
  const session = await getSession();
  const sessionValue = await decrypt(session?.value || "")
  const queryString = new URLSearchParams(filteredParams).toString();
  const response = await fetch(`${BASE_URL}${endPoint}?${queryString}`,{
    headers:{
      Authorization: `Bearer ${sessionValue?.user?.data?.token}`,
    }
  });

    if (!response.ok) {
      console.log(`Failed to fetch data from ${endPoint}. Status: ${response.status}`);
    }
    const data = await response.json();
    return data?.data
}


// import { formatDateTime } from '@/lib/date/formatDateTime';
// import { BASE_URL } from '@/lib/actions/actions';
// import { cookies } from 'next/headers';
// import { decrypt } from '../authSession';
// import { setSession } from '@/app/[locale]/actions/setSession';

// export async function fetchData({
//   endPoint,
//   page,
//   perPage,
//   search,
// }: {
//   endPoint: string;
//   page?: number;
//   perPage?: number;
//   search?: string;
// }) {
//   const cookie = cookies();
//   const session = cookie.get('session');
//   const cookiesSessionData = await decrypt(session?.value || '');
//   const token = cookiesSessionData?.user?.data?.token;
//   const sessionTokenExpiryTimeString = cookiesSessionData?.user?.data?.token_expires_at;
//   const sessionTokenExpiryTime = new Date(sessionTokenExpiryTimeString);
//   const refreshTokenExpiryTimeString = cookiesSessionData?.user?.data?.refresh_token_expires_at;
//   const refreshTokenExpiryTime = new Date(refreshTokenExpiryTimeString);

//   if (isNaN(sessionTokenExpiryTime.getTime())) {
//     console.error('Invalid session expiration time:', sessionTokenExpiryTimeString);
//     return null;
//   }

//   const refreshToken = cookiesSessionData?.user?.data?.refresh_token;
//   const currentTime = new Date();
//   const tokenExpirationTimeRemaining = sessionTokenExpiryTime.getTime() - currentTime.getTime();
//   const refreshTokenExpirationTimeRemaining = refreshTokenExpiryTime.getTime() - currentTime.getTime();
//   const refreshTimeThreshold = 6 * 60 * 60 * 1000;
//   const timeThreshold = 5 * 60 * 1000;

//   if (tokenExpirationTimeRemaining <= timeThreshold && refreshToken) {
//     if (refreshTokenExpirationTimeRemaining <= refreshTimeThreshold) {
//       try {
//         const response = await fetch(`${BASE_URL}/auth/refresh_tokens/rotate`, {
//           method: 'POST',
//           headers: {
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         });
//         if (response.ok) {
//           const data = await response.json();
//           const newRefreshToken = data?.data?.token;
//           const newRefreshTokenExpiryTime = data?.data?.token_expires_at;

//           const updatedSession = {
//             ...cookiesSessionData,
//             user: {
//               ...cookiesSessionData.user,
//               data: { refresh_token: newRefreshToken },
//               refresh_token_expires_at: newRefreshTokenExpiryTime,
//             },
//           };
//           setSession(updatedSession);
//         } else {
//           console.log('Failed to refresh token');
//         }
//       } catch (error) {
//         console.error('Error refreshing token:', error);
//       }
//     }
//     try {
//       const refreshResponse = await fetch(`${BASE_URL}/auth/refresh_tokens/refresh`, {
//         method: 'POST',
//         headers: {
//           Authorization: `Bearer ${refreshToken}`,
//         },
//       });

//       if (refreshResponse.ok) {
//         const refreshedData = await refreshResponse.json();
//         const newToken = refreshedData?.data?.token;
//         const newExpiryTime = refreshedData?.data?.token_expires_at;

//         const updatedSession = {
//           ...cookiesSessionData,
//           user: { ...cookiesSessionData.user, data: { token: newToken }, token_expires_at: newExpiryTime },
//         };
//         setSession(updatedSession);
//       } else {
//         console.log('Failed to refresh token');
//       }
//     } catch (error) {
//       console.error('Error refreshing token:', error);
//     }
//   }

//   const params = {
//     page,
//     per_page: perPage,
//     search,
//   };

//   const filteredParams = Object.fromEntries(
//     Object.entries(params)
//       .filter(([_, value]) => value !== undefined)
//       .map(([key, value]) => [key, String(value)]),
//   );

//   const queryString = new URLSearchParams(filteredParams).toString();

//   const response = await fetch(`${BASE_URL}${endPoint}?${queryString}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   if (!response.ok) {
//     console.log(`Failed to fetch data from ${endPoint}. Status: ${response.status}`);
//   }
//   const data = await response.json();
//   return data?.data;
// }

