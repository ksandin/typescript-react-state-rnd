import React from "react";
import { TodoExample } from "./TodoExample";
import { Todo } from "../state/Todo";
import { TodoId } from "../state/TodoId";
import { useStore } from "../lib/store/useStore";
import { createStore } from "../lib/store/createStore";
import { createCrudMemoryAdapter } from "../lib/store/createCrudMemoryAdapter";
import { createRepository } from "../lib/store/createRepository";
import { createCrudDispatcher } from "../lib/store/createCrudDispatcher";

let idCounter = 0;
const nextId = () => idCounter++;
const repository = createRepository<TodoId, Todo>();
const todoStore = createStore(
  repository,
  createCrudDispatcher(
    repository,
    createCrudMemoryAdapter(
      (todo: Todo) => todo.id,
      (todo: Todo) => ({ ...todo, id: nextId() as TodoId }),
      1000
    )
  )
);

export type TodoExampleAsyncStateProps = {};

export const TodoExampleAsyncState: React.FC<TodoExampleAsyncStateProps> = () => {
  const [entries, statuses, actions] = useStore(todoStore);
  return (
    <TodoExample
      todos={entries.toList().toArray()}
      createTodo={actions.create}
      updateTodo={actions.update}
      deleteTodo={actions.delete}
      statuses={statuses}
    />
  );
};
