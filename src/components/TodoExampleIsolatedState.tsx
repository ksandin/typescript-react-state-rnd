import React from "react";
import { Typography } from "@material-ui/core";
import { useStore } from "../lib/store/useStore";
import { useComponentStore } from "../lib/store/useComponentStore";
import { Example } from "./Example";
import { Todo } from "../state/Todo";
import { TodoId } from "../state/TodoId";
import { TodoExample } from "./TodoExample";

export const TodoExampleIsolatedState = () => (
  <Example label="Two todo apps with isolated component state">
    <Typography variant="h6">App 1</Typography>
    <TodoComponentStoreExample />
    <Typography variant="h6">App 2</Typography>
    <TodoComponentStoreExample />
  </Example>
);

let idCounter = 0;
const nextId = () => idCounter++;

const TodoComponentStoreExample = () => {
  const store = useComponentStore(
    (todo: Todo) => todo.id,
    (todo: Todo) => ({ ...todo, id: nextId() as TodoId } as Todo)
  );
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
