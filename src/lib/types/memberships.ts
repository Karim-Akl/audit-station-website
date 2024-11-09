import { TPaymentStatus, TRefundStatus } from "./orders";

export type TMembershipTab = "year" | "month" | "week";

export interface IBillingCycle {
  id: number;
  price_exec_VAT: number;
  discounts_amount: number;
  price_after_discounts: number;
  taxes_amount: number;
  sub_total: number;
  discounts_amount_price_starting_from: number;
  discounts_amount_price_up_to: number;
  price_after_discounts_price_starting_from: number;
  price_after_discounts_price_up_to: number;
  taxes_amount_price_starting_from: number;
  taxes_amount_price_up_to: number;
  sub_total_price_starting_from: number;
  sub_total_price_up_to: number;
  valid_for: number;
  interval_of_valid_for: TMembershipTab;
  price: string;
  sales_price: string;
  price_starting_from: null;
  price_up_to: null;
  created_at: string;
  updated_at: string;
  membership: number;
  created_by: string | null;
  updated_by: string | null;
}

/** Memberships Types **/
export type TMembershipServiceType = {
  id: number;
  service_type: "free service" | "additional benefit";
  usage_times: number;
  discount_per_service: string | number | null;
  discount_type: string | null;
  service: {
    id: number;
    title: string;
    image: string | null;
    code: string;
    price_exec_VAT: number;
  };
};
export interface IMembership {
  id: number;
  billing_cycles: IBillingCycle[];
  membership_services: TMembershipServiceType[];
  item_code: string;
  name: string;
  description: string;
  slug: string;
  publish_time: string;
  pricing_type: "fixed" | "flexible";
  status: string;
  previous_status: string | null;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  enable_online_booking: boolean;
  taxes: { id: number; name: string }[];
}
//membership list as a product
export interface IMembershipList {
  count: number;
  next: null;
  previous: null;
  results: IMembership[];
}

export interface IMembershipOrderFormInitialValues {
  membership: IMembership | null;
  billing_cycle: IBillingCycle | null;
  treated_price: number | string;
  patient: string | null;
  status: "cart";
  branch: number | null;
  tags: number[];
  coupon: null;
  created_by: string | null;
  updated_by: string | null;
}

export type TMembershipPaymentCreateData = {
  payment_method: string | null;
  membership_order: number;
  paid_amount: number;
  status: string;
  payment_reference: string;
  created_by: string;
};

export interface IMembershipOrderSubmitData {
  membership: number | undefined;
  billing_cycle: number | undefined;
  treated_price: number | undefined;
  patient: string | null;
  status: "cart";
  branch: number | null;
  tags: number[];
  coupon: null;
  created_by: string | null;
  updated_by: string | null;
}

export interface IMembershipCreatedResponse {
  id: number;
  total_paid: number;
  item_code: string;
  status: string;
  treated_price: string;
  start_date: string | null;
  end_date: string | null;
  refunded_quantity: string;
  refunded_amount: string;
  refund_status: TRefundStatus;
  payment_status: TPaymentStatus;
  grand_total: string;
  total_discounts: string;
  total_coupons: string;
  amount_after_discounts: string;
  tax_amount: string;
  total: string;
  created_at: string;
  updated_at: string;
  patient: string;
  coupon: null;
  branch: number;
  membership: number;
  billing_cycle: number;
  created_by: string;
  updated_by: null;
  tags: number[];
}

export type TOrderPaymentHistory = {
  amount_due: number;
  paid_amount: number;
  payment_history: {
    date: string;
    paid_amount: number;
    status: "draft" | "paid" | "canceled";
  }[];
  payment_methods: {
    // id: number;
    payment_method__name: string;
  }[];
  status: TPaymentStatus;
  total_amount: number;
};

export type TOrderPayments = {
  id: number;
  date: string;
  total_amount: string;
  paid_amount: string;
  payment_reference: string;
  status: "draft" | "paid" | "canceled";
  created_at: string;
  updated_at: string;
  order: number;
  payment_method: {
    id: number;
    name: string;
    description: string;
  };
  created_by: string | null;
  updated_by: string | null;
};

export interface IMembershipOrder {
  id: number;
  membership: {
    id: number;
    membership_services: TMembershipServiceType[];
    taxes: {
      id: number;
      name: string;
    }[];
    item_code: string;
    name: string;
    description: string;
    treated_price: number | string;
    pricing_type: "flexible" | "fixed";
    enable_online_booking: boolean;
    status: string;
    previous_status: null | string;
    created_at: string;
    updated_at: string;
    created_by: string;
    updated_by: string;
  };
  billing_cycle: IBillingCycle;
  grand_total: string;
  total_discounts: string;
  total_coupons: string;
  amount_after_discounts: string;
  tax_amount: string;
  total: string;
  total_paid: number;
  item_code: string;
  status: string;
  start_date: null | string;
  end_date: null | string;
  refunded_quantity: string;
  refunded_amount: string;
  refund_status: TRefundStatus;
  payment_status: TPaymentStatus;
  //---------
  membership_order_payments: TOrderPayments[];
  payment_history: TOrderPaymentHistory;
  refunds_count: number;
  payments_count: number;
  // ----
  created_at: string;
  updated_at: string;
  patient: {
    email: string;
    full_name: string;
    id: string;
    mobile_number: string;
    addresses: {
      location: string;
    }[];
  };
  coupon: null | {
    id: number;
    coupon_code: string;
  };
  branch: number;
  created_by: string | null;
  updated_by: string | null;
  tags: number[];
}
