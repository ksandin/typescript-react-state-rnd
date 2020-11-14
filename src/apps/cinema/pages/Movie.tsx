import React from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";

export const Movie = () => {
  return (
    <Container>
      <div>Movie</div>
      <Link routeName="booking-ticket-selection">proceed to booking</Link>
    </Container>
  );
};
