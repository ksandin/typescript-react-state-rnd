import React from "react";
import { Example } from "./Example";
import { TodoExample } from "./TodoExample";
import { Todo } from "../state/Todo";
import { TodoId } from "../state/TodoId";
import { useStore } from "../lib/store/useStore";
import { createStore } from "../lib/store/createStore";
import { createAsyncAdapter } from "../lib/store/createAsyncAdapter";

let idCounter = 0;
const nextId = () => idCounter++;
const todoStore = createStore(
  createAsyncAdapter(
    (todo: Todo) => todo.id,
    (todo: Todo) => ({ ...todo, id: nextId() as TodoId }),
    1000
  )
);

export type TodoExampleAsyncStateProps = {};

export const TodoExampleAsyncState: React.FC<TodoExampleAsyncStateProps> = () => {
  const [entries, createItem, updateItem, deleteItem, statuses] = useStore(
    todoStore
  );
  return (
    <Example label="Todo app with async state">
      <TodoExample
        todos={entries.toList().toArray()}
        createTodo={createItem}
        updateTodo={updateItem}
        deleteTodo={deleteItem}
        statuses={statuses}
      />
    </Example>
  );
};
