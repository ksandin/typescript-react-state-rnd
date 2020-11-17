import React, { useState } from "react";
import { Map } from "immutable";
import { createRepository } from "../../../../lib/store/createRepository";
import { TodoId } from "../../shared/TodoId";
import { Todo } from "../../shared/Todo";
import { createStore } from "../../../../lib/store/createStore";
import { createCrudDispatcher } from "../../../../lib/crud/createCrudDispatcher";
import { TodoApp } from "../TodoApp";
import { createNumericCrudIdentityFactory } from "../../../../lib/crud/createNumericCrudIdentityFactory";
import { createCrudMemoryAdapter } from "../../../../lib/crud/createCrudMemoryAdapter";
import { automateLocalStorageSerialization } from "../../../../lib/crud/automateLocalStorageSerialization";
import { Container } from "../Container";
import { useDispatcher } from "../../../../lib/store/useDispatcher";
import { useSelector } from "../../../../lib/store/useSelector";

const createTodoStore = () => {
  const repository = createRepository(Map<TodoId, Todo>());
  automateLocalStorageSerialization("localStateObserverExample", repository);
  return createStore(
    repository,
    createCrudDispatcher(
      repository,
      createCrudMemoryAdapter<TodoId, Todo>(
        createNumericCrudIdentityFactory(
          (todo) => todo.id,
          (todo, id) => ({ ...todo, id }),
          repository.state
        ),
        repository.state
      )
    )
  );
};

export const LocalStorageObserverExample = () => {
  const [store] = useState(createTodoStore);
  const [actions] = useDispatcher(store.dispatcher);
  const entries = useSelector(store.repository, (state) => state);
  return (
    <Container>
      <TodoApp
        todos={entries.toList().toArray()}
        createTodo={actions.create}
        updateTodo={actions.update}
        deleteTodo={actions.delete}
      />
    </Container>
  );
};
