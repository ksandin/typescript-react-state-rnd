import { MongoMemoryServer } from "mongodb-memory-server";
import { createConnection } from "mongoose";
import { createRestApi } from "../shared/createRestApi";
import { getShowDetails } from "./operations/getShowDetails";
import { getHomeState } from "./operations/getHomeState";
import { saveFixtures } from "./operations/saveFixtures";
import { createModels } from "./createModels";
import { getUserSession } from "./operations/getUserSession";
import { searchForShows } from "./operations/searchForShows";
import { searchForMovie } from "./operations/searchForMovie";
import { searchForMovies } from "./operations/searchForMovies";
import { getShowSeats } from "./operations/getShowSeats";
import { makeBooking } from "./operations/makeBooking";

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

async function cinemaMongooseApi() {
  const connection = await startMongoDB();
  const models = createModels(connection);
  await saveFixtures(models);
  const rest = createRestApi({
    getUserSession: () => getUserSession(models),
    getHomeState: () => getHomeState(models),
    searchForShows: (options) => searchForShows(models.ShowModel, options),
    searchForMovie: (movieId) => searchForMovie(models.MovieModel, movieId),
    searchForMovies: (options) => searchForMovies(models.MovieModel, options),
    getShowSeats: (showId) => getShowSeats(models, showId),
    getShowDetails: (showId) => getShowDetails(models.ShowModel, showId),
    makeBooking: (booking) => makeBooking(models, booking),
  });
  const port = 3003;
  await rest.listen(port, () =>
    console.log(`${__filename} listening on port ${port}`)
  );
}

cinemaMongooseApi();
