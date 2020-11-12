import React from "react";
import { Link } from "../components/Link";

export const BookingSeatSelection = () => {
  return (
    <div>
      <div>BookingSeatSelection</div>
      <Link routeName="booking-ticket-selection">
        return to ticket selection
      </Link>
      <br />
      <Link routeName="booking-confirmation">proceed to confirmation</Link>
    </div>
  );
};
