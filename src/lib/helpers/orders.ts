import { add, format } from "date-fns";
import { IAppointments } from "@/lib/types";
import { IBillingCycle } from "../types/memberships";
import { TBookType } from "../types/user";

export const calculateTotalPrice = (appointments: IAppointments[]): number => {
  // let totalPrice = 0;

  // appointments.forEach((appointments) => {
  //   totalPrice +=
  //     (appointments.service.price as number) ||
  //     (appointments.service.price_starting_from as number) ||
  //     0;
  // });
  const totalPrice = appointments.reduce((accumulator, curr) => {
    return accumulator + Number(curr.service.sub_total) * curr.quantity;
  }, 0);

  return totalPrice;
};

export const getBillingCycleFinalDate = (billCycle: IBillingCycle | null) => {
  if (billCycle) {
    let dateAfterInterval;
    if (billCycle.interval_of_valid_for === "year") {
      dateAfterInterval = add(new Date(), { years: billCycle.valid_for });
    } else if (billCycle.interval_of_valid_for === "month") {
      dateAfterInterval = add(new Date(), { months: billCycle.valid_for });
    } else if (billCycle.interval_of_valid_for === "week") {
      dateAfterInterval = add(new Date(), { weeks: billCycle.valid_for });
    } else {
      return "can not show the end date";
    }
    return format(dateAfterInterval, "EEEEEE, MMM dd, yyyy");
  } else {
    return "-";
  }
};

//profile

export function getBookType(
  bookType: TBookType | null
): {
  title: string;
  status: "submitted-confirmed" | "completed-canceled" | "cart";
  type: TBookType;
} | null {
  if (bookType === "previous-booking") {
    return {
      title: "Previous Bookings",
      status: "completed-canceled",
      type: "previous-booking",
    };
  } else if (bookType === "upcoming-bookings") {
    return {
      title: "Upcoming Bookings",
      status: "submitted-confirmed",
      type: "upcoming-bookings",
    };
  } else if (bookType === "draft-bookings") {
    return { title: "Draft Bookings", status: "cart", type: "draft-bookings" };
  } else {
    return null;
  }
}

export const seeAllPossibleNavigation = {
  prev: "/my-profile/previous-booking",
  upcoming: "/my-profile/upcoming-bookings",
  draft: "/my-profile/draft-bookings",
};
