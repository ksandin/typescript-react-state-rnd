import React from "react";
import { TodoList } from "./TodoList";
import { CreateTodoForm } from "./CreateTodoForm";
import { Todo } from "../state/Todo";
import styled from "styled-components";
import { Paper } from "@material-ui/core";

export type TodoExampleProps = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  updateTodo: (todo: Todo) => void;
  deleteTodo: (todo: Todo) => void;
};

export const TodoExample: React.FC<TodoExampleProps> = ({
  todos,
  addTodo,
  updateTodo,
  deleteTodo,
}) => (
  <Container>
    <TodoList items={todos} onUpdate={updateTodo} onDelete={deleteTodo} />
    <CreateTodoForm onCreate={addTodo} />
  </Container>
);

const Container = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
`;
