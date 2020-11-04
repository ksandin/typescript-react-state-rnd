import React, { useState } from "react";
import { createRepository } from "../lib/store/createRepository";
import { TodoId } from "../state/TodoId";
import { Todo } from "../state/Todo";
import { createStore } from "../lib/store/createStore";
import { createCrudDispatcher } from "../lib/crud/createCrudDispatcher";
import { useStore } from "../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { createNumericCrudIdentityFactory } from "../lib/crud/createNumericCrudIdentityFactory";
import { createCrudLocalStorageAdapter } from "../lib/crud/createCrudLocalStorageAdapter";

const createTodoStore = () => {
  const repository = createRepository<TodoId, Todo>();
  return createStore(
    repository,
    createCrudDispatcher(
      repository,
      createCrudLocalStorageAdapter<TodoId, Todo>(
        "localStateAdapterExample",
        createNumericCrudIdentityFactory(
          (todo) => todo.id,
          (todo, id) => ({ ...todo, id }),
          repository.entries
        )
      )
    )
  );
};

export const TodoExamplePersistedLocalStateAdapter = () => {
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
