import React, { useState } from "react";
import { Typography } from "@material-ui/core";
import { useStore } from "../lib/store/useStore";
import { Todo } from "../state/Todo";
import { TodoId } from "../state/TodoId";
import { TodoExample } from "./TodoExample";
import { createRepository } from "../lib/store/createRepository";
import { createStore } from "../lib/store/createStore";
import { createCrudDispatcher } from "../lib/crud/createCrudDispatcher";
import { createNumericCrudMemoryAdapter } from "../lib/crud/createNumericCrudMemoryAdapter";

export const TodoExampleIsolatedState = () => (
  <>
    <Typography variant="h6">App 1</Typography>
    <TodoComponentStoreExample />
    <Typography variant="h6">App 2</Typography>
    <TodoComponentStoreExample />
  </>
);

const createTodoStore = () => {
  const repository = createRepository<TodoId, Todo>();
  return createStore(
    repository,
    createCrudDispatcher(
      repository,
      createNumericCrudMemoryAdapter<TodoId, Todo>(
        (todo) => todo.id,
        (todo, id) => ({ ...todo, id })
      )
    )
  );
};

const TodoComponentStoreExample = () => {
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
