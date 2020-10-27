import React from "react";
import { Typography } from "@material-ui/core";
import { TodoId } from "../state/TodoId";
import { Todo } from "../state/Todo";
import { useStore } from "../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { useBasicComponentStore } from "../lib/store/useBasicComponentStore";
import { Example } from "./Example";

// HACK extracting type information from hook
const useHack = () => useBasicComponentStore<TodoId, Todo>();
type TodoStore = ReturnType<typeof useHack>;

export const TodoExampleSharedState = () => {
  const store = useBasicComponentStore<TodoId, Todo>();
  return (
    <Example label="Two todo apps with shared component state">
      <Typography variant="h6">App 1</Typography>
      <TodoStoreExample store={store} />
      <Typography variant="h6">App 2</Typography>
      <TodoStoreExample store={store} />
    </Example>
  );
};

const TodoStoreExample: React.FC<{ store: TodoStore }> = ({ store }) => {
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
