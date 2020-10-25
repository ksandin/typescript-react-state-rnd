import React from "react";
import { Typography } from "@material-ui/core";
import { Store } from "../lib/store/Store";
import { TodoId } from "../state/TodoId";
import { Todo } from "../state/Todo";
import { useStore } from "../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { useBasicComponentStore } from "../lib/store/useBasicComponentStore";
import { Example } from "./Example";

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

const TodoStoreExample: React.FC<{ store: Store<TodoId, Todo> }> = ({
  store,
}) => {
  const [entries, addItem, updateItem, deleteItem] = useStore(store);
  return (
    <TodoExample
      todos={entries.toList().toArray()}
      addTodo={addItem}
      updateTodo={updateItem}
      deleteTodo={deleteItem}
    />
  );
};
