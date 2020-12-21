import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { MongoMemoryServer } from "mongodb-memory-server";
import { createConnection } from "mongoose";
import { MovieId } from "../../shared/types/Movie";
import { ShowId } from "../../shared/types/Show";
import { parseBooking } from "../../shared/state/parseBooking";
import { parseSearchForShowsOptions } from "../../shared/state/parseSearchForShowsOptions";
import { makeBooking } from "./operations/makeBooking";
import { searchForShows } from "./operations/searchForShows";
import { searchForMovie } from "./operations/searchForMovie";
import { searchForMovies } from "./operations/searchForMovies";
import { getShowSeats } from "./operations/getShowSeats";
import { getShowDetails } from "./operations/getShowDetails";
import { getHomeState } from "./operations/getHomeState";
import { getUserSession } from "./operations/getUserSession";
import { CinemaModels, createModels } from "./createModels";
import { saveFixtures } from "./operations/saveFixtures";

async function startMongoDB() {
  const mongoDB = new MongoMemoryServer();
  const uri = await mongoDB.getUri();
  console.log("Starting mongoDB at", uri);
  return createConnection(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
}

function startExpress(models: CinemaModels) {
  const app = express();
  app.use(cors());

  const jsonParser = bodyParser.json();

  app.get("/session", async (req, res) => {
    res.json(await getUserSession(models));
  });

  app.get("/home", async (req, res) => {
    res.json(await getHomeState(models));
  });

  app.post("/shows", jsonParser, async (req, res) =>
    res.json(
      await searchForShows(
        models.ShowModel,
        parseSearchForShowsOptions(req.body)
      )
    )
  );

  app.get("/movie/:movieId", async (req, res) => {
    const movieId = req.params.movieId as MovieId;
    const movie = await searchForMovie(models.MovieModel, movieId);
    res.json(movie);
  });

  app.post("/movies", jsonParser, async (req, res) =>
    res.json(await searchForMovies(models.MovieModel, req.body))
  );

  app.get("/show/:showId/seats", async (req, res) => {
    res.json(await getShowSeats(models, req.params.showId as ShowId));
  });

  app.get("/show/:showId/details", async (req, res) => {
    res.json(
      await getShowDetails(models.ShowModel, req.params.showId as ShowId)
    );
  });

  app.post("/booking", jsonParser, async (req, res) => {
    const error = await makeBooking(models, parseBooking(req.body));
    res.json(error ? { error } : {});
  });

  const port = 3003;
  app.listen(port, () =>
    console.log(`${__filename} listening on port ${port}`)
  );
}

async function cinemaMongooseApi() {
  const connection = await startMongoDB();
  const models = createModels(connection);
  await saveFixtures(models);
  await startExpress(models);
}

cinemaMongooseApi();
