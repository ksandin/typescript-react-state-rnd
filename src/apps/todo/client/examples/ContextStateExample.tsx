import React, { createContext, useContext } from "react";
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
const TodoStoreContext = createContext(
  createStore(
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
  )
);

export const ContextStateExample = () => {
  const store = useContext(TodoStoreContext);
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
