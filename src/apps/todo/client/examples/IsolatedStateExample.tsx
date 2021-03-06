import React, { useState } from "react";
import { Map } from "immutable";
import { Typography } from "@material-ui/core";
import { Todo } from "../../shared/Todo";
import { TodoId } from "../../shared/TodoId";
import { TodoApp } from "../TodoApp";
import { createRepository } from "../../../../lib/store/createRepository";
import { createStore } from "../../../../lib/store/createStore";
import { createCrudActions } from "../../../../lib/crud/createCrudActions";
import { createNumericCrudIdentityFactory } from "../../../../lib/crud/createNumericCrudIdentityFactory";
import { createCrudMemoryAdapter } from "../../../../lib/crud/createCrudMemoryAdapter";
import { Container } from "../Container";
import { useDispatcher } from "../../../../lib/store/useDispatcher";
import { useSelector } from "../../../../lib/store/useSelector";
import { createDispatcher } from "../../../../lib/store/createDispatcher";

export const IsolatedStateExample = () => (
  <Container>
    <Typography variant="h6">App 1</Typography>
    <TodoComponentStoreExample />
    <Typography variant="h6">App 2</Typography>
    <TodoComponentStoreExample />
  </Container>
);

const createTodoStore = () => {
  const repository = createRepository(Map<TodoId, Todo>());
  return createStore(
    repository,
    createDispatcher(
      createCrudActions(
        repository,
        createCrudMemoryAdapter<TodoId, Todo>(
          createNumericCrudIdentityFactory(
            (todo) => todo.id,
            (todo, id) => ({ ...todo, id })
          )
        )
      )
    )
  );
};

const TodoComponentStoreExample = () => {
  const [store] = useState(createTodoStore);
  const [actions] = useDispatcher(store.dispatcher);
  const entries = useSelector(store.repository, (state) => state);
  return (
    <TodoApp
      todos={entries.toList().toArray()}
      createTodo={actions.create}
      updateTodo={actions.update}
      deleteTodo={actions.delete}
    />
  );
};
