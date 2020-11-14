import React from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";

export const BookingConfirmation = () => {
  return (
    <Container>
      <div>BookingConfirmation</div>
      <Link routeName="booking-success">
        finish payment and get redirected back to app success page
      </Link>
      <br />
      <Link routeName="booking-failure">
        fail payment and get redirected back to app rejection page
      </Link>
    </Container>
  );
};
