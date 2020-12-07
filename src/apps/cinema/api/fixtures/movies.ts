import moment from "moment";
import {
  adjectives,
  animals,
  colors,
  uniqueNamesGenerator,
} from "unique-names-generator";
import { Types } from "mongoose";
import { Movie, MovieId } from "../../shared/types/Movie";
import { range } from "../../shared/functions/range";
import { MovieAgeLimit } from "../../shared/types/MovieAgeLimit";
import { MovieGenre } from "../../shared/types/MovieGenre";
import { MovieLanguage } from "../../shared/types/MovieLanguage";
import { rotate, rotateMany } from "../../shared/functions/rotate";

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
const genres = Object.values(MovieGenre);
const ageLimits = Object.values(MovieAgeLimit);
const languages = Object.values(MovieLanguage);
const randomName = (seed?: number) =>
  uniqueNamesGenerator({
    dictionaries: [adjectives, colors, animals],
    separator: " ",
    length: 3,
    style: "capital",
    seed,
  });

const cast = [
  "Tom Hanks",
  "Robert De Niro",
  "Leonardo DiCaprio",
  "Al Pacino",
  "Denzel Washington",
  "Robert Downey, Jr.",
  "Jack Nicholson",
  "Christian Bale",
  "Johnny Depp",
  "Brad Pitt",
];
const directors = [
  "Quentin Tarantino",
  "Martin Scorsese",
  "Christopher Nolan",
  "Stephen Spielberg",
  "David Fincher",
  "James Cameron",
  "Peter Jackson",
];

export const movies: Movie[] = range(1, 50).map((i) => ({
  bannerUrl: `http://lorempixel.com/920/400/transport/?_=${i}`,
  cardUrl: `http://lorempixel.com/180/280/transport/?_=${i}`,
  name: randomName(i),
  movieId: Types.ObjectId().toString() as MovieId,
  description,
  premiereDate: rotate(premiereDates, i),
  runtime: rotate(runTimes, i),
  genres: [rotate(genres, i), rotate(genres, i + 1)],
  ageLimit: rotate(ageLimits, i),
  language: rotate(languages, i),
  cast: rotateMany(cast, i, 3),
  director: rotate(directors, i),
  trailerUrl: "https://www.youtube.com/watch?v=AaK0AKQFCNY",
  snapshotUrls: range(0, 4).map(
    (n) => `http://lorempixel.com/180/280/transport/?_=snap${i * 5 + n}`
  ),
}));
