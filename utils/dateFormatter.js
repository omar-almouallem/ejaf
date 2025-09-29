import { format, parseISO } from "date-fns";

export const dateFormatter = (isoDateString) => {
  try {
    const date = parseISO(isoDateString);
    return format(date, "d MMMM yyyy");
  } catch (error) {
    throw new Error(`Invalid date string: ${isoDateString}`);
  }
};
