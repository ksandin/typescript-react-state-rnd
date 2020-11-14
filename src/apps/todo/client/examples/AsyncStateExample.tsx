import React from "react";
import { TodoApp } from "../TodoApp";
import { Todo } from "../../shared/Todo";
import { TodoId } from "../../shared/TodoId";
import { useStore } from "../../../../lib/store/useStore";
import { createStore } from "../../../../lib/store/createStore";
import { createRepository } from "../../../../lib/store/createRepository";
import { createCrudDispatcher } from "../../../../lib/crud/createCrudDispatcher";
import { createCrudMemoryAdapter } from "../../../../lib/crud/createCrudMemoryAdapter";
import { createNumericCrudIdentityFactory } from "../../../../lib/crud/createNumericCrudIdentityFactory";
import { Container } from "../Container";

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

export const AsyncStateExample = () => {
  const [entries, dispatches, actions] = useStore(todoStore);
  return (
    <Container>
      <TodoApp
        todos={entries.toList().toArray()}
        createTodo={actions.create}
        updateTodo={actions.update}
        deleteTodo={actions.delete}
        dispatches={dispatches}
      />
      <pre>{JSON.stringify(dispatches, null, 2)}</pre>
    </Container>
  );
};
