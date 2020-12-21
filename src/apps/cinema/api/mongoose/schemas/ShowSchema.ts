import { MovieLanguage } from "../../../shared/types/MovieLanguage";
import { NamedSchema } from "../../../../../lib/mongoose-tsextensions/NamedSchema";
import { documentSchemaDefinition } from "../../../../../lib/mongoose-tsextensions/documentSchemaDefinition";
import { registerVirtuals } from "../../../../../lib/mongoose-tsextensions/registerVirtuals";
import { ShowDocument, ShowVirtuals } from "../documents/ShowDocument";
import { MovieSchema } from "./MovieSchema";
import { CinemaSchema } from "./CinemaSchema";
import { LoungeSchema } from "./LoungeSchema";

export const ShowSchema = new NamedSchema(
  "Show",
  documentSchemaDefinition<ShowDocument>({
    showId: {
      type: NamedSchema.Types.ObjectId,
      index: true,
      required: true,
      unique: true,
    },
    loungeId: {
      type: NamedSchema.Types.ObjectId,
      required: true,
    },
    movieId: {
      type: NamedSchema.Types.ObjectId,
      required: true,
    },
    cinemaId: {
      type: NamedSchema.Types.ObjectId,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    subtitles: {
      type: [String],
      enum: Object.values(MovieLanguage),
      required: true,
    },
    language: {
      type: String,
      enum: Object.values(MovieLanguage),
      required: true,
    },
  })
);

registerVirtuals<ShowDocument, ShowVirtuals>(ShowSchema, {
  movie: {
    ref: MovieSchema.name,
    localField: "movieId",
    foreignField: "movieId",
    justOne: true,
  },
  lounge: {
    ref: LoungeSchema.name,
    localField: "loungeId",
    foreignField: "loungeId",
    justOne: true,
  },
  cinema: {
    ref: CinemaSchema.name,
    localField: "cinemaId",
    foreignField: "cinemaId",
    justOne: true,
  },
});
