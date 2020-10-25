import React, { createContext, useContext } from "react";
import { Example } from "./Example";
import { useStore } from "../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { Todo } from "../state/Todo";
import { TodoId } from "../state/TodoId";
import { Store } from "../lib/store/Store";
import { createStore } from "../lib/store/createStore";
import { createSyncAdapter } from "../lib/store/createSyncAdapter";

export type TodoExampleContextStateProps = {};

let idCounter = 0;
const nextId = () => idCounter++;
const TodoStoreContext = createContext<Store<TodoId, Todo>>(
  createStore(
    createSyncAdapter(
      (todo: Todo) => todo.id,
      (todo: Todo) => ({ ...todo, id: nextId() as TodoId })
    )
  )
);

export const TodoExampleContextState: React.FC<TodoExampleContextStateProps> = () => {
  const store = useContext(TodoStoreContext);
  const [entries, addItem, updateItem, deleteItem] = useStore(store);
  return (
    <Example label="Todo app with context state">
      <TodoExample
        todos={entries.toList().toArray()}
        createTodo={addItem}
        updateTodo={updateItem}
        deleteTodo={deleteItem}
      />
    </Example>
  );
};
