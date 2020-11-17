import { createDispatcher } from "../store/createDispatcher";
import { updateRepository } from "../store/updateRepository";
import { Repository } from "../store/Repository";
import { CrudAdapter } from "./CrudAdapter";
import { listToMap } from "./listToMap";
import { CrudState } from "./CrudState";

export const createCrudDispatcher = <Id, Model>(
  repository: Repository<CrudState<Id, Model>>,
  adapter: CrudAdapter<Id, Model>
) =>
  createDispatcher({
    create: async (item: Model) => {
      const withId = await adapter.create(item);
      updateRepository(
        repository,
        repository.state.set(adapter.id(withId), withId)
      );
      return withId;
    },
    readAll: async () => {
      const newEntries = await adapter.readAll();
      const newEntriesMap = listToMap(newEntries, adapter.id);
      updateRepository(repository, repository.state.merge(newEntriesMap));
    },
    update: async (item: Model) => {
      const rollbackEntries = repository.state;
      updateRepository(
        repository,
        repository.state.set(adapter.id(item), item)
      );
      try {
        await adapter.update(item);
      } catch (e) {
        updateRepository(repository, rollbackEntries);
        throw e;
      }
    },
    delete: async (id: Id) => {
      const rollbackEntries = repository.state;
      updateRepository(repository, repository.state.delete(id));
      try {
        await adapter.delete(id);
      } catch (e) {
        updateRepository(repository, rollbackEntries);
        throw e;
      }
    },
  });
