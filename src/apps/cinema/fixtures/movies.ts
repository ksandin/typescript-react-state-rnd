import moment from "moment";
import { Movie, MovieId } from "../state/models/Movie";
import { range } from "../functions/range";
import { MovieAgeLimit } from "../state/models/MovieAgeLimit";
import { MovieGenre } from "../state/models/MovieGenre";

const description = `En populär influencer och hans vänner reser jorden runt och filmar sig
själva i extrema situationer. I Ryssland blir de inbjudna till ett
mystiskt escape room av en excentrisk miljonär och ser en given
videosuccé i sociala medier framför sig. Men inga likes i världen kan
köpa dem fria från mardrömmen som väntar ...`;

const premiereDates = [
  moment(new Date()).subtract(1, "week").toDate(),
  moment(new Date()).add(1, "week").toDate(),
];
const runTimes = [75, 87, 95, 105, 112];
const allGenres = Object.values(MovieGenre);
const allAgeLimits = Object.values(MovieAgeLimit);

export const movies: Movie[] = range(1, 15).map((i) => ({
  bannerUrl: `http://lorempixel.com/920/400/transport/?_=${i}`,
  cardUrl: `http://lorempixel.com/180/280/transport/?_=${i}`,
  name: `Movie ${i}`,
  movieId: i as MovieId,
  description,
  premiereDate: rotate(premiereDates, i),
  runtime: rotate(runTimes, i),
  genres: [rotate(allGenres, i), rotate(allGenres, i + 1)],
  ageLimit: rotate(allAgeLimits, i),
  trailerUrl: "https://www.youtube.com/watch?v=AaK0AKQFCNY",
  snapshotUrls: range(0, 4).map(
    (n) => `http://lorempixel.com/180/280/transport/?_=snap${i * 5 + n}`
  ),
}));

function rotate<T>(values: T[], index: number) {
  return values[index % values.length];
}
