import React from "react";
import { Typography } from "@material-ui/core";
import { TodoId } from "../shared/TodoId";
import { Todo } from "../shared/Todo";
import { useStore } from "../../../lib/store/useStore";
import { TodoExample } from "./TodoExample";
import { createRepository } from "../../../lib/store/createRepository";
import { createStore } from "../../../lib/store/createStore";
import { createCrudDispatcher } from "../../../lib/crud/createCrudDispatcher";
import { createNumericCrudIdentityFactory } from "../../../lib/crud/createNumericCrudIdentityFactory";
import { createCrudMemoryAdapter } from "../../../lib/crud/createCrudMemoryAdapter";

const createCrudStore = () => {
  const repository = createRepository<TodoId, Todo>();
  return createStore(
    repository,
    createCrudDispatcher(
      repository,
      createCrudMemoryAdapter<TodoId, Todo>(
        createNumericCrudIdentityFactory(
          (todo) => todo.id,
          (todo, id) => ({ ...todo, id })
        )
      )
    )
  );
};

// HACK extracting type information from hook
type TodoStore = ReturnType<typeof createCrudStore>;

export const TodoExampleSharedState = () => {
  const store = createCrudStore();
  return (
    <>
      <Typography variant="h6">App 1</Typography>
      <TodoStoreExample store={store} />
      <Typography variant="h6">App 2</Typography>
      <TodoStoreExample store={store} />
    </>
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
