import moment from "moment";
import { Types } from "mongoose";
import { range } from "../../shared/functions/range";
import { Show, ShowId } from "../../shared/types/Show";
import { MovieLanguage } from "../../shared/types/MovieLanguage";
import { rotate } from "../../shared/functions/rotate";
import { movies } from "./movies";
import { lounges } from "./lounges";
import { cinemas } from "./cinemas";

const languages = Object.values(MovieLanguage);
const timeMin = 18;
const timeMax = 22;
const minutesBetween = 30;

export const shows: Show[] = [];
range(0, 6).forEach((day) => {
  for (const lounge of lounges) {
    const dayStart = moment(new Date()).startOf("day").add(day, "day").toDate();
    const lastShow = moment(dayStart).add(timeMax, "hours").toDate();
    let dateCursor = moment(dayStart).add(timeMin, "hours").toDate();

    while (dateCursor <= lastShow) {
      const movie = rotate(movies, shows.length);
      const cinemaIndex = cinemas.findIndex(
        (cinema) => cinema.cinemaId === lounge.cinemaId
      );
      shows.push({
        showId: Types.ObjectId().toString() as ShowId,
        loungeId: lounge.loungeId,
        cinemaId: lounge.cinemaId,
        movieId: movie.movieId,
        date: dateCursor,
        language: rotate(languages, cinemaIndex),
        subtitles: rotate(languages, cinemaIndex + 1),
      });
      dateCursor = moment(dateCursor)
        .add(movie.runtime + minutesBetween, "minutes")
        .toDate();
    }
  }
});
