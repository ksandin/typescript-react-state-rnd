import React from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";

export const BookingSeatSelection = () => {
  return (
    <Container>
      <div>BookingSeatSelection</div>
      <Link routeName="booking-ticket-selection">
        return to ticket selection
      </Link>
      <br />
      <Link routeName="booking-confirmation">proceed to confirmation</Link>
    </Container>
  );
};
