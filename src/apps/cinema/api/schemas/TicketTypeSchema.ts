import { documentSchemaDefinition } from "../../../../lib/mongoose-tsextensions/documentSchemaDefinition";
import { NamedSchema } from "../../../../lib/mongoose-tsextensions/NamedSchema";
import { TicketTypeDocument } from "../documents/TicketTypeDocument";

export const TicketTypeSchema = new NamedSchema(
  "TicketType",
  documentSchemaDefinition<TicketTypeDocument>({
    ticketTypeId: {
      type: NamedSchema.Types.ObjectId,
      index: true,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  })
);
