import { Map } from "immutable";
import { CrudIdentityFactory } from "./CrudIdentityFactory";
import { RepositoryEntries } from "../store/RepositoryEntries";

export const createNumericCrudIdentityFactory = <Id extends number, Model>(
  getIdentity: (item: Model) => Id,
  withNewIdentity: (item: Model, id: Id) => Model,
  initialEntries: RepositoryEntries<Id, Model> = Map()
): CrudIdentityFactory<Id, Model> => {
  const initialIds = Array.from(initialEntries.values()).map(getIdentity);
  let idCounter = initialIds.length ? Math.max(...initialIds) + 1 : 0;
  const nextId = () => idCounter++ as Id;
  return {
    getIdentity,
    withNewIdentity: (item) => withNewIdentity(item, nextId()),
  };
};
