"use server";

import { redirect } from "next/navigation";

import { BASE_URL } from "./actions";
import { getSession } from "../authSession";
import { DEFAULT_REQUEST_SIZE, productionUrl } from "../constants/constants";

interface getDataParamsType {
  End_Point: string;
  ExtraMethod?: object;
  ISAddAuthHeaders?: boolean;
}

interface returnData<T> {
  data: T | null;
  message?: string | { [key: string]: string };
}

interface forgetPasswordBody {
  email: string;
  base_url: string | undefined;
}

interface resetPasswordBody {
  new_password: string;
  confirm_new_password: string;
  token: string;
  uid: string;
}

/* 
    !!!!!!! IMPORTANT DELETE BECAUSE IT NOT SECURE !!!!!!!
*/
// process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

/* 
  @desc is a function that handle the response if the response is ok or not
  @param response: Response
*/
const handleErrorResponse = async (response: Response) => {
  if (response.ok) {
    const data = await response.json();
    return { data };
  } else if (response.status === 400) {
    const errorMessage = await response.json();
    return { data: null, message: errorMessage };
  } else {
    return { data: null, message: "Error : " + response.statusText };
  }
};

/* 
  @desc is a function that refreshes the access token
  @param refreshToken: string
*/
const refreshAccessToken = async (refreshToken: string) => {
  const refreshResponse = await fetch(`${productionUrl}/refresh-token`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ refresh: refreshToken }),
  });
  if (refreshResponse.ok) {
    const { new_access } = await refreshResponse.json();
    return new_access;
  } else {
    return null;
  }
};

/* 
  @desc is a function that request the data from the server and refresh the access token if needed
  @param url: includes the endpoint and the base url
  @param options: RequestInit
  @param refreshToken: string
*/
async function fetchWrapper(
  url: string,
  options: RequestInit,
  refreshToken: string
): Promise<Response> {
  let redirectPath = "";

  try {
    let response = await fetch(url, options);

    if (response.status === 401) {
      const newAccessToken = await refreshAccessToken(refreshToken);

      if (newAccessToken) {
        // Retry the request with the new access token
        const newOptions = {
          ...options,
          headers: {
            ...options.headers,
            Authorization: `Bearer ${newAccessToken}`,
          },
        };
        response = await fetch(url, newOptions);
      } else {
        // If the refresh token is expired, then redirect to the login page
        redirectPath = "/";
      }
    }
    return response;
  } catch (error: any) {
    redirectPath = "/";
    return error;
  } finally {
    redirectPath && redirect(redirectPath);
  }
}

/*
  @desc is a function that request the data from the server
  @param End_Point: string
  @param ExtraMethod: object
  @param ISAddAuthHeaders: boolean
*/
async function GetDataInServerSide<T>({
  End_Point,
  ExtraMethod,
  ISAddAuthHeaders,
}: getDataParamsType): Promise<{ data: T | null; message?: string }> {
  const session = await getSession();
  let headers: HeadersInit = ISAddAuthHeaders
    ? {
      "Content-Type": "application/json",
      Authorization: `Bearer ${session.user.access}`,
    }
    : {
      "Content-Type": "application/json",
    };

  let response = await fetchWrapper(
    BASE_URL + End_Point,
    {
      method: "GET",
      headers: headers,
      ...ExtraMethod,
    },
    session?.user?.refresh
  );

  if (response.ok) {
    const data = await response.json();
    return { data };
  } else {
    return { data: null, message: response.statusText };
  }
}

async function handleUpdateUserProfile<T>(
  url: string,
  options: RequestInit
): Promise<returnData<T>> {
  const session = await getSession();
  const response = await fetchWrapper(url, options, session?.user?.refresh);
  return handleErrorResponse(response);
}

async function handleForgetPassword<T>(
  requestBody: forgetPasswordBody
): Promise<returnData<T>> {
  const response = await fetch(BASE_URL + "/auth/password-reset/", {
    method: "POST",
    body: JSON.stringify(requestBody),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleErrorResponse(response);
}

async function handleResetPassword<T>({
  token,
  new_password,
  confirm_new_password,
  uid,
}: resetPasswordBody): Promise<returnData<T>> {
  const response = await fetch(BASE_URL + "/auth/password-reset-confirm/", {
    method: "POST",
    body: JSON.stringify({ token, new_password, confirm_new_password, uid }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  return handleErrorResponse(response);
}

export {
  GetDataInServerSide,
  handleForgetPassword,
  handleResetPassword,
  handleUpdateUserProfile,
};
