import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { parseSearchForShowsOptions } from "../../shared/state/parseSearchForShowsOptions";
import { MovieId } from "../../shared/types/Movie";
import { ShowId } from "../../shared/types/Show";
import { parseBooking } from "../../shared/state/parseBooking";
import { ApiOperations } from "./ApiOperations";

export function createRestApi(operations: ApiOperations) {
  const rest = express();
  rest.use(cors());

  const jsonParser = bodyParser.json();

  rest.get("/session", async (req, res) => {
    res.json(await operations.getUserSession());
  });

  rest.get("/home", async (req, res) => {
    res.json(await operations.getHomeState());
  });

  rest.post("/shows", jsonParser, async (req, res) =>
    res.json(
      await operations.searchForShows(parseSearchForShowsOptions(req.body))
    )
  );

  rest.get("/movie/:movieId", async (req, res) => {
    const movieId = req.params.movieId as MovieId;
    const movie = await operations.searchForMovie(movieId);
    res.json(movie);
  });

  rest.post("/movies", jsonParser, async (req, res) =>
    res.json(await operations.searchForMovies(req.body))
  );

  rest.get("/show/:showId/seats", async (req, res) => {
    res.json(await operations.getShowSeats(req.params.showId as ShowId));
  });

  rest.get("/show/:showId/details", async (req, res) => {
    res.json(await operations.getShowDetails(req.params.showId as ShowId));
  });

  rest.post("/booking", jsonParser, async (req, res) => {
    const error = await operations.makeBooking(parseBooking(req.body));
    res.json(error ? { error } : {});
  });

  return rest;
}
