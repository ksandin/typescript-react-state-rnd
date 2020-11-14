import React, { useState } from "react";
import { createRepository } from "../../../../lib/store/createRepository";
import { TodoId } from "../../shared/TodoId";
import { Todo } from "../../shared/Todo";
import { createStore } from "../../../../lib/store/createStore";
import { createCrudDispatcher } from "../../../../lib/crud/createCrudDispatcher";
import { useStore } from "../../../../lib/store/useStore";
import { TodoApp } from "../TodoApp";
import { createNumericCrudIdentityFactory } from "../../../../lib/crud/createNumericCrudIdentityFactory";
import { createCrudMemoryAdapter } from "../../../../lib/crud/createCrudMemoryAdapter";
import { automateLocalStorageSerialization } from "../../../../lib/automateLocalStorageSerialization";
import { Container } from "../Container";

const createTodoStore = () => {
  const repository = createRepository<TodoId, Todo>();
  automateLocalStorageSerialization("localStateObserverExample", repository);
  return createStore(
    repository,
    createCrudDispatcher(
      repository,
      createCrudMemoryAdapter<TodoId, Todo>(
        createNumericCrudIdentityFactory(
          (todo) => todo.id,
          (todo, id) => ({ ...todo, id }),
          repository.entries
        ),
        repository.entries
      )
    )
  );
};

export const LocalStorageObserverExample = () => {
  const [store] = useState(createTodoStore);
  const [entries, , actions] = useStore(store);
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
