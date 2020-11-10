import React from "react";
import { Link } from "../Link";

export const BookingConfirmation = () => {
  return (
    <div>
      <div>BookingConfirmation</div>
      <Link routeName="booking-success">
        finish payment and get redirected back to app success page
      </Link>
      <br />
      <Link routeName="booking-failure">
        fail payment and get redirected back to app rejection page
      </Link>
    </div>
  );
};
