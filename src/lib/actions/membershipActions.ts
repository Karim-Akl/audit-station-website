// import { ValidateCouponResponseMessage } from "../types";
import {
  IMembershipCreatedResponse,
  IMembershipList,
  IMembershipOrder,
  IMembershipOrderSubmitData,
} from "../types/memberships";

const BASE_URL = process.env.NEXT_PUBLIC_BASIC_URL;

export const getAllMemberships = async (
  interval: "year" | "month" | "week" | "",
  page: number
): Promise<IMembershipList> => {
  const response = await fetch(
    `${BASE_URL}/memberships/memberships/?page=${page}&interval_of_valid_for=${interval}&pricing_type=fixed`
  );
  const res = await response.json();
  return res;
};

export const getMembershipOrderById = async (
  orderId: string | number
): Promise<IMembershipOrder> => {
  const response = await fetch(
    `${BASE_URL}/memberships/membership_order/view/${orderId}/`
  );
  const res = await response.json();
  return res;
};

export const createMembershipOrder = async (
  orderData: IMembershipOrderSubmitData
): Promise<IMembershipCreatedResponse> => {
  const response = await fetch(
    `${BASE_URL}/memberships/membership_order/create/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    }
  );
  // Check if the response is not ok (status is not in the range 200-299)
  if (!response.ok) {
    // Parse the response body as JSON
    const errorData = await response.json();
    // Throw an error with the response data
    throw new Error(JSON.stringify(errorData));
  }

  const res = await response.json();
  return res;
};

export const createMembershipCashPayment = async (values: {
  payment_method: string | null;
  membership_order: number;
  paid_amount: number;
  status: string;
  payment_reference: string;
  created_by: string;
}) => {
  if (values.payment_method) {
    const response = await fetch(
      `${BASE_URL}/memberships/membership_order_payment/create/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          date: new Date().toISOString(),
        }),
      }
    );
    if (!response.ok) {
      // Parse the response body as JSON
      // const errorData = await response.json();
      // console.log(errorData);
      // Throw an error with the response data
      throw new Error("can't create the payment please try later");
    }

    const res = await response.json();
    return res;
  } else {
    throw new Error("choose a payment method");
  }
};

// export const validateMembershipCoupon = async (values: {
//   coupon_code: string;
//   membership_order_id: number;
// }): Promise<ValidateCouponResponseMessage> => {
//   const response = await fetch(
//     `${BASE_URL}/memberships/validate-membership-coupon/`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(values),
//     }
//   );
//   if (!response.ok) {
//     // Parse the response body as JSON
//     const errorData = await response.json();
//     // console.log(errorData);
//     // Throw an error with the response data
//     throw new Error(
//       JSON.stringify(errorData.message ? errorData.message : "Invalid coupon")
//     );
//   }

//   const res = await response.json();
//   return res;
// };

export const applyOrRemoveMembershipCoupon = async (values: {
  coupon: number | null;
  id: number;
  membership: number;
  billing_cycle: number;
  updated_by?: string;
}): Promise<IMembershipCreatedResponse> => {
  const response = await fetch(
    `${BASE_URL}/memberships/membership_order/update/${values.id}/`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }
  );
  if (!response.ok) {
    throw new Error("can't apply coupon");
  }

  const res = await response.json();
  return res;
};
