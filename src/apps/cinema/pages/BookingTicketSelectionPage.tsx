import React from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";

export const BookingTicketSelectionPage = () => {
  return (
    <Container>
      <div>BookingTicketSelection</div>
      <Link routeName="home">go back to previous page</Link>
      <br />
      <Link routeName="booking-seat-selection">proceed to seat selection</Link>
    </Container>
  );
};
