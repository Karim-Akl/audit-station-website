import { ISingleService } from "./services";

export interface Service {
  id: number | string;
  title: string;
  image: string | null;
  code: string;
  status: "published" | "trashed" | "archived" | "drafted" | "scheduled";
  type: string;
  permanent_link: string;
  slug: string;
  pricing_type: "flexible" | "fixed";
  //fixed
  price: string | number | null;
  sales_price: string | number | null;
  //flexible
  price_starting_from: string | number | null;
  price_up_to: string | number | null;
}

export interface IAppointments {
  start_time: string;
  quantity: number;
  status: string;
  employee: string | null;
  service: ISingleService;
  created_by: string | null;
  updated_by: string | null;
}

export interface BookFormInitialValues {
  appointments: IAppointments[];
  patient: string;
  // branch: {
  //   id: string | number;
  //   name: string;
  // } | null;
  status: string;
  branch: TSelectBranch | null;
  coupon: null;
  created_by: string | null;
  updated_by: string | null;
}
export interface OrderSubmitValues {
  appointments: {
    start_time: string;
    quantity: number;
    status: string;
    employee: string | null;
    service: number;
    treated_price: string | number | null;
    created_by: string | null;
    updated_by: string | null;
  }[];
  patient: string;
  status: string;
  branch: number | string | null;
  coupon: null;
  created_by: string | null;
  updated_by: string | null;
}

export interface IInitialAppointment {
  start_time: string;
  quantity: number;
  service: ISingleService;
  status: "scheduled";
  employee: null;
  created_by: string | null;
  updated_by: string | null;
}

//--------------------------
export type TOrderStatus =
  | "cart"
  | "submitted"
  | "partially_confirmed"
  | "confirmed"
  | "completed"
  | "canceled";
export type TPaymentStatus = "paid" | "partially_paid" | "not_paid";
export type TRefundStatus =
  | "not_refunded"
  | "partially_refunded"
  | "fully_refunded";

export interface AppointmentService {
  id: number;
  title: string;
  code: string;
  image: string | null;
  taxes: { id: number; name: string }[];
  price_exec_VAT: number;
  pricing_type: "fixed" | "flexible";
}

export interface OrderAppointments {
  id: number;
  service: AppointmentService;
  employee: string | null;
  discount_and_coupon_amount: number;
  appointment_code: string;
  start_time: string;
  quantity: number;
  created_at: string;
  updated_at: string;
  status: string;
  returned_quantity: number;
  refunded_amount: string;
  membership_coupons_amount: string;
  original_membership_coupon_usage_times: number;
  total_price_after_membership_coupons: string;
  unit_price: string;
  price_with_quantity: string;
  discounts_amount: string;
  coupons_amount: string;
  price_after_discounts: string;
  taxes_amount: string;
  sub_total_without_mem_coupons_amount: string;
  sub_total: string;
  treated_price: string;
  order: number;
  created_by: string | null;
  updated_by: string | null;
}

export interface OrderCreatedResponse {
  id: number;
  item_code: string;
  coupon: null | {
    id: number;
    coupon_code: string;
  };
  appointments: OrderAppointments[];
  branch: number | null;
  tags: number[];
  payment_status: TPaymentStatus;
  refund_status: TRefundStatus;
  refunded_amount: string;
  refunded_quantity: string;
  patient: string;
  status: TOrderStatus;
  get_total: number;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: null | string;
}

//------------
export interface IOrderOneService {
  appointment: {
    start_time: string;
    quantity: number;
    service: ISingleService;
    status: "scheduled";
    employee: null;
    created_by: string | null;
    updated_by: string | null;
    treated_price: number;
  };
  patient: string;
  branch: number | null;
  status: TOrderStatus;
  tags: number[];
  created_by: string;
  updated_by: null | string;
}

// ---------------------------

export type TSelectBranch = {
  id: number | string;
  name: string;
};

export type TBranch = {
  id: number;
  name: string;
  location: string;
  phone: string;
  email: string;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: string;
};
export type TBranches = {
  count: number;
  next: null;
  previous: null;
  results: TBranch[];
};

//----------------

export type ValidateCouponResponseMessage = {
  message: string;
  valid: boolean;
  coupon_id: number;
  id: number;
};

//----------------
export type PaymentCreateData = {
  payment_method: string | null;
  order: number;
  paid_amount: number;
  status: string;
  payment_reference: string;
  created_by: string;
};

export interface PaymentFormData {
  payment_method: { id: number; name: string } | null;
  order: number;
  paid_amount: number;
  status: string;
  payment_reference: string;
  created_by: string;
  payment: {
    pan: string;
    expiry: string;
    cvv: string;
    cardholderName: string;
  };
}

export type TPaymentMethod = {
  id: number;
  name: string;
  description: string;
};
export type TPaymentMethods = {
  count: number;
  next: string | null;
  previous: string | null;
  results: TPaymentMethod[];
};

interface TOrderPayment {
  id: number;
  payment_method: {
    id: number;
    name: string;
    description: string;
    status: string;
  };
  date: string;
  total_amount: string;
  paid_amount: string;
  payment_reference: string;
  status: string;
  transaction_id: null | string;
  authorization_code: null | string;
  gateway_response: null | string;
  transaction_status: null | string;
  created_at: string;
  updated_at: string;
  order: number;
  created_by: string;
  updated_by: null | string;
}

interface IPaymentHistory {
  status: string;
  payment_methods: { payment_method__name: string }[];
  payment_history: {
    date: string;
    paid_amount: number;
    status: "draft" | "paid" | "canceled";
  }[];
  total_amount: number;
  paid_amount: number;
  amount_due: number;
}

interface IPatient {
  id: string;
  full_name: string;
  email: string;
  mobile_number: string;
  addresses: {
    location: string;
  }[];
}

export interface ISingleOrder {
  id: number;
  item_code: string;
  coupon: null | {
    id: number;
    coupon_code: string;
  };
  appointments: OrderAppointments[];
  grand_total: number;
  total_discounts: number;
  confirmed_appointments_percentage: number;
  total_coupons: number;
  amount_after_discounts: number;
  tax_amount: number;
  total: number;
  total_paid: number; //paid_before
  status: TOrderStatus;
  created_at: string;
  updated_at: string;
  patient: IPatient;
  refunds_count: number;
  payments_count: number;
  payments: TOrderPayment[];
  payment_history: IPaymentHistory;
  payment_status: TPaymentStatus;
  refund_status: TRefundStatus;
  refunded_amount: string | number;
  refunded_quantity: string | number;
  branch: number | null;
  tags: number[];
  created_by: string;
  updated_by: null | string;
}

export interface IUserOrders {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISingleOrder[];
}
