import { Booking } from "../models/Booking";
import { Map } from "immutable";
import { omit } from "lodash";

export const parseBooking = (json: any): Booking => {
  const props = json as Record<keyof Booking, any>;
  return {
    ...omit(props, "tickets"),
    tickets: Map(props.tickets),
  };
};
