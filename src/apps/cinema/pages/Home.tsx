import React from "react";
import { Link } from "../Link";

export const Home = () => {
  return (
    <div>
      <div>Home</div>
      <Link routeName="movies">Show all movies in a category</Link>
      <br />
      <Link routeName="movie">go to movie page</Link>
    </div>
  );
};
