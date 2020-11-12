import React from "react";
import { Link } from "../components/Link";

export const Movies = () => {
  return (
    <div>
      <div>Movies</div>
      <Link routeName="movie">go to movie</Link>
    </div>
  );
};
