import React, { useState } from "react";
import { createRepository } from "../lib/store/createRepository";
import { TodoId } from "../state/TodoId";
import { Todo } from "../state/Todo";
import { createStore } from "../lib/store/createStore";
import { createCrudDispatcher } from "../lib/crud/createCrudDispatcher";
import { createCrudMemoryAdapter } from "../lib/crud/createCrudMemoryAdapter";
import { useStore } from "../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { automateLocalStorageSerialization } from "../lib/automateLocalStorageSerialization";

export type TodoExamplePersistedLocalStateProps = {};

const createTodoStore = () => {
  const repository = createRepository<TodoId, Todo>();
  automateLocalStorageSerialization("localStateExample", repository);
  const repositoryIds = Array.from(repository.entries.values()).map(
    (todo) => todo.id
  );
  let idCounter = Math.max(...repositoryIds) + 1;
  const nextId = () => idCounter++;
  return createStore(
    repository,
    createCrudDispatcher(
      repository,
      createCrudMemoryAdapter<TodoId, Todo>(
        (todo) => todo.id,
        (todo) => ({ ...todo, id: nextId() as TodoId }),
        repository.entries
      )
    )
  );
};

export const TodoExamplePersistedLocalState: React.FC<TodoExamplePersistedLocalStateProps> = () => {
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
