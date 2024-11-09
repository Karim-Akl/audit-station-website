import {
  ISingleOrder,
  IUserOrders,
  OrderCreatedResponse,
  OrderSubmitValues,
  TPaymentMethods,
  ValidateCouponResponseMessage,
} from "../types";

export const BASE_URL = process.env.NEXT_PUBLIC_BASIC_URL;

interface IEditValues {
  id?: number;
  service?: number;
  start_time?: string;
  employee?: string | null;
  treated_price?: string | number;
  status?: string;
  quantity?: number;
  created_by?: string | null;
  updated_by: string | null;
}

export const createOrder = async (
  orderData: OrderSubmitValues
): Promise<OrderCreatedResponse> => {
  const response = await fetch(`${BASE_URL}/ecommerce/order/create/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
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

export const getOrderById = async (
  orderId: string | number
): Promise<ISingleOrder> => {
  const response = await fetch(`${BASE_URL}/ecommerce/order/${orderId}/`);
  const res = await response.json();
  return res;
};

export const getUserOrders = async (params: {
  status: string;
  patient: string;
  page: number;
}): Promise<IUserOrders> => {
  const response = await fetch(
    `${BASE_URL}/ecommerce/orders-avitane/?page=${params.page}&status=${params.status}&patient=${params.patient}`
  );
  const res = await response.json();
  return res;
};

/* type QueryKey = [string, { status: string; username: string }];
export const getUserOrdersForInfiniteQuery = async ({
  pageParam = 1,
  queryKey,
}: {
  pageParam?: number;
  queryKey: any; // TODO:
}): Promise<IUserOrders> => {
  const [_, { status, username }] = queryKey;
  const response = await fetch(
    `${BASE_URL}/ecommerce/orders-avitane/?page=${pageParam}&status=${status}&patient=${username}`
  );
  const res = await response.json();
  return res;
};
*/
export const editOrder = async (values: {
  appointments: IEditValues[];
  order_id: number;
}): Promise<OrderCreatedResponse> => {
  const response = await fetch(
    `${BASE_URL}/ecommerce/order/update/${values.order_id}/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ appointments: values.appointments }),
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

export const updateBranch = async (data: {
  id: number;
  values: {
    branch: number | null;
    updated_by: string;
  };
}): Promise<OrderCreatedResponse> => {
  const response = await fetch(
    `${BASE_URL}/ecommerce/order/update/${data.id}/`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data.values),
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

export const updateOrderAppointment = async (values: {
  appointments: IEditValues[];
  order_id: number;
}): Promise<OrderCreatedResponse> => {
  const response = await fetch(
    `${BASE_URL}/ecommerce/order/update/${values.order_id}/`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: values.order_id,
        appointments: values.appointments,
      }),
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

export const validateCoupon = async (values: {
  coupon_code: string;
  order_id: number;
}): Promise<ValidateCouponResponseMessage> => {
  const response = await fetch(`${BASE_URL}/ecommerce/validate-coupon/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(values),
  });
  if (!response.ok) {
    // Parse the response body as JSON
    const errorData = await response.json();
    // console.log(errorData);
    // Throw an error with the response data
    throw new Error(
      JSON.stringify(errorData.message ? errorData.message : "Invalid coupon")
    );
  }

  const res = await response.json();
  return res;
};
export const applyOrRemoveCoupon = async (values: {
  coupon: number | null;
  id: number;
  updated_by?: string;
}): Promise<OrderCreatedResponse> => {
  const response = await fetch(
    `${BASE_URL}/ecommerce/order/update/${values.id}/`,
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

export const getPaymentMethods = async (
  page: number
): Promise<TPaymentMethods> => {
  const response = await fetch(
    `${BASE_URL}/ecommerce/payment_methods/?page=${page}`
  );
  const res = await response.json();
  return res;
};

export const createCashPayment = async (values: {
  payment_method: string | null;
  order: number;
  paid_amount: number;
  status: string;
  payment_reference: string;
  created_by: string;
}) => {
  if (values.payment_method) {
    const response = await fetch(`${BASE_URL}/ecommerce/payment/create/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...values,
        date: new Date().toISOString(),
      }),
    });
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
