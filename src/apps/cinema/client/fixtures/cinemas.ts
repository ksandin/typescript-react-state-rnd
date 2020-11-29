import { without } from "lodash";
import { Cinema, CinemaId } from "../state/models/Cinema";
import { MovieLanguage } from "../state/models/MovieLanguage";

const languages = without(Object.values(MovieLanguage), MovieLanguage.All);

export const cinemas: Cinema[] = languages.map((language, i) => ({
  name: `${language} Cinema`,
  cinemaId: i as CinemaId,
}));
