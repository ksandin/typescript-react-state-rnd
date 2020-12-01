import moment from "moment";
import { without } from "lodash";
import { range } from "../../shared/functions/range";
import { Show, ShowId } from "../../shared/types/Show";
import { MovieLanguage } from "../../shared/types/MovieLanguage";
import { rotate } from "../../shared/functions/rotate";
import { movies } from "./movies";
import { lounges } from "./lounges";
import { cinemas } from "./cinemas";

const languages = without(Object.values(MovieLanguage), MovieLanguage.All);
const timeMin = 18;
const timeMax = 22;
const minutesBetween = 30;

let id = 0 as ShowId;
export const shows: Show[] = [];
range(0, 6).forEach((day) => {
  for (const lounge of lounges) {
    const dayStart = moment(new Date()).startOf("day").add(day, "day").toDate();
    const lastShow = moment(dayStart).add(timeMax, "hours").toDate();
    let dateCursor = moment(dayStart).add(timeMin, "hours").toDate();

    while (dateCursor <= lastShow) {
      const movie = rotate(movies, id);
      const cinemaIndex = cinemas.findIndex(
        (cinema) => cinema.cinemaId === lounge.cinemaId
      );
      shows.push({
        showId: id,
        loungeId: lounge.loungeId,
        cinemaId: lounge.cinemaId,
        movieId: movie.movieId,
        date: dateCursor,
        language: rotate(languages, cinemaIndex),
        subtitles: rotate(languages, cinemaIndex + 1),
      });
      id++;
      dateCursor = moment(dateCursor)
        .add(movie.runtime + minutesBetween, "minutes")
        .toDate();
    }
  }
});
