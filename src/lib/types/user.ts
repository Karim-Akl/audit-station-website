import { OrderAppointments } from "./orders";

export interface IProfileEditFormValues {
  id: string;
  image: File | string | null;
  full_name: string;
  email: string;
  mobile_number: string;
  gender: string;
  birth_date: string;
  day: string;
  month: string;
  year: string;
  two_factor_auth: boolean;
}

export interface IProfileEditValues {
  id: string;
  image: File | string | null;
  full_name: string;
  email: string;
  mobile_number: string;
  gender: string;
  birth_date: string | null;
  two_factor_auth: boolean;
}

export interface IOrderRescheduleValues {
  order_id: number;
  appointments: OrderAppointments[];
}

export interface IOrderEditValues {
  order_id: number;
  branch: { id: number; name: string } | null;
  appointments: OrderAppointments[];
}

export type TBookType =
  | "previous-booking"
  | "upcoming-bookings"
  | "draft-bookings";

export type TAddress = {
  id: number;
  more_details: string;
  Coordinates: string;
  location: string;
  country: number;
  city: number;
  area: number;
  user: string;
  is_default: boolean;
  created_at: string;
  updated_at: string;
};

export interface IUser {
  id: string;
  addresses: TAddress[];
  groups: {
    id: number;
    name: string;
  }[];
  nationality: {
    id: number;
    iso2: string;
    name: string;
  } | null;
  job_title: { id: string | number; job_title: string } | null;
  language: {
    id: number;
    name: string;
  } | null;
  password: string;
  last_login: string;
  is_superuser: boolean;
  full_name: string;
  username: string;
  email: string;
  image: string | null;
  national_id: string | null;
  gender: string;
  status: string;
  previous_status: string | null;
  mobile_number: string;
  alternative_mobile_number: string | null;
  is_verified: boolean;
  is_active: boolean;
  is_staff: boolean;
  created_at: "2024-04-15T16:16:12.161586+02:00";
  updated_at: "2024-05-28T12:42:55.923878+03:00";
  birth_date: string;
  age_days: number | null;
  age_months: number | null;
  age_years: number | null;
  two_factor_auth: boolean;
  auth_provider: string;
  user_type: "patient" | "employee" | "doctor";
  resident: string | null;
  policy_number: string | null;
  disease: string | null;
  created_by: string | null;
  updated_by: string | null;
  user_permissions: number[];
}

export type TMembershipOrderStatus =
  | "cart"
  | "submitted"
  | "active"
  | "canceled"
  | "expired"
  | "suspended";

export interface IUserMembership {
  id: number;
  item_code: string;
  created_at: string;
  status: TMembershipOrderStatus;
  billing_cycle: {
    id: number;
    valid_for: number;
    interval_of_valid_for: string;
  };
  patient: {
    id: string;
    full_name: string;
  };
  membership: {
    id: number;
    name: string;
  };
  tags: { id: number; name: string }[];
  total: string;
  payment_status: string;
}
