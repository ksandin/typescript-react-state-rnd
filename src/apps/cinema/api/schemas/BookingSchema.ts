import { Map } from "immutable";
import { documentSchemaDefinition } from "../../../../lib/mongoose-tsextensions/documentSchemaDefinition";
import { NamedSchema } from "../../../../lib/mongoose-tsextensions/NamedSchema";
import { BookingDocument } from "../documents/BookingDocument";
import { ShowSchema } from "./ShowSchema";

export const BookingSchema = new NamedSchema(
  "Booking",
  documentSchemaDefinition<BookingDocument>({
    bookingId: {
      type: NamedSchema.Types.ObjectId,
      index: true,
      required: true,
      unique: true,
    },
    showId: {
      type: NamedSchema.Types.ObjectId,
      required: true,
      ref: ShowSchema.name,
    },
    seats: {
      type: [Number],
      required: true,
    },
    tickets: {
      type: String,
      required: true,
      get: (jsonString: string) => Map(JSON.parse(jsonString)),
      set: (queryObject: Object) => JSON.stringify(queryObject),
    },
  })
);
