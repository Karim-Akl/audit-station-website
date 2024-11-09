import { format } from "date-fns";

export const isBeforeToday = (date: Date) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Remove time component from today's date
  return date < today;
};

export const getTimeFromDate = (dateString: string) => {
  const date = dateString ? new Date(dateString) : new Date().toISOString();
  const formattedDate = date && format(date, "hh:mm aaa");
  return formattedDate;
};

export function getRemainingHours(onlyAvailableToday: boolean): string[] {
  const startTime = 9; // 9 AM
  const endTime = 21; // 9 PM, 24-hour format
  const hours: string[] = [];

  const now = new Date();
  let currentHour = now.getHours();

  // Adjust current hour to the next hour if minutes are not exactly 00
  if (now.getMinutes() > 0) {
    currentHour += 1;
  }

  let startHour = startTime;
  // If onlyAvailableToday is true, start from the next hour or service start time, whichever is later
  if (onlyAvailableToday) {
    startHour = Math.max(currentHour, startTime);
  }

  for (let hour = startHour; hour <= endTime; hour++) {
    // Convert 24-hour time format to 12-hour format
    const isPM = hour >= 12;
    const twelveHourFormat = hour % 12 === 0 ? 12 : hour % 12;

    // Format the hour and minute with leading zeros
    const formattedHour =
      twelveHourFormat.toString().padStart(2, "0") +
      ":00" +
      (isPM ? " pm" : " am");

    hours.push(formattedHour);
  }

  return hours;
}
