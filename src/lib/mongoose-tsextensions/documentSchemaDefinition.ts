import { Document, DocumentDefinition, SchemaDefinition } from "mongoose";

/**
 * A type safe way to define a schema for a specific document
 */
export const documentSchemaDefinition = <D extends Document>(
  definition: DocumentSchemaDefinition<keyof Omit<DocumentDefinition<D>, "_id">>
) => definition;

type RecordValue<R> = R extends Record<any, infer T> ? T : never;

export type DocumentSchemaDefinition<K extends keyof any> = {
  [P in K]: RecordValue<SchemaDefinition>;
};
