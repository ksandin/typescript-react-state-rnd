import { Document, DocumentDefinition } from "mongoose";

/**
 * A type safe way to extract the properties defined in the document definition.
 */
export function documentDefinition<D extends Document>(document: D) {
  const documentObject = document.toObject();
  let propertyNames: Array<
    keyof DocumentDefinition<D>
  > = Object.getOwnPropertyNames(document.schema.obj) as any;
  return propertyNames.reduce(
    (props, propertyName) => ({
      ...props,
      [propertyName]: documentObject[propertyName],
    }),
    {} as DocumentDefinition<D>
  );
}
