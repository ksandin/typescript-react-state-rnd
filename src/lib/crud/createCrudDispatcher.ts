import { createDispatcher } from "../store/createDispatcher";
import { updateRepository } from "../store/updateRepository";
import { Repository } from "../store/Repository";
import { CrudAdapter } from "./CrudAdapter";
import { listToMap } from "./listToMap";

export const createCrudDispatcher = <Id, Model>(
  repository: Repository<Id, Model>,
  adapter: CrudAdapter<Id, Model>
) =>
  createDispatcher({
    create: async (item: Model) => {
      const withId = await adapter.create(item);
      updateRepository(
        repository,
        repository.entries.set(adapter.id(withId), withId)
      );
      return withId;
    },
    readAll: async () => {
      const newEntries = await adapter.readAll();
      const newEntriesMap = listToMap(newEntries, adapter.id);
      updateRepository(repository, repository.entries.merge(newEntriesMap));
    },
    update: async (item: Model) => {
      const rollbackEntries = repository.entries;
      updateRepository(
        repository,
        repository.entries.set(adapter.id(item), item)
      );
      try {
        await adapter.update(item);
      } catch (e) {
        updateRepository(repository, rollbackEntries);
        throw e;
      }
    },
    delete: async (id: Id) => {
      const rollbackEntries = repository.entries;
      updateRepository(repository, repository.entries.delete(id));
      try {
        await adapter.delete(id);
      } catch (e) {
        updateRepository(repository, rollbackEntries);
        throw e;
      }
    },
  });
