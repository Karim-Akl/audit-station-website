export interface ISingleService {
  id: number;
  title: string;
  image?: string;
  code: string;
  tags: { id: number; name: string }[];
  taxes: { id: number; name: string }[];
  status: "published" | "trashed" | "archived" | "drafted" | "scheduled";
  previous_status: string | null;
  type: string;
  short_description: string;
  long_description: string;
  permanent_link: string;
  slug: string;
  published_time: string;
  duration: number;
  online_booking_enabled: boolean;
  created_at: string;
  updated_at: string;
  created_by: string | null;
  updated_by: string | null;
  time_blocks: {
    start: string;
    end: string;
    repeat_weekly: boolean;
  }[];
  timeslots: {
    start_time: string;
    end_time: string;
    time_slot_hours: string;
    time_slot_minutes: string;
    max_bookings_per_timeslot: string;
  };
  employees: string[];
  branches: number[];
  categories: {
    id: number;
    name: string;
  }[];
  media: {
    id: number;
    image: string;
    service: number;
  }[];

  pricing_type: "flexible" | "fixed";
  //fixed
  price: string | number | null;
  sales_price: string | number | null;
  //flexible
  price_starting_from: string | number | null;
  price_up_to: string | number | null;

  //fixed
  discounts_amount: number;
  taxes_amount: number;
  sub_total: number;
  price_exec_VAT: number;

  //flexible
  discounts_amount_price_starting_from: number;
  discounts_amount_price_up_to: number;
  price_after_discounts_price_starting_from: number;
  price_after_discounts_price_up_to: number;
  taxes_amount_price_starting_from: number;
  taxes_amount_price_up_to: number;
  sub_total_price_starting_from: number;
  sub_total_price_up_to: number;
}
export interface IServices {
  count: number;
  next: string | null;
  previous: string | null;
  results: ISingleService[];
}

//----------------------
export interface ICategories {
  id: number;
  name: string;
  slug: string;
  image: string | null;
  description: string;
  parent_id: number;
  created_at: string;
  updated_at: string;
  created_by: string;
  updated_by: null;
}
