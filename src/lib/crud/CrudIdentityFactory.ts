export type CrudIdentityFactory<Id, Model> = {
  getIdentity: (item: Model) => Id;
  withNewIdentity: (item: Model) => Model;
};
