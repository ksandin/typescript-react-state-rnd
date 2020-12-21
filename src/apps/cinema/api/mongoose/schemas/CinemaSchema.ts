import { documentSchemaDefinition } from "../../../../../lib/mongoose-tsextensions/documentSchemaDefinition";
import { CinemaDocument } from "../documents/CinemaDocument";
import { NamedSchema } from "../../../../../lib/mongoose-tsextensions/NamedSchema";

export const CinemaSchema = new NamedSchema(
  "Cinema",
  documentSchemaDefinition<CinemaDocument>({
    cinemaId: {
      type: NamedSchema.Types.ObjectId,
      index: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
  })
);
