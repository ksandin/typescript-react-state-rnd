import React, { useState } from "react";
import { createRepository } from "../../lib/store/createRepository";
import { TodoId } from "../../shared/state/TodoId";
import { Todo } from "../../shared/state/Todo";
import { createStore } from "../../lib/store/createStore";
import { createCrudDispatcher } from "../../lib/crud/createCrudDispatcher";
import { useStore } from "../../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { createNumericCrudIdentityFactory } from "../../lib/crud/createNumericCrudIdentityFactory";
import { createCrudMemoryAdapter } from "../../lib/crud/createCrudMemoryAdapter";
import { automateLocalStorageSerialization } from "../../lib/automateLocalStorageSerialization";

const createTodoStore = () => {
  const repository = createRepository<TodoId, Todo>();
  automateLocalStorageSerialization("localStateObserverExample", repository);
  return createStore(
    repository,
    createCrudDispatcher(
      repository,
      createCrudMemoryAdapter<TodoId, Todo>(
        createNumericCrudIdentityFactory(
          (todo) => todo.id,
          (todo, id) => ({ ...todo, id }),
          repository.entries
        ),
        repository.entries
      )
    )
  );
};

export const TodoExamplePersistedLocalStateObserver = () => {
  const [store] = useState(createTodoStore);
  const [entries, , actions] = useStore(store);
  return (
    <TodoExample
      todos={entries.toList().toArray()}
      createTodo={actions.create}
      updateTodo={actions.update}
      deleteTodo={actions.delete}
    />
  );
};
