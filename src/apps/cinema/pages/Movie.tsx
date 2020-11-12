import React from "react";
import { Link } from "../components/Link";

export const Movie = () => {
  return (
    <div>
      <div>Movie</div>
      <Link routeName="booking-ticket-selection">proceed to booking</Link>
    </div>
  );
};
