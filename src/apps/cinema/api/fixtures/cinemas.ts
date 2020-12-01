import { without } from "lodash";
import { Types } from "mongoose";
import { Cinema, CinemaId } from "../../shared/models/Cinema";
import { MovieLanguage } from "../../shared/models/MovieLanguage";

const languages = without(Object.values(MovieLanguage), MovieLanguage.All);

export const cinemas: Cinema[] = languages.map((language, i) => ({
  name: `${language} Cinema`,
  cinemaId: Types.ObjectId().toString() as CinemaId,
}));
