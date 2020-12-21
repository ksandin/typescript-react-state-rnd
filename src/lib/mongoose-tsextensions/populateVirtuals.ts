import { Document, DocumentQuery, QueryPopulateOptions } from "mongoose";
import { WithVirtuals } from "./WithVirtuals";
import { SchemaVirtuals } from "./SchemaVirtuals";

// The Virtuals type cannot be inferred.
// For ease of use it's moved to a separate function so one can specify the
// Virtuals type while letting the rest of the generic type parameters be be inferred.
export const populateVirtuals = <Virtuals extends SchemaVirtuals>() => <
  QueryResult,
  DocType extends Document,
  SelectedVirtualKeys extends keyof Virtuals,
  QueryHelpers = {}
>(
  query: DocumentQuery<QueryResult, DocType, QueryHelpers>,
  ...fields: Array<PopulatedField<SelectedVirtualKeys>>
) =>
  populateVirtualsImpl<
    QueryResult,
    DocType,
    Virtuals,
    SelectedVirtualKeys,
    QueryHelpers
  >(query, ...fields);

const populateVirtualsImpl = <
  QueryResult,
  DocType extends Document,
  Virtuals extends SchemaVirtuals,
  SelectedVirtualKeys extends keyof Virtuals,
  QueryHelpers = {}
>(
  query: DocumentQuery<QueryResult, DocType, QueryHelpers>,
  ...fields: Array<PopulatedField<SelectedVirtualKeys>>
) => {
  type QueryResultWithVirtuals = QueryResult extends Array<
    infer QueryResultItem
  >
    ? Array<WithVirtuals<QueryResultItem, Virtuals, SelectedVirtualKeys>>
    : WithVirtuals<QueryResult, Virtuals, SelectedVirtualKeys>;

  const options = ensureOptions(fields);
  const withPopulate = options.reduce((q, o) => q.populate(o), query);
  return withPopulate as DocumentQuery<
    QueryResultWithVirtuals,
    DocType,
    QueryHelpers
  >;
};

const ensureOptions = <FieldName extends keyof any>(
  fields: Array<PopulatedField<FieldName>>
) =>
  fields.map(
    (field) =>
      (typeof field === "object"
        ? field
        : { path: field }) as PopulatedFieldOptions<FieldName>
  );

type PopulatedField<FieldName extends keyof any> =
  | FieldName
  | PopulatedFieldOptions<FieldName>;

type PopulatedFieldOptions<FieldName extends keyof any> = Omit<
  QueryPopulateOptions,
  "path"
> & {
  path: FieldName;
};
