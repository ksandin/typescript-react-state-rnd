import React from "react";
import { Link } from "../components/Link";
import { Container } from "../components/Container";

export const Movies = () => {
  return (
    <Container>
      <div>Movies</div>
      <Link routeName="movie">go to movie</Link>
    </Container>
  );
};
