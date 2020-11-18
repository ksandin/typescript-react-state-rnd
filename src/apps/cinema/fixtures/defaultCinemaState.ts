import { CinemaState } from "../state/CinemaState";
import moment from "moment";

export const defaultCinemaState: CinemaState = {
  location: "Stockholm",
  locationOptions: ["Stockholm", "Göteborg"],
  homeHeroRecommendation: {
    imageUrl: "http://lorempixel.com/920/400/transport/",
    name: "Operation Nordpolen",
    premiere: moment(new Date()).add(3, "days").toDate(),
  },
};
