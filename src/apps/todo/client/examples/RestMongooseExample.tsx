import React, { useState } from "react";
import { Map } from "immutable";
import { createRepository } from "../../../../lib/store/createRepository";
import { TodoId } from "../../shared/TodoId";
import { Todo } from "../../shared/Todo";
import { createStore } from "../../../../lib/store/createStore";
import { createCrudActions } from "../../../../lib/crud/createCrudActions";
import { TodoApp } from "../TodoApp";
import { createCrudRestAdapter } from "../../../../lib/crud/createCrudRestAdapter";
import { Container } from "../Container";
import { useDispatcher } from "../../../../lib/store/useDispatcher";
import { useSelector } from "../../../../lib/store/useSelector";
import { createDispatcher } from "../../../../lib/store/createDispatcher";

const createTodoStore = () => {
  const repository = createRepository(Map<TodoId, Todo>());
  return createStore(
    repository,
    createDispatcher(
      createCrudActions(
        repository,
        createCrudRestAdapter<TodoId, Todo>(
          "http://localhost:3002/todo",
          (todo) => todo.id
        )
      )
    )
  );
};

export const RestMongooseExample = () => {
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
        readAllTodos={actions.readAll}
      />
    </Container>
  );
};
