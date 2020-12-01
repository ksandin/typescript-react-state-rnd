import { Schema, SchemaDefinition, SchemaOptions } from "mongoose";

export class NamedSchema<T = any> extends Schema<T> {
  constructor(
    public name: string,
    definition?: SchemaDefinition,
    options?: SchemaOptions
  ) {
    super(definition, options);
  }
}
