import React from "react";
import { Link } from "../components/Link";

export const Tickets = () => {
  return (
    <div>
      <div>Tickets</div>
      <Link routeName="booking-ticket-selection">proceed to booking</Link>
    </div>
  );
};
