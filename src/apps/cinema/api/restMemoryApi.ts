import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MovieId } from "../shared/models/Movie";
import { ShowId } from "../shared/models/Show";
import { parseBooking } from "../shared/state/parseBooking";
import { makeBooking } from "./operations/makeBooking";
import { searchForShows } from "./operations/searchForShows";
import { searchForMovie } from "./operations/searchForMovie";
import { searchForMovies } from "./operations/searchForMovies";
import { getShowSeats } from "./operations/getShowSeats";
import { getShowDetails } from "./operations/getShowDetails";
import { getHomeState } from "./operations/getHomeState";
import { getUserSession } from "./operations/getUserSession";

const app = express();
app.use(cors());

const jsonParser = bodyParser.json();

app.get("/session", (req, res) => {
  res.json(getUserSession());
});

app.get("/home", (req, res) => {
  res.json(getHomeState());
});

app.post("/shows", jsonParser, async (req, res) =>
  res.json(searchForShows(req.body))
);

app.get("/movie/:movieId", async (req, res) => {
  const movieId = parseInt(req.params.movieId, 10) as MovieId;
  const movie = searchForMovie(movieId);
  res.json(movie);
});

app.post("/movies", jsonParser, async (req, res) =>
  res.json(searchForMovies(req.body))
);

app.get("/show/:showId/seats", async (req, res) => {
  const showId = parseInt(req.params.showId, 10) as ShowId;
  res.json(getShowSeats(showId));
});

app.get("/show/:showId/details", async (req, res) => {
  const showId = parseInt(req.params.showId, 10) as ShowId;
  res.json(getShowDetails(showId));
});

app.post("/booking", jsonParser, async (req, res) => {
  const error = await makeBooking(parseBooking(req.body));
  res.json(error ? { error } : {});
});

const port = 3003;
app.listen(port, () => console.log(`${__filename} listening on port ${port}`));
