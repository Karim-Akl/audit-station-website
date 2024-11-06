import { appendUserFormData } from "../helpers/user";
// import { TOrderStatus } from "../types";
import { IProfileEditValues, IUser } from "../types/user";
import { handleUpdateUserProfile } from "@/lib/actions/ServerActions";

export const BASE_URL = process.env.NEXT_PUBLIC_BASIC_URL;

export const getUser = async (
  userId: string,
  token: string | undefined
): Promise<IUser> => {
  const response = await fetch(`${BASE_URL}/auth/patient/view/${userId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

export const updateUser = async ({
  values,
  token,
}: {
  values: IProfileEditValues;
  token: string | undefined;
}): Promise<IUser> => {
  const url = `${BASE_URL}/auth/user/update/profile/`;
  const options: RequestInit = {
    method: "PATCH",
    headers:
      typeof values.image !== "string" && values.image !== null
        ? {
          Authorization: `Bearer ${token}`,
        }
        : {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
    body: appendUserFormData(values),
  };


  const handleUpdate = async (): Promise<IUser> => {
    let response = await handleUpdateUserProfile<IUser>(url, options);
    if (response.data) {
      return response.data;
    } else {
      throw (response.message);
    }
  };

  return await handleUpdate();
}

export const getUserOrders = async (
  // status: TOrderStatus,
  userId: string
): Promise<IUser> => {
  const response = await fetch(
    `${BASE_URL}/ecommerce/orders/?status=${status}&patients=${userId}`
  );
  const res = await response.json();
  return res;
};
