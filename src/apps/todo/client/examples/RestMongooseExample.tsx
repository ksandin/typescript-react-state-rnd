import React, { useState } from "react";
import { Map } from "immutable";
import { createRepository } from "../../../../lib/store/createRepository";
import { TodoId } from "../../shared/TodoId";
import { Todo } from "../../shared/Todo";
import { createStore } from "../../../../lib/store/createStore";
import { createCrudDispatcher } from "../../../../lib/crud/createCrudDispatcher";
import { useStore } from "../../../../lib/store/useStore";
import { TodoApp } from "../TodoApp";
import { createCrudRestAdapter } from "../../../../lib/crud/createCrudRestAdapter";
import { Container } from "../Container";

const createTodoStore = () => {
  const repository = createRepository(Map<TodoId, Todo>());
  return createStore(
    repository,
    createCrudDispatcher(
      repository,
      createCrudRestAdapter<TodoId, Todo>(
        "http://localhost:3002/todo",
        (todo) => todo.id
      )
    )
  );
};

export const RestMongooseExample = () => {
  const [store] = useState(createTodoStore);
  const [entries, , actions] = useStore(store);
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
