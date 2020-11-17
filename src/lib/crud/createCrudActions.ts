import { Repository } from "../store/Repository";
import { CrudAdapter } from "./CrudAdapter";
import { listToMap } from "./listToMap";
import { CrudState } from "./CrudState";

export const createCrudActions = <Id, Model>(
  repository: Repository<CrudState<Id, Model>>,
  adapter: CrudAdapter<Id, Model>
) => ({
  create: async (item: Model) => {
    const withId = await adapter.create(item);
    repository.update(repository.state.set(adapter.id(withId), withId));
    return withId;
  },
  readAll: async () => {
    const newEntries = await adapter.readAll();
    const newEntriesMap = listToMap(newEntries, adapter.id);
    repository.update(repository.state.merge(newEntriesMap));
  },
  update: async (item: Model) => {
    const rollbackEntries = repository.state;
    repository.update(repository.state.set(adapter.id(item), item));
    try {
      await adapter.update(item);
    } catch (e) {
      repository.update(rollbackEntries);
      throw e;
    }
  },
  delete: async (id: Id) => {
    const rollbackEntries = repository.state;
    repository.update(repository.state.delete(id));
    try {
      await adapter.delete(id);
    } catch (e) {
      repository.update(rollbackEntries);
      throw e;
    }
  },
});
