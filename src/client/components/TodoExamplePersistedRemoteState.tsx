import React, { useState } from "react";
import { createRepository } from "../../lib/store/createRepository";
import { TodoId } from "../../shared/state/TodoId";
import { Todo } from "../../shared/state/Todo";
import { createStore } from "../../lib/store/createStore";
import { createCrudDispatcher } from "../../lib/crud/createCrudDispatcher";
import { useStore } from "../../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { createCrudRestAdapter } from "../../lib/crud/createCrudRestAdapter";

const createTodoStore = () => {
  const repository = createRepository<TodoId, Todo>();
  return createStore(
    repository,
    createCrudDispatcher(
      repository,
      createCrudRestAdapter<TodoId, Todo>(
        "http://localhost:3001/todo",
        (todo) => todo.id
      )
    )
  );
};

export const TodoExamplePersistedRemoteState = () => {
  const [store] = useState(createTodoStore);
  const [entries, , actions] = useStore(store);
  return (
    <TodoExample
      todos={entries.toList().toArray()}
      createTodo={actions.create}
      updateTodo={actions.update}
      deleteTodo={actions.delete}
      readAllTodos={actions.readAll}
    />
  );
};
