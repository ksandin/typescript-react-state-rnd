import React, { createContext, useContext } from "react";
import { useStore } from "../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { Todo } from "../state/Todo";
import { TodoId } from "../state/TodoId";
import { createStore } from "../lib/store/createStore";
import { createRepository } from "../lib/store/createRepository";
import { createCrudDispatcher } from "../lib/store/createCrudDispatcher";
import { createCrudMemoryAdapter } from "../lib/store/createCrudMemoryAdapter";

export type TodoExampleContextStateProps = {};

let idCounter = 0;
const nextId = () => idCounter++;
const repository = createRepository<TodoId, Todo>();
const TodoStoreContext = createContext(
  createStore(
    repository,
    createCrudDispatcher(
      repository,
      createCrudMemoryAdapter(
        (todo: Todo) => todo.id,
        (todo: Todo) => ({ ...todo, id: nextId() as TodoId })
      )
    )
  )
);

export const TodoExampleContextState: React.FC<TodoExampleContextStateProps> = () => {
  const store = useContext(TodoStoreContext);
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
