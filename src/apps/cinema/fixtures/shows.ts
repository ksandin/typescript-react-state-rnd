import moment from "moment";
import { range } from "../functions/range";
import { Show, ShowId } from "../state/models/Show";
import { movies } from "./movies";
import { without } from "lodash";
import { MovieLanguage } from "../state/models/MovieLanguage";
import { rotate } from "../functions/rotate";
import { lounges } from "./lounges";

const languages = without(Object.values(MovieLanguage), MovieLanguage.All);
const timeMin = 18;
const timeMax = 22;
const minutesBetween = 30;

let id = 0 as ShowId;
export const shows: Show[] = [];
range(0, 6).forEach((day) => {
  for (const lounge of lounges) {
    const movie = rotate(movies, id);
    const dayStart = moment(new Date()).startOf("day").add(day, "day").toDate();
    const lastShow = moment(dayStart).add(timeMax, "hours").toDate();
    let dateCursor = moment(dayStart).add(timeMin, "hours").toDate();

    while (dateCursor <= lastShow) {
      shows.push({
        showId: id,
        loungeId: lounge.loungeId,
        cinemaId: lounge.cinemaId,
        movieId: movie.movieId,
        date: dateCursor,
        language: rotate(languages, lounge.cinemaId),
        subtitles: rotate(languages, lounge.cinemaId + 1),
      });
      id++;
      dateCursor = moment(dateCursor)
        .add(movie.runtime + minutesBetween, "minutes")
        .toDate();
    }
  }
});
