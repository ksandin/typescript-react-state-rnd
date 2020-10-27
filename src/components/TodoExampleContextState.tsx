import React, { createContext, useContext } from "react";
import { Example } from "./Example";
import { useStore } from "../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { Todo } from "../state/Todo";
import { TodoId } from "../state/TodoId";
import { createStore } from "../lib/store/createStore";
import { createSyncAdapter } from "../lib/store/createSyncAdapter";
import { createRepository } from "../lib/store/createRepository";
import { createCrudDispatcher } from "../lib/store/createCrudDispatcher";

export type TodoExampleContextStateProps = {};

let idCounter = 0;
const nextId = () => idCounter++;
const repository = createRepository<TodoId, Todo>();
const TodoStoreContext = createContext(
  createStore(
    repository,
    createCrudDispatcher(
      repository,
      createSyncAdapter(
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
    <Example label="Todo app with context state">
      <TodoExample
        todos={entries.toList().toArray()}
        createTodo={actions.create}
        updateTodo={actions.update}
        deleteTodo={actions.delete}
      />
    </Example>
  );
};
