import React from "react";
import { Map } from "immutable";
import { TodoApp } from "../TodoApp";
import { Todo } from "../../shared/Todo";
import { TodoId } from "../../shared/TodoId";
import { createStore } from "../../../../lib/store/createStore";
import { createRepository } from "../../../../lib/store/createRepository";
import { createCrudDispatcher } from "../../../../lib/crud/createCrudDispatcher";
import { createCrudMemoryAdapter } from "../../../../lib/crud/createCrudMemoryAdapter";
import { createNumericCrudIdentityFactory } from "../../../../lib/crud/createNumericCrudIdentityFactory";
import { Container } from "../Container";
import { useDispatcher } from "../../../../lib/store/useDispatcher";
import { useSelector } from "../../../../lib/store/useSelector";

const repository = createRepository(Map<TodoId, Todo>());
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
  const [actions, dispatches] = useDispatcher(todoStore.dispatcher);
  const entries = useSelector(todoStore.repository, (state) => state);
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
