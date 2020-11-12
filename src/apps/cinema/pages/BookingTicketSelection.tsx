import React from "react";
import { Link } from "../components/Link";

export const BookingTicketSelection = () => {
  return (
    <div>
      <div>BookingTicketSelection</div>
      <Link routeName="home">go back to previous page</Link>
      <br />
      <Link routeName="booking-seat-selection">proceed to seat selection</Link>
    </div>
  );
};
