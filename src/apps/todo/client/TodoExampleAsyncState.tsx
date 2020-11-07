import React from "react";
import { TodoExample } from "./TodoExample";
import { Todo } from "../shared/Todo";
import { TodoId } from "../shared/TodoId";
import { useStore } from "../../../lib/store/useStore";
import { createStore } from "../../../lib/store/createStore";
import { createRepository } from "../../../lib/store/createRepository";
import { createCrudDispatcher } from "../../../lib/crud/createCrudDispatcher";
import { createCrudMemoryAdapter } from "../../../lib/crud/createCrudMemoryAdapter";
import { createNumericCrudIdentityFactory } from "../../../lib/crud/createNumericCrudIdentityFactory";

const repository = createRepository<TodoId, Todo>();
const todoStore = createStore(
  repository,
  createCrudDispatcher(
    repository,
    createCrudMemoryAdapter<TodoId, Todo>(
      createNumericCrudIdentityFactory(
        (todo) => todo.id,
        (todo, id) => ({ ...todo, id })
      ),
      undefined,
      1000
    )
  )
);

export type TodoExampleAsyncStateProps = {};

export const TodoExampleAsyncState: React.FC<TodoExampleAsyncStateProps> = () => {
  const [entries, dispatches, actions] = useStore(todoStore);
  return (
    <>
      <TodoExample
        todos={entries.toList().toArray()}
        createTodo={actions.create}
        updateTodo={actions.update}
        deleteTodo={actions.delete}
        dispatches={dispatches}
      />
      <pre>{JSON.stringify(dispatches, null, 2)}</pre>
    </>
  );
};
