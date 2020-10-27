import { createDispatcher } from "./createDispatcher";
import { updateRepository } from "./updateRepository";
import { Repository } from "./Repository";
import { CrudAdapter } from "./CrudAdapter";

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
    // read: async () => {
    //   const newEntries = await adapter.read();
    //   updateRepository(repository, repository.entries.merge(newEntries));
    // },
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
    delete: async (item: Model) => {
      const id = adapter.id(item);
      const rollbackEntries = repository.entries;
      updateRepository(repository, repository.entries.delete(id));
      try {
        await adapter.delete(item);
      } catch (e) {
        updateRepository(repository, rollbackEntries);
        throw e;
      }
    },
  });
